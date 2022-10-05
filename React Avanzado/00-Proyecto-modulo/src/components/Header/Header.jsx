import { useContext } from 'react'
import { AuthContext } from '@/context/AuthContext'
import { Link } from 'react-router-dom'
import './Header.scss'

const Header = () => {
  const { isAuth, logout } = useContext(AuthContext)
  return (
    <nav className='header'>
      <Link to='/' className='header__logo'>SEARCHBAR</Link>
      <ul className='header__nav-list'>

        <li className='header__list-item'>
          <Link to='/' className='header__item-link'>Home</Link>
        </li>

        {
        !isAuth
          ? (
            <>
              <li className='header__list-item'>
                <Link to='/login' className='header__item-link'>Login</Link>
              </li>

              <li className='header__list-item'>
                <Link to='/signup' className='header__item-link'>Signup</Link>
              </li>
            </>
            )
          : (
            <>
              <li className='header__list-item'>
                <Link to='/dashboard' className='header__item-link'>Mi Perfil</Link>
              </li>
              <li className='header__list-item'>
                <Link
                  to='/'
                  className='header__item-link'
                  onClick={logout}
                >Logout
                </Link>
              </li>
            </>
            )
        }

      </ul>
    </nav>
  )
}
export default Header
