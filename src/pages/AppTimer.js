import React, {useState, useEffect} from "react"

function App() {
    const [count, setCount] = useState(0)
    const [time, setTime] = useState("")
    const [intervalId, setIntervalId] = useState("")
    const [buttonLabel, setButtonLabel] = useState("START")
    
    function startStop() {
        if (intervalId) {
            clearInterval(intervalId)
            setButtonLabel("START")
            setIntervalId(null)
        } else {
            const intervalId = setInterval(() => {
                setCount(prevCount => prevCount + 1)
                }, 1000)
            
            setIntervalId(intervalId)
            setButtonLabel("STOP")
        }
    }

    function formatTime(s) {
        function pad(n, z) {
          z = z || 2
          return ('00' + n).slice(-z)
        }

        var secs = s % 60
        s = (s - secs) / 60
        var mins = s % 60
        var hrs = (s - mins) / 60
      
        return "." + pad(hrs) + " : " + pad(mins) + " : " + pad(secs)
      }

    useEffect(() => {
        // startStop()
        return () => clearInterval(intervalId)
    }, [])
    
    useEffect(() => setTime(formatTime(count)), [count])
    
    const buttonStyle = {
        margin: 0,
        cursor: "pointer",
        fontSize: "24vh",
        fontWeight: 800,
        textAlign: "right",
        lineHeight: "1",
        
    }

    return (
        <div style={{padding: 40}}>
            <h1 style={buttonStyle} onClick={startStop}>{time}</h1>
        </div>
    )
}

export default App
