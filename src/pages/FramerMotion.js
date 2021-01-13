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
        backgroundColor: "#FF5D7A"
    },
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

    const blockStyle ={margin: "48px 16px 20px 0"}
    const pStyle ={fontSize: 14, fontWeight: 600}

    return (
    <div>
        <button onClick={() => setIsOpen(!isOpen)} >Animate </button>
        <div style={blockStyle}>
            <p style={pStyle}>Variants</p>
            <code>Simple width and colour.</code>
        </div>
        <motion.div
            onClick={() => setIsOpen(!isOpen)}
            animate={isOpen ? "open" : "closed"}
            variants={navStateVariants}
            style={boxStyles}
        />
        <div style={blockStyle}>
            <p style={pStyle}>Spring</p>
            <code>type: "spring", damping: 50, stiffness: 500</code>
        </div>
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
    </div>
    )
}

function FramerMotion() {
    return (
        <Wrapper>
            <Header>Framer Motion</Header>
            <br />
            <MyComponent/>
        </Wrapper>
    )
}

export default FramerMotion