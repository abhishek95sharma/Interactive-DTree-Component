import { useContext } from "react"
import { ArgsContext } from "./ArgsContext"
import type { NodeObject } from "./Node"

interface EdgeType {
  id: number
  isLeft: boolean
}

const EdgeContent = ({ id, isLeft }: EdgeType) => {
  const args = useContext(ArgsContext)
  const data: NodeObject[] = args.data
  const node_data = data.find((a) => a.node_id === id)

  return (
    <>
      <div className="edge-content">
        {isLeft ? node_data!.left.condition : node_data!.left.condition}
      </div>
    </>
  )
}

export default EdgeContent
