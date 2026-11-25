import { useState } from 'react'
import Cabecalho from './components/Cabecalho'
import FormularioNotas from './components/FormularioNotas'
import CartaoResultado from './components/CartaoResultado'
import './App.css'

function App() {
  const [temaEscuro, setTemaEscuro] = useState(false)
  const [resultado, setResultado] = useState(null)

  function trocarTema() {
  setTemaEscuro(!temaEscuro)
  }
  return (
    <div className={temaEscuro ? 'app app--escuro' : 'app'}>
      <Cabecalho temaEscuro={temaEscuro} aoTrocarTema={trocarTema} />
        <main className="app__conteudo">
          <FormularioNotas aoCalcular={setResultado} />
          <CartaoResultado resultado={resultado} />
        </main>
    </div>
  )
}

export default App