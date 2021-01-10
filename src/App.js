import React, {useState} from "react"

function App() {
    const kittensNumber = 10
    const [kittens, setKittens] = useState([])
    const [shadow, setShadow] = useState({x: 0, y: 8, spread: 24, color: "#9E9E9E"})

    function Image(props) {
        let imgShadow = props.shadow.x + "px " + props.shadow.y + "px " + props.shadow.spread + "px " + props.shadow.color
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
                    boxShadow: imgShadow,
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
                            shadow={shadow}
                        />
                    )
                }))
            })
    }

    function handleShadow(event) {
        let updatedShadow = shadow
        updatedShadow[event.target.name] = event.target.value
        setShadow(updatedShadow)
    }

    return (
        <div style={{padding: 40, border: "solid " + shadow.x +"px" }}>
            <button onClick={getKittens}>Gimme kittens!</button>
            <div style={{paddingTop: 16, maxWidth: 400}}>
                <p><input style={{height: 10}} type="range" name="x" defaultValue={shadow.x} min="0" max="100" onChange={handleShadow}/> X</p>
                <p><input style={{height: 10}} type="range" name="y" defaultValue={shadow.y} min="0" max="100" onChange={handleShadow}/> Y</p>
                <p><input style={{height: 10}} type="range" name="spread" defaultValue={shadow.spread} min="0" max="100" onChange={handleShadow}/> Spread</p>
            </div>
            <div style={{paddingTop: 24}}>
                {kittens}
            </div>
        </div>
    )
}

export default App
