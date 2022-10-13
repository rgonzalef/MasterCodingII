// import Cuenta from './components/Cuenta'
// import Lista from './components/Lista'
// import Formulario from './components/Formulario'
import 'bootstrap/dist/css/bootstrap.min.css'
import Comentario from './components/Comentario'
import Saludo from './components/Saludo'
// import EjemploUno from './components/EjemploUno'

function App () {
  const sujeto = {
    nombre: 'Juanito',
    urlimagen: 'https://via.placeholder.com/64',
    texto: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, iure.'
  }
  return (
    <>
      <div className='container mt-5'>
        <h1>Componentes</h1>
        <Saludo persona='Juanito' edad={24} />
        <Saludo persona='Pedrito' edad={23} />
        <Comentario sujeto={sujeto} />
        {/*
      <EjemploUno />
      <Cuenta />
      <Lista /> */}

      </div>

    </>

  )
}

export default App
