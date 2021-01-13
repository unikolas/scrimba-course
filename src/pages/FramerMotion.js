import React, {useState} from "react"
import {motion} from "framer-motion"

import Header from "../components/Header"
import Wrapper from "../components/Wrapper"

const navStateVariants = {
    open: { 
        // x: 0,
        // width: "200%"
    },
    closed: { 
        // x: "50vw",
        width: "100%",
        backgroundColor: "#FF5D7A",
    },
  }

const Block = (props) => {
    const blockStyle ={margin: "48px 16px 20px 0"}
    const header ={display: "block", fontSize: 14, fontWeight: 600, marginBottom: 16}
    return (
        <div>
            <div style={blockStyle}>
                {props.link ? 
                    <a style={header} href={props.link} target="_blank">{props.header}</a> 
                    : <p style={header}>{props.header}</p>}
                {props.text && <code>{props.text}</code>}
            </div>
            {props.children}
        </div>

    )
}

const MyComponent = () => {
    const [isOpen, setIsOpen] = useState(true)

    const boxStyles = {
        cursor: "pointer",
        backgroundColor: "#1A9BFF",
        borderRadius: 7,
        display: "block",
        width: "80px",
        height: "80px"
    }

    return (
        <div>
            <button onClick={() => setIsOpen(!isOpen)} >Animate </button>
            <Block 
                header={"Variants"}
                text={"Simple width and colour."}
            >
                <motion.div
                    onClick={() => setIsOpen(!isOpen)}
                    animate={isOpen ? "open" : "closed"}
                    variants={navStateVariants}
                    style={boxStyles}
                />
            </Block>

            <Block 
                header={"Variants"}
                link={"https://www.framer.com/api/motion/types/#transition"}
                text={'type: "spring", damping: 50, stiffness: 500'}
            >
                <motion.div
                    onClick={() => setIsOpen(!isOpen)}
                    animate={isOpen ? "open" : "closed"}
                    variants={navStateVariants}
                    transition={{ 
                        type: "spring", 
                        damping: 50,
                        stiffness: 500,
                        // mass: 0.5
                    }}
                    style={boxStyles}
                />
            </Block>
        </div>
    )
}

function FramerMotion() {
    return (
        <Wrapper>
            <Header>Framer Motion</Header>
            <MyComponent/>
        </Wrapper>
    )
}

export default FramerMotion