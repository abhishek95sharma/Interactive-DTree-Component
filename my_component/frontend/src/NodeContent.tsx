import { useContext } from "react"
import { Streamlit } from "streamlit-component-lib"
import { TreeDataContext } from "./TreeDataContext"
import type { NodeObject, NodeId } from "./Node"

const NodeContent = ({ id }: NodeId) => {
  const args = useContext(TreeDataContext)
  const data: NodeObject[] = args.data
  const show_node_ids: boolean = args.show_node_ids
  const node_data = data.find((a) => a.node_id === id)

  const updateValue = (value: number) => {
    Streamlit.setComponentValue(value)
  }

  return (
    <>
      <div className="node">
        {show_node_ids && (
          <div
            className="node-content-left"
            onClick={(e) => {
              updateValue(id)
            }}
            style={{ backgroundColor: node_data!.color }}
          >
            {node_data!.node_id}
          </div>
        )}
        <div className="node-content-right">
          {node_data!.contents.map(function (content, i) {
            return (
              <div className="node-content-right-item" key={i}>
                {content}
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default NodeContent
