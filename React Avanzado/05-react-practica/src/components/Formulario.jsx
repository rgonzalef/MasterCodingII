import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

function Formulario () {
  const [datos, setDatos] = useState({
    nombre: '',
    apellido: ''
  })

  const handleInputChange = (event) => {
    // console.log(event.target.value)
    setDatos({
      ...datos,
      [event.target.name]: event.target.value
    })
  }
  const enviarDatos = (event) => {
    event.preventDefault()
    console.log(datos.nombre + ' ' + datos.apellido)
  }

  return (
    <>
      <h1>Formulario</h1>
      <form className='row' onSubmit={enviarDatos}>
        <div className='col-md-4'>
          <input
            type='text'
            placeholder='Ingrese Nombre'
            className='form-control'
            name='nombre'
            onChange={handleInputChange}
          />

        </div>
        <div className='col-md-4'>
          <input
            type='text'
            placeholder='Ingrese Apellido'
            className='form-control'
            name='apellido'
            onChange={handleInputChange}
          />

        </div>
        <div className='col-md-5'>
          <button type='submit' className='btn btn-primary'>Enviar</button>
        </div>

      </form>
    </>

  )
}

export default Formulario
