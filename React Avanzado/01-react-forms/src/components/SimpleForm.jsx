import { useState } from 'react'
import logo from '../assets/react.svg'

const SimpleForm = () => {
  // Paso 1, crear los estados donde se guardará la info tecleada
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  // paso 4, manejo lo que sucederá cuando envie mi formulario
  const handleSubmit = (event) => {
    event.preventDefault() // evito que se recargue la pagina y rompa el SPA
    const submittedData = JSON.stringify({ email, password })

    console.log(submittedData)
  }

  // Paso 2, crear el formulario base en JSX

  return (
    <div className='login'>
      <div className='login-container'>
        <img src={logo} alt='logo' className='logo' width='200px' height='200px' />

        <form>
          {/* Paso 3, guardo cada cambio del input en su estado  */}
          <label htmlFor='email'>Email</label>
          <input
            type='text'
            name='email'
            placeholder='correo@mail.com'
            id='email'
            onChange={(event) => { setEmail(event.target.value) }}
          />

          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            placeholder='*****'
            id='password'
            onChange={(event) => { setPassword(event.target.value) }}
          />

          <button onClick={handleSubmit}>Iniciar Sesión</button>

        </form>

      </div>
    </div>
  )
}

export default SimpleForm
