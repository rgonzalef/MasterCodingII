import { createContext, useState, useEffect, useContext } from 'react'
import canciones from '@/assets/listaCanciones.json'

const SongContext = createContext()

function SongProvider (props) {
  const [list, setList] = useState([]) // Lista de canciones
  const [loading, setLoading] = useState(true) // Ya cargo la información?
  const [selectedSong, setSelectedSong] = useState({})

  // Simulo llamada a la API de la lista de canciones
  useEffect(() => {
    setTimeout(() => {
      setList(canciones)
      setLoading(false)
    }, 2000)
  }, [])

  const value = {
    list,
    loading,
    selectedSong,
    setSelectedSong

  }

  return (
    <SongContext.Provider value={value}>
      {props.children}

    </SongContext.Provider>
  )
}

const useSongContext = () => {
  const context = useContext(SongContext)
  return context
}

export {
  SongProvider,
  useSongContext
}
