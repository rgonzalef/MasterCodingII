import React from 'react'
import { useNavigate } from 'react-router-dom'
import { registerUserService } from '@/services/userService'
import logo from '@/assets/react.svg'
import form from '@/assets/css/form.css'
import useForm from '@/hooks/useForm'

const Signup = () => {
  const navigate = useNavigate()
  const sendData = async (data) => {
    try {
      const result = await registerUserService(data)
      if (result.status === 200) {
        navigate('/login')
      }
    } catch (error) {
      console.log('Ocurrio un error en el signup: ' + error.message)
    }
  }

  const { input, handleInputChange, handleSubmit } = useForm(sendData, {
    first_name: '',
    last_name: '',
    gender: '',
    email: '',
    password: ''
  })

  return (
    <main className='form-signin w-100 m-auto'>
      <form onSubmit={handleSubmit}>
        <img className='mb-4' src={logo} alt='' width='72' height='57' />
        <h1 className='h3 mb-3 fw-normal'>Please sign up</h1>

        <div className='form-floating'>
          <input
            type='text'
            className='form-control'
            id='first_mame'
            name='first_name'// coincide con el campo del API
            value={input.first_name}
            onChange={handleInputChange}
            placeholder='Jhon'
          />
          <label htmlFor='first_name'>First Name</label>
        </div>

        <div className='form-floating'>
          <input
            type='type'
            className='form-control'
            id='last_name'
            name='last_name'// coincide con el campo del API
            value={input.last_name}
            onChange={handleInputChange}
            placeholder='Perez'
          />
          <label htmlFor='last_name'>Last Name</label>
        </div>

        <div className='form-floating'>
          <select
            className='form-select'
            id='gender'
            name='gender'// coincide con el campo del API
            value={input.gender}
            onChange={handleInputChange}
          >
            <option value=''>Choose..</option>
            <option value='M'>Male</option>
            <option value='F'>Female</option>
          </select>
          <label htmlFor='gender'>Gender</label>
        </div>

        <div className='form-floating'>
          <input
            type='email'
            className='form-control'
            id='email'
            name='email'// coincide con el campo del API
            value={input.email}
            onChange={handleInputChange}
            placeholder='name@example.com'
          />
          <label htmlFor='email'>Email address</label>
        </div>

        <div className='form-floating'>
          <input
            type='password'
            className='form-control'
            id='password'
            name='password' // coincide con el campo del AP
            value={input.password}
            onChange={handleInputChange}
            placeholder='Password'
          />
          <label htmlFor='password'>Password</label>
        </div>

        <button className='w-100 btn btn-lg btn-primary' type='submit'>Sign in</button>
        <p className='mt-5 mb-3 text-muted'>© 2022</p>
      </form>
    </main>
  )
}

export default Signup
