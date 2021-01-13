import React, {useState} from "react"
import {Link} from "react-router-dom"
import styled, {css} from 'styled-components'
import { motion } from "framer-motion"

import kit from "../constants/general"
import typography from "../constants/typography"
import elevation from "../constants/elevation"


const navStyles ={
    margin: 16,
    size: 40,
    shift: -72
}

const StyledLink = styled(Link)`
    display: block;
    white-space: nowrap;
    user-select: none;
    width: auto;
    padding: 8px 0;
    font-weight: 500;
    font-size: 13px;
    ${typography.text.primary}
`

const Menu = (props) => {
    const animateMenu = {
        open: {
            y: -navStyles.shift,
            opacity: 1,
            display: "block",
        },
        closed: { 
            y: 0,
            opacity: 0,
            transitionEnd: {
                display: "none",
            },
        },
    }
    return (
      <motion.div 
            className={props.className}
            animate={props.isOpen ? "open" : "closed"}
            transition={{type: "spring", damping: 50, stiffness: 500}}
            variants={animateMenu}
            >
                <StyledLink to="/">Home</StyledLink>
                <StyledLink to="/framer-motion">Framer Motion</StyledLink>
                <StyledLink to="/app-callback">App Callback</StyledLink>
                <StyledLink to="/about">About Us</StyledLink>
                <StyledLink to="/shop">Shop Now</StyledLink>
      </motion.div>
    )
}

const StyledMenu = styled(Menu)`
    position: absolute;
    background-color: white;
    width: auto;
    padding: 40px;
    border-radius: 9px;
    ${elevation("e600")};
    right: 0;
    top: ${navStyles.shift}px;
    /* top: ${0}px; */
    ${props => props.isOpen ? css`
        display: block;
    ` 
    : css`display: none;`}
    display: block;
`

const NavButton = styled.div`
    position: relative;
    cursor: pointer;
    margin: 12px;
    width: ${navStyles.size}px;
    height: ${navStyles.size}px;
    background-color: #fff;
    border: ${props => props.isOpen? "2px solid #E8E3E3" : "none"};
    border-radius: 56px;
    ${ props => !props.isOpen ? elevation("e100") : elevation("e0")};
    :hover { 
        ${elevation("e100", true)} 
    };
    transition: box-shadow ${kit.animation.curve.default} ${kit.animation.duration.short};
`

const Navigation = (props) => {
    const [isOpen, setIsOpen] = useState(props.isOpen || false)
    const handleClick = () => setIsOpen(!isOpen)
    return (
        <div className={props.className} style={{align: "right"}}>
            <StyledMenu isOpen={isOpen}/>
            <NavButton isOpen={isOpen} onClick={handleClick}/>
        </div>
    )
}

const StyledNavigation = styled(Navigation)`
    display: block;
    position: fixed;
    right: ${navStyles.margin}px;
    top: ${navStyles.margin}px;
    z-index: 100;
`

export default StyledNavigation