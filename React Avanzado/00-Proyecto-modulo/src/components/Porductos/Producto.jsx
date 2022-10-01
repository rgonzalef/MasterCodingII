import React from 'react'

const Producto = (props) => {
  return (
    <div>

      <h1>{props.product_name}</h1>
      <p>{props.description}</p>

    </div>
  )
}

export default Producto
