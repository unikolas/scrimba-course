import React, {useState} from 'react'
import Header from '../components/Header'
import Wrapper from '../components/Wrapper'

const Home = () => {
    return (
        <Wrapper>
            <Coordinates />
            <Header>Home</Header>
        </Wrapper>
    )
}

export default Home