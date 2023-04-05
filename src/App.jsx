import { useState } from 'react'
import Header from './components/Header'
import Modal from './components/Modal'
import ListadoGastos from './components/ListadoGastos'
import {generarId} from './helpers/index'
import IconoNuevoGasto from './img/nuevo-gasto.svg'


function App() {

  const [presupuesto, setPresupuesto] = useState(0)
  const [valido, setValido] = useState(false)

  const [modal, setModal] = useState(false)
  const [animacion, setAnimacion] = useState(false)

  const [gastos, setGastos] = useState([])

  const handleNuevoGasto = () => {
    setModal(true)

    setTimeout(() => {
      setAnimacion(true)
    }, 100)
  }

  const guardarGasto = gasto => {
    gasto.id = generarId()
    gasto.fecha = Date.now()
    setGastos([...gastos, gasto])
  }

  return (
    <div className={modal && 'fijar'}>
      <Header 
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        valido={valido}
        setValido={setValido}
      />
      {valido && (
        <>
          <main>
            <ListadoGastos 
              gastos = {gastos}
            />
          </main>
          <div className="nuevo-gasto">
              <img 
                src={IconoNuevoGasto} 
                alt="icono nuevo gasto" 
                onClick={handleNuevoGasto}  
              />
            </div>
        </>
      )}
      {modal && 
        <Modal 
          setModal={setModal}
          animacion={animacion}
          setAnimacion={setAnimacion}
          guardarGasto={guardarGasto}
        />
      }
    </div>
  )
}

export default App
