import { useState, useContext, useEffect } from "react"
import { TreeDataContext } from "./TreeDataContext"
import { Streamlit } from "streamlit-component-lib"

import NodeContent from "./NodeContent"
import EdgeContent from "./EdgeContent"

export interface NodeObject {
  node_id: number
  left: {
    id: number
    condition: string
  }
  right: {
    id: number
    condition: string
  }
  contents: string[]
  color: string
}

export interface NodeId {
  id: number
}

const Node = ({ id }: NodeId) => {
  const args = useContext(TreeDataContext)
  const data: NodeObject[] = args.data
  const [childrenVisible, setChildrenVisible] = useState(true)

  useEffect(() => Streamlit.setFrameHeight(), [childrenVisible])

  const node_data = data.find((a) => a.node_id === id)

  const hasChildren = node_data!.left != null && node_data!.right != null

  console.log("id ", id, node_data, hasChildren)

  function switchChildrenVisible() {
    setChildrenVisible(!childrenVisible)
  }

  return (
    <>
      <NodeContent id={id} />
      {hasChildren && (
        <div
          className="child-button"
          onClick={(e) => switchChildrenVisible()}
        ></div>
      )}

      {hasChildren && childrenVisible && (
        <ul>
          <li>
            <EdgeContent id={id} isLeft={true} />
            <Node id={node_data!.left.id} />
          </li>
          <li>
            <EdgeContent id={id} isLeft={false} />
            <Node id={node_data!.right.id} />
          </li>
        </ul>
      )}
    </>
  )
}

export default Node
