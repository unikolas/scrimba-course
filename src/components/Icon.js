// Add material icons font to index.html
// <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">

import React from "react"
import {motion} from "framer-motion"

import colors from "../constants/colors"
import animation from "../constants/animation"

const size = {
    xxxs: 8,
    xxs: 12,
    xs: 16,
    sm: 20,
    md: 24,
    lg: 40,
    xl: 56,
    xxl: 96,
    xxxl: 160,
}

const defaultColor = colors.black
const defaultSize = size.md

const Icon = (props) => {
    const style = {
        WebkitTouchCallout: "none", /* iOS Safari */
        WebkitUserSelect: "none", /* Safari */
        KhtmlUserSelect: "none", /* Konqueror HTML */
        MozUserSelect: "none", /* Old versions of Firefox */
        msUserSelect: "none", /* Internet Explorer/Edge */
        userSelect: "none",
        color: props.color || defaultColor,
        fontSize: size[props.size] || defaultSize,
        transition: "color " + animation.duration.sm + " " + animation.curve.cubic,
    }

    return (
        <motion.span 
            className={"material-icons"}
            style={style}
            {...props}
        >
            {props.name}
        </motion.span>
    )
}


export default Icon