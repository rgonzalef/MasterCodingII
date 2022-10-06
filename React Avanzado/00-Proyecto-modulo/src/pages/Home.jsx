import { useState, useEffect } from 'react'

const Home = () => {
  const [items, setItems] = useState([])
  const [search, setSearch] = useState('')

  // función para traer los datos de la API
  const URL = 'https://ecomerce-master.herokuapp.com/api/v1/item'

  const showData = async () => {
    const response = await fetch(URL)
    const data = await response.json()
    console.log(data)
    setItems(data)
  }

  // función de busqueda
  const searcher = (event) => {
    setSearch(event.target.value)
    // console.log(event.target.value)
  }

  // método de filtrado2
  const results = !search ? items : items.filter((dato) => dato.product_name.toLowerCase().includes(search.toLocaleLowerCase()))

  useEffect(() => {
    showData()
  }, [])

  return (
    <h1>Home</h1>
  )
}

export default Home
