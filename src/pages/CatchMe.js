import React, { useState } from 'react'
import { motion } from "framer-motion"
import randomcolor from "randomcolor"

import colors from '../constants/colors'

import Box from '../components/Box'
import Header from '../components/Header'
import Wrapper from '../components/Wrapper'


function CatchMe() {

    const items = [
        ["the cat", "🐱"],
        ["some money", "💰"],
        ["Elvis", "🕺"],
        ["the steak", "🥩"],
        ["the señorrrrita", "💃🏻"],
        ["some luck", "🔮"],
        ["corona. Woah", "🦠"],
        ["the guard", "💂"],
        ["the banana", "🍌"],
        ["these hands", "👋"],
        ["the ninja", "🥷"],
    ]
    
    const randomItem = () => items[Math.floor(Math.random() * items.length)]
    const [item, setItem] = useState(randomItem)

    const Boxed = () => {
        const [isAnimated, setAnimated] = useState(false)
        const [textAnimation, setTextAnimation] = useState({marginTop: "100px"})
        const [color] = useState(randomcolor)
    
        const handleAnimation = (event) => {
            setAnimated(!isAnimated)
            setTextAnimation(isAnimated ? {marginTop: "100px"} : {marginTop: "400px"})
        }
    
        return (
            <Box 
                bc={color}
                w={"50vh"}
                h={"50vh"}
                br={"50vh"}
                style={{
                    display: "block",
                    cursor: "pointer",
                    margin: "0 auto",
                    marginTop: "5%",
                    overflow: "hidden",
                }}
        
                onMouseEnter={ () => {
                    handleAnimation()
                }}
                onMouseLeave={ () => { 
                    handleAnimation()
                }}
                // onClick={() => {setItem(randomItem)}}
            >
                <motion.p 
                    animate={textAnimation}
                    transition={{type: "spring", duration: 0.2}}
                    style={{
                        display: 'block',
                        position: 'relative',
                        borderRadius: 3000,
                        textAlign: "center",
                        fontSize: 300,
                        color: colors.white,
                        marign: "auto",
                    }}
                >{item[1]}</motion.p>
            </Box>
        )
    }

    return (
        <Wrapper>
            <Header>Catch {item[0]}!</Header>
            <Boxed />
            <button 
                style={{
                    display: "block",
                    margin: "120px auto",
                }}
                onClick={() => {setItem(randomItem)}}
            >Wanna something else?</button>
        </Wrapper>
    )
}

export default CatchMe