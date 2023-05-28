import React, { useState, useEffect } from 'react'
import {CircularProgressbar, buildStyles} from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

const ControlPresupuesto = ({gastos, presupuesto, setPresupuesto, setGastos, setValido}) => {

    const [disponible, setDisponible] = useState(0)
    const [gastado, setGastado] = useState(0)

    useEffect(() => {
        const totalGastado = gastos.reduce((total, gasto) => gasto.cantidad + total, 0)
        
        setGastado(totalGastado)
        setDisponible(presupuesto - totalGastado)
    }, [gastos])
  
    const formatearCantidad = (cantidad) => {
        let formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
          });
        return formatter.format(cantidad)
    }

    const handleClick = () => {
      const resultado = confirm('¿Estas seguro de que quieres borrar todos los gastos?')
      if (resultado) {
        setGastos([])
        setPresupuesto(0)
        setValido(false)
      }
    }

  return (
    <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
        <div>
            <CircularProgressbar 
              minValue={0}
              maxValue={presupuesto}
              value={gastado}
              styles={buildStyles({
                pathTransitionDuration: 4,
                pathColor: disponible > 0 ? '#3b82f6' : 'red',
                textColor: disponible > 0 ? '#3b82f6' : 'red',
              })}
              text={`Gastado: ${(gastado/presupuesto * 100).toFixed(2)}%`}
            />
        </div>
        <div className="contenido-presupuesto">
          <button 
            onClick={() => handleClick()}
            type='button'
            className='reset-app'
          >
            Resetear Presupuesto
          </button>
            <p>
                <span>Presupuesto: </span> {formatearCantidad(presupuesto)}
            </p>
            <p className={`${disponible < 0 ? 'negativo' : ''}`}>
                <span>Disponible: </span> {formatearCantidad(disponible)}
            </p>
            <p>
                <span>Gastado: </span> {formatearCantidad(gastado)}
            </p>
        </div>
    </div>
  )
}

export default ControlPresupuesto