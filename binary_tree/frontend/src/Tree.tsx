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

const setStyle = (style: object) => {
  Object.entries(style).forEach(([key, value]) => {
    key = `--${key.replaceAll("_", "-")}`
    document.getElementById("root")!.style.setProperty(key, value)
  })
}

const Tree = (props: ComponentProps) => {
  const args = props.args
  const key = args.key
  const [lastFrameHeight, setLastFrameHeight] = useState(0)
  const treeRef: any = useRef(null)

  // console.log(args.style)
  setStyle(args.style)

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
    })
    const dataURL = canvas.toDataURL("image/jpg")
    downloadjs(dataURL, `${key}.jpg`, "image/jpg")
  }

  // const theme = args.theme
  // const style: React.CSSProperties = {}

  return (
    <ArgsContext.Provider value={args}>
      <button onClick={(e) => treeToPng()}>Download as Image</button>
      <div className="tree" ref={treeRef}>
        <ul className="rootNode">
          <li>
            <Node id={0} />
          </li>
        </ul>
      </div>
      <br />
    </ArgsContext.Provider>
  )
}

export default withStreamlitConnection(Tree)
