import React from 'react'

function Saludo (props) {
  return (
    <>
      <h2>Hola! {props.persona}, tienes {props.edad} años</h2>
    </>
  )
}

export default Saludo
