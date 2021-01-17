import React, {useState} from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import randomcolor from 'randomcolor'

import Header from '../components/Header'
import Wrapper from '../components/Wrapper'
import colors from '../constants/colors'


const Circle = styled(motion.div).attrs(props => ({
    style: {
        backgroundColor: props.bc,
        width: props.size + 'px',
        height: props.size + 'px',
        margin: '0 ' + props.size/2 + 'px ' + props.size/2 + 'px 0',
    },
}))`
    display: inline-block;
    border-radius: 200px;
`

const CirclesNumberInput = (props) => {
    const style = {
        display: 'block',
        clear: 'both',
        width: '160px',
    }
    return (
        <input 
            style={style}
            type='range' 
            min='10' max='100'
            defaultValue={props.defaultValue}
            onChange={props.onChange}
            />
    )
}

const Circles = (props) => {
    const arrayLength = 50
    const [circleSize, setCircleSize] = useState(24)
    const handleChange = (event) => setCircleSize(event.target.value)
    
    // const [mouse, setMouse] = useState({x: 0, y: 0})
    // const handleMouse = event => {
    //     setMouse({
    //         x: event.pageX,
    //         y: event.pageY
    //     })
    // }

    const circles = []
    for (let i = 0; i < arrayLength; i++) {
        circles.push(
            <Circle
                key={i} 
                size={circleSize}
                bc={randomcolor({luminosity: 'dark'})}
                whileHover={{ scale: 1.7 }}
                onClick={event => console.log(event)}
                />
        )
    }
    return (
        <div 
            // onMouseMove={handleMouse}
        >
            <CirclesNumberInput defaultValue={circleSize} onChange={handleChange}/>
            {circles}
        </div>
    )
}

const Content = () => {
    return (
        <Wrapper bc={'#2B384B'}>
            <Header color={colors.grey90}>Circles</Header>
            <Circles />
        </Wrapper>
    )
}

export default Content