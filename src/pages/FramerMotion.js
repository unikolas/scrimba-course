import React, {useState} from "react"
import {motion} from "framer-motion"

import Header from "../components/Header"
import Wrapper from "../components/Wrapper"
import Icon from "../components/Icon"

const navStateVariants = {
    open: { 
        
    },
    closed: { 
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
                    <a style={header} href={props.link} target="_blank" rel="noreferrer">{props.header}</a> 
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
                text={"Simply define states of the animation."}
            >
                <motion.div
                    style={boxStyles}
                    onClick={() => setIsOpen(!isOpen)}
                    animate={isOpen ? "open" : "closed"}
                    variants={navStateVariants}
                />
            </Block>

            <Block 
                header={"Types"}
                link={"https://www.framer.com/api/motion/types/#transition"}
                text={'transition={{type: "spring", damping: 50, stiffness: 500}}'}
            >
                <motion.div
                    style={boxStyles}
                    onClick={() => setIsOpen(!isOpen)}
                    animate={isOpen ? "open" : "closed"}
                    variants={navStateVariants}
                    transition={{ 
                        type: "spring", 
                        damping: 40,
                        stiffness: 400,
                        // mass: 0.5
                    }}
                />
            </Block>
            
            <Block
                header={"Drag"}
                link={"https://www.framer.com/api/motion/examples/#drag"}
                text={'drag, dragConstraints = {{top: ... , left: ... , right: ... , bottom: ... , }}'}
            >
                <motion.div
                    style={boxStyles}
                    drag
                    dragConstraints={{
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                    }}
                />
            </Block>

            

            <Block
                header={"Icon"}
                text={'name={"..."}, size={"..."}, color={"..."}, hover={boolean}'}
            >
                <Header as='h3' >Header here</Header>
                <Icon name={"sanitizer"} size={"sm"} color={"#FF5D7A"}/>
                <Icon name={"sanitizer"} size={"md"} color={"#FF5D7A"} hover={true}/>
                <Icon name={"sanitizer"} size={"lg"} hover={true}/>
                <Icon name={"sanitizer"} size={"xl"} hover={true}/>
                <Icon name={"sanitizer"} size={"xxl"} hover={true}/>
                <Icon name={"sanitizer"} size={"xxxl"} color={"#FF5D7A"}/>
                <Icon name={"sanitizer"} size={"xxxl"} color={"#FF5D7A"}
                    animate={{x: 100}}
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