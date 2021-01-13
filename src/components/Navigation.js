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
    shift: 56
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
    return (
      <div className={props.className}>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/framer-motion">Framer Motion</StyledLink>
        <StyledLink to="/app-callback">App Callback</StyledLink>
        <StyledLink to="/about">About Us</StyledLink>
        <StyledLink to="/shop">Shop Now</StyledLink>
      </div>
    )
}

const StyledMenu = styled(Menu)`
    position: absolute;
    right: ${navStyles.shift - 56}px;
    top: ${0}px;
    background-color: white;
    width: auto;
    padding: 40px;
    border-radius: 9px;
    transition: opacity ${kit.animation.duration.long}, position 0.3s;
    ${elevation("e600")};
`

const NavButton = styled.div`
    cursor: pointer;
    width: ${navStyles.size}px;
    height: ${navStyles.size}px;
    background-color: #fff;
    border-radius: 56px;
    ${elevation("e100")};
    :hover { 
        ${elevation("e100", true)} 
    };
    transition: box-shadow ${kit.animation.curve.default} ${kit.animation.duration.short};
`

const Navigation = (props) => {
    const [isOpen, setIsOpen] = useState(props.isOpen || false)
    const handleClick = () => setIsOpen(!isOpen)
    return (
        <div className={props.className}>
            <StyledMenu isOpen={isOpen}/>
            <NavButton onClick={handleClick}/>
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