import React from "react"

const Wrapper = (props) => {
    return (
        <div
            style={{
            width: "100%",
            minHeight: "100vh",
            padding: props.noPadding ? 0 : 40,
            backgroundColor: props.bc,
            }}
            {...props}
        >
            {props.children}
        </div>
    )
}

export default Wrapper