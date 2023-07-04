import { useState, useContext } from "react"
import { ArgsContext } from "./ArgsContext"

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
  childrenVisible: boolean
}

export interface NodeId {
  id: number
}

const Node = ({ id }: NodeId) => {
  const args = useContext(ArgsContext)
  const data: NodeObject[] = args.data
  const node_data = data.find((a) => a.node_id === id)
  const [childrenVisible, setChildrenVisible] = useState(
    node_data!.childrenVisible != null ? node_data!.childrenVisible : true
  )

  node_data!.childrenVisible = childrenVisible

  const hasChildren = node_data!.left != null && node_data!.right != null
  const childrenVisibleStyle = childrenVisible
    ? {}
    : { opacity: 0, maxHeight: 0, maxWidth: 0, overflowX: "hidden" }

  // console.log("id ", id, node_data, hasChildren)

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

      {hasChildren && (
        <ul style={childrenVisibleStyle}>
          <li>
            <EdgeContent id={id} isLeft={true} key={id} />
            <Node id={node_data!.left.id} key={node_data!.left.id} />
          </li>
          <li>
            <EdgeContent id={id} isLeft={false} key={id} />
            <Node id={node_data!.right.id} key={node_data!.right.id} />
          </li>
        </ul>
      )}
    </>
  )
}

export default Node
