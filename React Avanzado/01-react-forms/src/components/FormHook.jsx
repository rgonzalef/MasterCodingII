import { useState, useEffect } from 'react'
import useForm from '../hooks/useForm'
import logo from '../assets/react.svg'

const FormHook = () => {
  // Paso1, crear un unico estado con tda la info en forma de objeto
  const [datos, setDatos] = useState({
    nombre: '',
    apellido: '',
    edad: 0,
    genero: '',
    email: '',
    password: ''
  })

  const sendData = (data) => {
    console.log(data)
  }
  // Paso 4 uso mi custom hook de useForm
  const { input, handleInputChange, handleSubmit } = useForm(sendData, datos)

  // paso2, voy a simular traer datos de una API y prerrellenar el formulario
  useEffect(() => {
    setTimeout(() => {
      const info = {
        nombre: 'Raul',
        apellido: 'Gonzalez',
        edad: 39,
        genero: 'M',
        email: 'rgonzalef@gmail.com',
        password: 'clavesegura'
      }
      setDatos(info)
    }, 2000)
  }, [])

  // Paso3 crear Formulario

  return (
    <div className='login'>
      <div className='login-container'>
        <img src={logo} alt='logo' className='logo' width='200px' height='200px' />

        <form>

          <label htmlFor='nombre'>Nombre</label>
          <input
            type='text'
            name='nombre'
            placeholder='Nombre'
            id='nombre'
            onChange={handleInputChange}
            value={input.nombre}
          />

          <label htmlFor='apellido'>Apellido</label>
          <input
            type='text'
            name='apellido'
            placeholder='apellido'
            id='apellido'
            onChange={handleInputChange}
            value={input.apellido}
          />

          <label htmlFor='edad'>Edad</label>
          <input
            type='number'
            name='edad'
            placeholder='Ingresa tu edad'
            id='edad'
            onChange={handleInputChange}
            value={input.edad}
          />

          <select
            name='genero'
            id='genero'
            onChange={handleInputChange}
            value={input.genero}
          >
            <option value=''>Elige un genero</option>
            <option value='M'>Masculino</option>
            <option value='F'>Femenino</option>
            <option value='O'>Otro</option>
          </select>

          <label htmlFor='email'>Email</label>
          <input
            type='text'
            name='email'
            placeholder='correo@mail.com'
            id='email'
            onChange={handleInputChange}
            value={input.email}
          />

          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            placeholder='*****'
            id='password'
            onChange={handleInputChange}
            value={input.password}
          />

          <button onClick={handleSubmit}>Iniciar Sesión</button>

        </form>

      </div>
    </div>
  )
}

export default FormHook
