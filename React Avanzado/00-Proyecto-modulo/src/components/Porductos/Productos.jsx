import { useState, useEffect } from 'react'
import Producto from './Productos'

const Productos = () => {
  const [productos, setProductos] = useState([])
  const url = 'https://ecomerce-master.herokuapp.com/api/v1/item'

  const showData = async () => {
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    setProductos(data)
  }

  useEffect(() => {
    showData()
  }, [])

  return (

    <div className='row'>
      {productos.map(() => {
        return (
          <div>Hola Mundo</div>

        )
      })}
    </div>
  )
}

export default Productos
