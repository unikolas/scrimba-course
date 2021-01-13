import React from "react"
import {Route, Switch } from 'react-router-dom'

import Navigation from "./components/Navigation"

import Error404 from './pages/Error404'
import Home from './pages/Home'
import About from './pages/About'
import AppCallback from './pages/AppCallback'
import FramerMotion from "./pages/FramerMotion"

function App() {
    return (
        <main>
            <Navigation isOpen={false} />
            <Switch >
                <Route path="/" component={Home} exact />
                <Route path="/framer-motion" component={FramerMotion} />
                <Route path="/app-callback" component={AppCallback} />
                <Route path="/about" component={About} />
                <Route component={Error404} />
            </Switch>
        </main>
    )
}

export default App