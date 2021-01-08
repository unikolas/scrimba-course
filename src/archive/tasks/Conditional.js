import React from "react"

function Conditional(props) {
    return (
        <div>
          <p>{props.isLoading ? "⏱ Loading..." : "📬 Loaded!"}</p>
        </div>
    )
}

export default Conditional