import { useState, useEffect } from 'react'

function useForm (callback, defaults) {
// Estado unico para guardar los datos de mi formulario en un objeto
  const [input, setInput] = useState(defaults)
  // cargar valores por defecto
  useEffect(() => {
    setInput({ ...defaults })
  }, [])

  const handleInputChange = (event) => {
    const { name, value } = event.target
    // console.log(name, value)
    setInput({ ...input, [name]: value })
  }

  // función que se ejecuta al enviar el formulario
  const handleSubmit = (event) => {
    event.preventDefault() // evito que se recargue la pagina y rompa el SPA
    callback(input)// esta es una funcion que yo le envio como parámetro
  }
  return {
    input,
    handleInputChange,
    handleSubmit

  }
}

export default useForm
