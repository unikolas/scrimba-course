import React from "react"

function ContactCard(props) {
  const styles = {
    display: "inline-block",
    margin: 12,
    padding: 24,
    width: "30%",
    boxShadow: "0px 1px 2px #9E9E9E",
    fontSize: 12,
  }
  
  return (
  <div style={styles}>
    <img style={{width:"100%"}} src={props.imgUrl}/>
    <h3>{props.name}</h3>
    <p>Phone: {props.phone}</p>
  </div>
  )

}

export default ContactCard