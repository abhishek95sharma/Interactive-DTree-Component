import React from "react"
import ReactDOM from "react-dom"
import { StreamlitProvider } from "streamlit-component-lib-react-hooks"
import Tree from "./Tree"

ReactDOM.render(
  <React.StrictMode>
    <StreamlitProvider>
      <Tree />
    </StreamlitProvider>
  </React.StrictMode>,
  document.getElementById("root")
)
