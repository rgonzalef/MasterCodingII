import React from 'react'
import { useLocation } from 'react-router-dom'

const Error404 = () => {
  const location = useLocation()
  return (
    <>
      <h1>Error404</h1>
      <p>No encontre la ruta: {location.pathname} </p>
    </>

  )
}

export default Error404
