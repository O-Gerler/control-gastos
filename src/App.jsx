import { useState, useEffect } from 'react'
import Header from './components/Header'
import Filtro from './components/Filtro'
import Modal from './components/Modal'
import ListadoGastos from './components/ListadoGastos'
import {generarId} from './helpers/index'
import IconoNuevoGasto from './img/nuevo-gasto.svg'


function App() {

  const [gastos, setGastos] = useState(
    localStorage.getItem('gastos') ? JSON.parse(localStorage.getItem('gastos')) : []
  )

  const [presupuesto, setPresupuesto] = useState(localStorage.getItem('presupuesto') ?? 0)
  const [valido, setValido] = useState(false)

  const [modal, setModal] = useState(false)
  const [animacion, setAnimacion] = useState(false)

  const [gastoEditar, setGastoEditar] = useState({})

  const [filtro, setFiltro] = useState('')
  const [gastosFiltrados, setGastosFiltrados] = useState([])

  useEffect(() => {
    localStorage.setItem('presupuesto', presupuesto ?? 0)
  }, [presupuesto])

  useEffect(() => {
    localStorage.setItem('gastos', JSON.stringify(gastos) ?? [])
  }, [gastos])

  useEffect(() => {
    if (Object.keys(gastoEditar).length > 0) {
      setModal(true)
  
      setTimeout(() => {
        setAnimacion(true)
      }, 100)
    }
  }, [gastoEditar])

  useEffect(() => {
    if (presupuesto > 0) {
      setValido(true)
    }
  }, [])

  useEffect(() => {
    const gastosFiltrados = gastos.filter(gasto => gasto.categoria === filtro)

    setGastosFiltrados(gastosFiltrados)
  }, [filtro])

  const handleNuevoGasto = () => {
    setModal(true)
    setGastoEditar({})

    setTimeout(() => {
      setAnimacion(true)
    }, 100)
  }

  const guardarGasto = gasto => {
    if(gasto.id){
      const gastoActualizado = gastos.map(gastoState => (
        gasto.id === gastoState.id ? gasto : gastoState
      ))

      setGastos(gastoActualizado)
      setGastoEditar({})
    }else{
      gasto.id = generarId()
      gasto.fecha = Date.now()
      setGastos([...gastos, gasto])
    }    
  }

  const eliminarGasto = gasto => {
    const gastoActualizado = gastos.filter(gastoState => {
      if (gasto.id !== gastoState.id) {
        return gastoState
      }
  })

  setGastos(gastoActualizado)
  }

  return (
    <div className={modal ? 'fijar' : ''}>
      <Header 
        gastos={gastos}
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        setGastos={setGastos}
        valido={valido}
        setValido={setValido}
      />
      {valido && (
        <>
          <main>
            <Filtro 
              filtro={filtro}
              setFiltro={setFiltro}  
            />
            <ListadoGastos 
              gastos = {filtro ? gastosFiltrados : gastos}
              setGastoEditar = {setGastoEditar}
              eliminarGasto={eliminarGasto}
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
          gastoEditar={gastoEditar}
          setGastoEditar={setGastoEditar}
        />
      }
    </div>
  )
}

export default App
