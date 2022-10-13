import React, { useState } from 'react'

const Lista = () => {
  const [arrayNumero, setNumero] = useState([1, 2, 3, 4, 5, 6])
  const [incremento, setIncremento] = useState(7)

  const agregarElemento = () => {
    setIncremento(incremento + 1)
    setNumero([
      ...arrayNumero,
      incremento
    ])
  }

  return (
    <>
      <h2>Lista</h2>
      <button onClick={agregarElemento}>Agregar</button>
      {
        arrayNumero.map((item, index) => {
          return <p key={index}>{item} - {index}</p>
        })
    }
    </>

  )
}

export default Lista
