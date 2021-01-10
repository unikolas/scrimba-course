import React from "react"

function Product(props) {
  return(
    <div>
      <h1>{props.product.name} for {props.product.price.toLocaleString("en-UK", { style: "currency", currency: "GBP" })}</h1>
      <p>{props.product.description}</p>
    </div>
  )
}

export default Product