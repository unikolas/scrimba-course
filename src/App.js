import React from "react"
import {Route, Switch } from 'react-router-dom'

import Navigation from "./components/Navigation"

import Error404 from './pages/Error404'
import Home from './pages/Home'
import CatchMe from './pages/CatchMe'
import FramerMotion from "./pages/FramerMotion"

import AppCallback from './pages/AppCallback'

function App() {
    return (
        <main>
            <Navigation isOpen={false} />
            <Switch >
                <Route path="/" component={Home} exact />
                <Route path="/catch-me" component={CatchMe} />
                <Route path="/framer-motion" component={FramerMotion} />
                <Route path="/app-callback" component={AppCallback} />
                <Route component={Error404} />
            </Switch>
        </main>
    )
}

export default App