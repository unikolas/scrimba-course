import React, {useState} from "react"

// Convert the class below to a functional component that uses the useState hook to initalize a count vartiable to 0 and display the count on the screen.
// Don't worry about the part where the button changes the count quite yet, that's what you're here to learn about!

function App () {

    const [count, setCount] = useState(0)

    function increment() {
        setCount(prevCount => prevCount + 1)
    }

    function decrement(){
        setCount(prevCount => prevCount - 1)
    }

    function reset(){
        setCount(0)
    }

    return(
        <div style={{padding: 40}}>
            <h1>{count}</h1>
            <button onClick={decrement}>⬅️</button>
            <button onClick={reset}>🔄</button>
            <button onClick={increment}>➡️</button>
        </div>
    )
}

export default App
