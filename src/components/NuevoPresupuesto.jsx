import React, { useState } from 'react'
import Mensaje from './Mensaje'

const NuevoPresupuesto = ({presupuesto, setPresupuesto, valido, setValido}) => {

  const [mensaje, setMensaje] = useState('')

  const handlePresupuesto = e => {
    e.preventDefault()

    setValido(false)
    if (presupuesto === 0) {
      setMensaje('0 no es valido')
      return
    }

    if (isNaN(presupuesto)) {
      setMensaje('No es un numero')
      return
    }

    if (presupuesto < 0) {
      setMensaje('Presupuesto no valido')
      return
    }

    setValido(true)
    setMensaje('')
  }

  return (
    <div className='contenedor-presupuesto contenedor sombra'>
      <form action="" className='formulario' onSubmit={handlePresupuesto}>
        <div className="campo">
          <label htmlFor="">Definir Presupuesto</label>
          <input 
            type="number" 
            className='nuevo-presupuesto' 
            placeholder='Agrega tu Presupuesto'
            value={presupuesto}
            onChange={e => setPresupuesto(e.target.value)}
            />
        </div>
        <input 
          type="submit" 
          value="Agregar" 
        />
        {mensaje && <Mensaje tipo={'error'}>{mensaje}</Mensaje>}
      </form>
    </div>
  )
}

export default NuevoPresupuesto