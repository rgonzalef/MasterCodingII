import { useState } from 'react'
import { useForm } from 'react-hook-form'

const EjemploUno = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()

  const [entradas, setEntradas] = useState([])

  const onSubmit = (data, e) => {
    console.log(data)
    setEntradas([
      ...entradas,
      data
    ])
    e.target.reset()
  }

  return (
    <>
      <h1>#EjemploUno</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type='text'
          name='titulo'
          placeholder='Ingrese título'
          className='form-control my-2'
          {...register('titulo', {
            required: 'Campo Obligatorio, minimo 2 letras',
            minLength: 2
          })}
        />
        {
            errors.titulo &&
              <span className='text-danger text-small d-block mb-2'>
                {errors.titulo.message}

              </span>
        }

        <input
          type='text'
          name='descripcion'
          placeholder='Ingrese descripción'
          className='form-control my-2'
          {...register('descripcion', {
            required: 'Campo Obligatorio'
          })}
        />
        {
            errors.descripcion &&
              <span className='text-danger text-small d-block mb-2'>
                {errors.descripcion.message}

              </span>
        }
        <button className='btn btn-primary'>Agregar</button>

      </form>

      <ul>
        {
            entradas.map((item, index) =>
              <li key={index}>{item.titulo} - {item.descripcion}</li>
            )
        }
      </ul>

    </>

  )
}

export default EjemploUno
