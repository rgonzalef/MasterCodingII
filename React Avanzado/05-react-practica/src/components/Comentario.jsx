import React from 'react'
import Avatar from './Avatar'

const Comentario = ({ sujeto }) => {
  return (
    <>
      <h1>Comentarios</h1>
      <hr />
      <div className='media'>
        {/* <img className='mr-3' src={sujeto.urlimagen} alt='' /> */}
        <Avatar urlimagen={sujeto.urlimagen} />
        <div className='media-body' />
        <h5 className='mt-0'>{sujeto.nombre}</h5>
        {sujeto.texto}
      </div>
    </>

  )
}

export default Comentario
