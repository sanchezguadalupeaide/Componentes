import './App.css'
import { Titulo } from './componentes/Titulo'
import { Suma } from './componentes/Suma'
import { TituloAlternativo } from './componentes/TituloAlternativo'

function App() {

  return (
    <>
      <Suma a={20} b={30} />
      <TituloAlternativo condicion={true}/>
    </>
  )
}

export default App
