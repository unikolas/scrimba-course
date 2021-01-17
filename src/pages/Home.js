import React, {useState} from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import Header from '../components/Header'
import Wrapper from '../components/Wrapper'

const Home = () => {
    const [mouse, setMouse] = useState({x: 0, y: 0})

    const handleMouse = event => {
        setMouse({
            x: event.pageX,
            y: event.pageY
        })
    }

    const Coordinates = () => {
        return (
            <motion.div
                style={{
                    position: 'absolute',
                    fontSize: 10,
                    top: mouse.y + 16, left: mouse.x + 16
                }}
            >{'x: ' + mouse.x}<br />{'y: ' + mouse.y}</motion.div>
        )
    }

    const Test = styled.div`
        display: 'block';
        width: ${mouse.x}px;
        height: 100px;
        background-color: '#ccc'
    `

    return (
        <Wrapper onMouseMove={handleMouse} >
            <Coordinates />
            <Header>Home</Header>
        </Wrapper>
    )
}

export default Home