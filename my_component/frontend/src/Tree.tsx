import {
  ComponentProps,
  withStreamlitConnection,
} from "streamlit-component-lib"
// import { useRenderData } from "streamlit-component-lib-react-hooks"
import React from "react"
import downloadjs from "downloadjs"
import html2canvas from "html2canvas"
import { TreeDataContext } from "./TreeDataContext"
import Node from "./Node"
import "./Node.scss"

const Tree = (props: ComponentProps) => {
  const args = props.args
  const key = args.key

  const treeToPng = async () => {
    const element = document.querySelector(".tree")!
    const useWidth = element.scrollWidth
    console.log()
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
    <TreeDataContext.Provider value={args}>
      <button onClick={(e) => treeToPng()}>Download as Image</button>
      <div className="tree">
        <ul className="rootNode">
          <li>
            <Node id={0} />
          </li>
        </ul>
      </div>
    </TreeDataContext.Provider>
  )
}

export default withStreamlitConnection(Tree)
