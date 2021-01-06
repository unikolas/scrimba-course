import React from "react"
import Product from "./tasks/Product"
import productsData from "./tasks/vschoolProducts"

const listOfProducts = productsData.map(
  item => <Product key={item.id} product={item}/>
)

const products = productsData.map(
  function (item) {
    return <Product key={item.id} product={item}/>
  }
)

function App() {
  return (
    <div>
      {/* {listOfProducts} */}
      {products}
    </div>
  )
}

export default App