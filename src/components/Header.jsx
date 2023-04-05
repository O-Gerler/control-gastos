import React from 'react'
import NuevoPresupuesto from './NuevoPresupuesto'
import ControlPresupuesto from './ControlPresupuesto'

const Header = ({presupuesto, setPresupuesto, valido, setValido}) => {
  return (
    <header>
        <h1>Planificador de Gastos</h1>
        {!valido 
        ? (
          <NuevoPresupuesto
            presupuesto={presupuesto}
            setPresupuesto={setPresupuesto}
            valido={valido}
            setValido={setValido}
          />
        ) : (
            <ControlPresupuesto 
              presupuesto={presupuesto}
            />
        )}
        
    </header>
  )
}

export default Header