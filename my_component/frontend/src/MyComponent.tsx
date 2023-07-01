import { Streamlit } from "streamlit-component-lib"
import { useRenderData } from "streamlit-component-lib-react-hooks"
import React, { useState, useCallback } from "react"

const MyComponent: React.VFC = () => {
  // "useRenderData" returns the renderData passed from Python.
  const renderData = useRenderData()

  const [numClicks, setNumClicks] = useState(0)
  const [isFocused, setIsFocused] = useState(false)

  const onClicked = useCallback(() => {
    // Streamlit via `Streamlit.setComponentValue`.
    const newValue = numClicks + 1
    setNumClicks(newValue)

    Streamlit.setComponentValue(newValue)
  }, [numClicks])

  const onFocus = useCallback(() => {
    setIsFocused(true)
  }, [])

  const onBlur = useCallback(() => {
    setIsFocused(false)
  }, [])

  const name = renderData.args["name"]

  const theme = renderData.theme
  const style: React.CSSProperties = {}

  if (theme) {
    const borderStyling = `1px solid ${isFocused ? theme.primaryColor : "gray"}`
    style.border = borderStyling
    style.outline = borderStyling
  }

  return (
    <span>
      Hello, {name}! &nbsp;
      <button
        style={style}
        onClick={onClicked}
        disabled={renderData.disabled}
        onFocus={onFocus}
        onBlur={onBlur}
      >
        Click Me!
      </button>
    </span>
  )
}

export default MyComponent
