// Reglas para crear un hook
// Custom hook es una función que utiliza otros hooks de React
// 1. Siempre debemos usar la palabra 'use' al nombrarlo: useForm
// 2. Siempre deben se ser funcniones (a partir de React v16 usamos hooks)
// 3. Siempre debe de usar un hook de React
// 4. Deben ser reutilizables, no para casos muy especificos

import { useState, useEffect } from 'react'

function useForm (callback, defaults) {
// Estado unico para guardar los datos de mi formulario en un objeto
  const [input, setInput] = useState(defaults)
  // cargar valores por defecto
  useEffect(() => {
    setInput({ ...defaults })
  }, [defaults])

  const handleInputChange = (event) => {
    const { name, value } = event.target
    console.log(name, value)
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
