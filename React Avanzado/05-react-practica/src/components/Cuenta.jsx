import React, { useState } from 'react'

const Cuenta = () => {
  const [numero, setNumero] = useState(0)

  const aumentar = () => {
    setNumero(numero + 1)
  }
  const disminuir = () => {
    setNumero(numero - 1)
  }

  return (
    <>
      <h3>La cuenta es: {numero} </h3>
      <button onClick={aumentar}>Aumentar</button>
      <button onClick={disminuir}>Disminuir</button>

    </>

  )
}

export default Cuenta
