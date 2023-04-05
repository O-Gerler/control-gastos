import React, { useState } from 'react'
import Mensaje from './Mensaje'
import cerrarBtn from '../img/cerrar.svg'


const Modal = ({setModal, animacion, setAnimacion, guardarGasto}) => {

  const [nombre, setNombre] = useState('')
  const [cantidad, setCantidad] = useState('')
  const [categoria, setCategoria] = useState('')
  const [mensaja, setMensaje] = useState('')
  
  const ocultarModal = () => {
    setAnimacion(false)

    setTimeout(() => {
      setModal(false)
    }, 400)
  }

  const handleEnviar = e => {
    e.preventDefault()

    if ([nombre, cantidad, cantidad].includes('')) {
      setMensaje('Todos los campos son obligatorios')
      return
    }

    if (cantidad <= 0) {
      setMensaje('No puede costar cero o menos')
      return
    }

    guardarGasto({nombre, cantidad, categoria})
    setMensaje('')
    ocultarModal()
  }

  return (
    <div className='modal'>
        <div className="cerrar-modal">
            <img 
              src={cerrarBtn} 
              alt="Boton cerrar"
              onClick={ocultarModal} 
            />
        </div>
        <form 
          action="" 
          className={`formulario ${animacion ? 'animar' : 'cerrar'}`}
          onSubmit={handleEnviar}  
        >
          <legend>Nuevo Gasto</legend>
          {mensaja !== '' && <Mensaje tipo={'error'}>{mensaja}</Mensaje>}
          <div className="campo">
            <label htmlFor="nombre">Nuevo Gasto</label>
            <input 
              id='nombre'
              type="text"
              placeholder='Agrega el Nombre del Gasto'
              value={nombre}
              onChange={e => setNombre(e.target.value)}
            />
          </div>
          <div className="campo">
            <label htmlFor="cantidad">Cantidad</label>
            <input 
              id='cantidad'
              type="number"
              placeholder='Ej: 100'
              value={cantidad}
              onChange={e => setCantidad(Number(e.target.value))}
            />
          </div>
          <div className="campo">
            <label htmlFor="categoria">Categoria</label>
            <select 
              name="" id="categoria"
              value={categoria}
              onChange={e => setCategoria(e.target.value)}
            >
              <option value="">-- Seleccione --</option>
              <option value="ahorro">Ahorro</option>
              <option value="comida">Comida</option>
              <option value="casa">Casa</option>
              <option value="gastos">Gastos Varios</option>
              <option value="ocio">Ocio</option>
              <option value="salud">Salud</option>
              <option value="suscripciones">Suscripciones</option>
            </select>
          </div>
          <input type="submit" value="Agregar gasto" />
        </form>
    </div>
  )
}

export default Modal