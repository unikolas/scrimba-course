import React, {useState} from "react"
import {Link} from "react-router-dom"
import styled, {css} from 'styled-components'
import { motion } from "framer-motion"

import animation from "../constants/animation"
import typography from "../constants/typography"
import elevation from "../constants/elevation"
import colors from "../constants/colors"

import Icon from "../components/Icon"


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
                <StyledLink to="/catch-me">Catch me!</StyledLink>
                <StyledLink to="/framer-motion">Framer Motion</StyledLink>
                <StyledLink to="/app-callback">App Callback</StyledLink>
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
    ${props => props.isOpen ? css`
        display: block;
    ` 
    : css`display: none;`}
`

const Navigation = (props) => {
    const [isOpen, setIsOpen] = useState(props.isOpen || false)
    const handleClick = () => setIsOpen(!isOpen)

    return (
        <motion.div className={props.className} style={{align: "right"}}>
            <StyledMenu isOpen={isOpen} />
            <StyledNavButton isOpen={isOpen} onClick={handleClick} />
        </motion.div>
    )
}

const NavButton = (props) => {
    const icon = props.isOpen ? "close" : "menu"
    const iconAnimations = {
        open: {rotate: 0}, 
        close: {rotate: -90},
    }
    const [ iconColor, setIconColor ] = useState(colors.grey80)
    const [ iconAnimation, setIconAnimation ] = useState()

    return (
        <div 
            className={props.className}
            onClick={() => {
                props.onClick()
                setIconAnimation(props.isOpen ? iconAnimations.open : iconAnimations.close)
            }}
            onMouseEnter={() => setIconColor(colors.primary)}
            onMouseLeave={() => setIconColor(colors.grey80)}
        >
            <Icon name={icon} size={"sm"} color={iconColor} 
                animate={iconAnimation}
                transition={{type: "spring", damping: 50, stiffness: 500}}
                />
        </div>
    )
}

const StyledNavButton = styled(NavButton)`
    position: relative;
    cursor: pointer;
    margin: 12px;
    width: ${navStyles.size}px;
    height: ${navStyles.size}px;
    background-color: #fff;
    border-radius: 56px;
    display: flex;
    justify-content: center;
    align-items: center;
    ${ props => !props.isOpen ? elevation("e100") : elevation("e0")};
    :hover {
        ${props => props.isOpen? elevation("e0") : elevation("e100", true)};
    };
    transition: box-shadow ${animation.curve.cubic} ${animation.duration.md};
`

const StyledNavigation = styled(Navigation)`
    display: block;
    position: fixed;
    right: ${navStyles.margin*2}px;
    top: ${navStyles.margin+12}px;
    z-index: 100;
`

export default StyledNavigation