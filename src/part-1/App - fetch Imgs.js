import React, {useState, useEffect} from "react"

function App() {
    const kittensNumber = 10
    const [kittens, setKittens] = useState([])
    const [shadow, setShadow] = useState({ x: 0, y: 8, spread: 24, color: "#9E9E9E"})
    const [rawShadow, setRawShadow] = useState(shadow.x + "px " + shadow.y + "px " + shadow.spread + "px " + shadow.color)
    const [generatedDivs, setGeneratedDivs] = useState([])

    function Image(props) {
        return (
            <img 
                src={props.src}
                alt={props.alt} 
                style={{
                    display: "inline-block",
                    objectFit: "cover",
                    width: 160,
                    height: 160,
                    marginRight: 24,
                    marginBottom: 20,
                    boxShadow: rawShadow,
                    borderRadius: 4
                }}
            />
        )
    }

    function getKittens() {
        
        const url = "https://api.thecatapi.com/v1/images/search?limit="+kittensNumber+"&page=10&order=Desc"

        fetch(url)
            .then(response => response.json())
            .then(response => {
                // console.log(response)
                setKittens(response.map(kitten => {
                    return (
                        <Image 
                            key={kitten.id}
                            src={kitten.url}
                            alt={kitten.url}
                        />
                    )
                }))
            })
    }

    function handleShadow(event) {
        let newShadow = {
            ...shadow,
            [event.target.name]: event.target.value
        }
        setShadow(newShadow)
    }

    function Div() {
        const style = {
            fontSize: 15,
            padding: 12,
            borderRadius: 4,
            margin: "0 8px 8px 0",
            boxShadow: rawShadow
        }
        return (
            <div style={style}>Test div</div>
        )
    }

    const divs = [1,3,4].map(item => <Div key={item}/>)
    
    function generate() {
        setGeneratedDivs(divs) 
    }

    useEffect(() => {
        setRawShadow(shadow.x + "px " + shadow.y + "px " + shadow.spread + "px " + shadow.color)
    }, [shadow])

    return (
        <div style={{padding: 40, border: "solid " + shadow.x +"px" }}>
            <button onClick={getKittens}>Gimme kittens!</button>
            <button onClick={generate}>Generate</button>
            <div style={{paddingTop: 16, maxWidth: 400}}>
                <p><input style={{height: 10}} type="range" name="x" defaultValue={shadow.x} min="0" max="100" onChange={handleShadow}/> X</p>
                <p><input style={{height: 10}} type="range" name="y" defaultValue={shadow.y} min="0" max="100" onChange={handleShadow}/> Y</p>
                <p><input style={{height: 10}} type="range" name="spread" defaultValue={shadow.spread} min="0" max="100" onChange={handleShadow}/> Spread</p>
            </div>
            <div>x: {shadow.x} y: {shadow.y} spread: {shadow.spread}</div>
            <div style={{paddingTop: 24}}>
                {kittens}
                <Div />
                <br/><br/>
                {divs}
                {generatedDivs}
            </div>
        </div>
    )
}

export default App
