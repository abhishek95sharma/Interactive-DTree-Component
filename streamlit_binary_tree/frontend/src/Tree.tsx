import {
  ComponentProps,
  Streamlit,
  withStreamlitConnection,
} from "streamlit-component-lib"
import React, { useEffect, useState, useRef } from "react"

import downloadjs from "downloadjs"
import html2canvas from "html2canvas"
import { ArgsContext } from "./ArgsContext"
import Node from "./Node"
import "./Node.scss"

interface styleType {
  button_color: string
  button_hover_color: string
  edge_color: string
  edge_hover_color: string
  edge_size: string
  font_family: string
  font_size: string
  max_height: string
  node_border_color: string
  node_color: string
  node_hover_color: string
  node_size: string
  padding_quantum: string
  text_color: string
  text_hover_color: string
  text_outline_alpha: string
  text_outline_color: string
  text_outline_color_mix: string
  transition_time: string
}

const invertColor = (hex: string) => {
  if (hex.indexOf("#") === 0) {
    hex = hex.slice(1)
  }
  // convert 3-digit hex to 6-digits.
  if (hex.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2]
  }
  if (hex.length !== 6) {
    console.log("dfs", hex)
    throw new Error("Invalid HEX color.")
  }
  // invert color components
  var r = (255 - parseInt(hex.slice(0, 2), 16)).toString(16),
    g = (255 - parseInt(hex.slice(2, 4), 16)).toString(16),
    b = (255 - parseInt(hex.slice(4, 6), 16)).toString(16)
  // pad each with zeros and return
  return "#" + padZero(r, 2) + padZero(g, 2) + padZero(b, 2)
}

const colorToRGB = (hex: string) => {
  if (hex.indexOf("#") === 0) {
    hex = hex.slice(1)
  }
  // convert 3-digit hex to 6-digits.
  if (hex.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2]
  }
  if (hex.length !== 6) {
    throw new Error("Invalid Alpha-HEX color.")
  }
  // break color components
  var r = parseInt(hex.slice(0, 2), 16),
    g = parseInt(hex.slice(2, 4), 16),
    b = parseInt(hex.slice(4, 6), 16)
  // pad each with zeros and return
  var rgb = `${r}, ${g}, ${b}`
  return rgb
}

const padZero = (str: string, len: number) => {
  len = len || 2
  var zeros = new Array(len).join("0")
  return (zeros + str).slice(-len)
}

const setStyle = (originalStyle: styleType, theme: any) => {
  const style = { ...originalStyle }
  style.text_outline_color_mix = `rgba(${colorToRGB(
    style.text_outline_color
  )}, ${style.text_outline_alpha})`

  if (theme.base === "dark") {
    style.button_color = invertColor(style.button_color)
    style.button_hover_color = invertColor(style.button_hover_color)
    style.edge_color = invertColor(style.edge_color)
    style.edge_hover_color = invertColor(style.edge_hover_color)
    style.node_border_color = invertColor(style.node_border_color)
    style.node_color = invertColor(style.node_color)
    style.node_hover_color = invertColor(style.node_hover_color)
    style.text_color = invertColor(style.text_color)
    style.text_hover_color = invertColor(style.text_hover_color)
    style.text_outline_color = invertColor(style.text_outline_color)
    style.text_outline_color_mix = `rgba(${colorToRGB(
      style.text_outline_color
    )}, ${style.text_outline_alpha})`
  }
  Object.entries(style).forEach(([key, value]) => {
    key = `--${key.replaceAll("_", "-")}`
    document.getElementById("root")!.style.setProperty(key, value)
  })
  document
    .getElementById("root")!
    .style.setProperty("--backgroundColor", theme.backgroundColor)
}

const Tree = (props: ComponentProps) => {
  const args = props.args
  const key = args.key
  const style: styleType = args.style
  const theme = props.theme
  const [lastFrameHeight, setLastFrameHeight] = useState(0)
  const treeRef: any = useRef(null)

  setStyle(style, theme)

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (treeRef.current != null) {
        setLastFrameHeight(treeRef.current!.clientHeight)
      }
    }, 20)
    Streamlit.setFrameHeight()
    // console.log(
    //   lastFrameHeight,
    //   Streamlit.lastFrameHeight,
    //   treeRef.current!.clientHeight
    // )
    return () => clearInterval(intervalId)
  }, [lastFrameHeight])

  const treeToPng = async () => {
    const element = document.querySelector(".tree")!
    console.log(element.scrollWidth, element.clientWidth)
    const useWidth = element.scrollWidth
    const canvas = await html2canvas(document.querySelector(".tree")!, {
      width: useWidth,
      windowWidth: useWidth,
      scale: 4,
    })
    const dataURL = canvas.toDataURL("image/jpg")
    downloadjs(dataURL, `${key}.jpg`, "image/jpg")
  }

  // const style: React.CSSProperties = {}

  return (
    <ArgsContext.Provider value={args}>
      <button className="download-button" onClick={(e) => treeToPng()}>
        Download as Image
      </button>
      <div className="tree" ref={treeRef}>
        <ul className="rootNode">
          <li>
            <Node id={0} depth={0} />
          </li>
        </ul>
      </div>
      <br />
    </ArgsContext.Provider>
  )
}

export default withStreamlitConnection(Tree)
