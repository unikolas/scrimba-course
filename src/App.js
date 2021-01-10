import React, {useState, useEffect} from "react"
import randomcolor from "randomcolor"

function App() {
    const [count, setCount] = useState(0)
    const [color, setColor] = useState("")
    const [intervalId, setIntervalId] = useState()
    
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCount(prevCount => prevCount + 1)
        }, 1001)
        setIntervalId(intervalId)
        console.log("set up")
        return (() => {
            console.log("cleared")
            clearInterval(intervalId)
        })
    }, [])
    
    useEffect(() => setColor(randomcolor()), [count])

    function clearIntervalId() {
        clearInterval(intervalId)
        console.log("cleared")
    }

    return (
        <div style={{padding: 40}}>
            <h1 style={{color: color}}>{count}</h1>
            <button onClick={clearIntervalId}>Clear</button>
        </div>
    )
}

export default App
