import { createContext, useState, useEffect } from 'react'

import jwt_decode from 'jwt-decode'

export const AuthContext = createContext()

export function AuthProvider (props) {
  const [isAuth, setIsAuth] = useState(false) // estoy autenticado?
  const [user, setUser] = useState(null) // info del usuario descifrada

  const loginUser = (token) => {
    window.localStorage.setItem('token', token)
    const decoded = jwt_decode(token)
    setUser(decoded) // gardo la info del token decodificado en su estado
    setIsAuth(true) // estoy autenticado
  }

  const logout = () => {
    window.localStorage.removeItem('token')
    setIsAuth(false) // estoy desautenticado
    setUser(null)
  }

  useEffect(() => {
    const token = window.localStorage.getItem('token')
    if (token) {
      const decoded = jwt_decode(token)
      setUser(decoded) // gardo la info del token decodificado en su estado
      setIsAuth(true) // estoy autenticado
    }
  }, [])

  const values = {
    isAuth,
    user,
    loginUser,
    logout
  }

  return (
    <>
      <AuthContext.Provider value={values}>
        {props.children}
      </AuthContext.Provider>

    </>
  )
}
