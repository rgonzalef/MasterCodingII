import { Link, Outlet } from 'react-router-dom'

const Portafolio = () => {
  return (
    <>
      <h1>Portafolio</h1>
      <ul>
        <li>
          <Link to='/portafolio/1'>Pinterest</Link>
        </li>
        <li>
          <Link to='/portafolio/2'>Cajero</Link>
        </li>
        <li>
          <Link to='/portafolio/3'>Pokedex</Link>
        </li>
      </ul>
      <Outlet />

    </>

  )
}

export default Portafolio
