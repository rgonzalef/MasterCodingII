import React from 'react'
import { useForm } from 'react-hook-form'

function HookForm () {
  const { register, handleSubmit, watch, formState: { errors } } = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <>
      <h1>Formulario con React Hook</h1>
      <form onSubmit={handleSubmit(onSubmit)}>

        <input
          type='text'
          name='titulo'
          className='form-control my-2'
          ref={
            register({
              required: { value: true }
            })
}
        />
        <button className='btn btn-primary'>Enviar</button>
      </form>
    </>
  )
}

export default HookForm
