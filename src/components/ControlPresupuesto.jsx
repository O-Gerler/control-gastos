import React from 'react'

const ControlPresupuesto = ({presupuesto}) => {
  
    const formatearCantidad = (cantidad) => {
        let formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
          });
        return formatter.format(cantidad)
    }

  return (
    <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
        <div>
            <p>Grafica</p>
        </div>
        <div className="contenido-presupuesto">
            <p>
                <span>Presupuesto: </span> {formatearCantidad(presupuesto)}
            </p>
            <p>
                <span>Disponible: </span> {0}
            </p>
            <p>
                <span>Gastado: </span> {0}
            </p>
        </div>
    </div>
  )
}

export default ControlPresupuesto