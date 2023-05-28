import React from 'react'
import NuevoPresupuesto from './NuevoPresupuesto'
import ControlPresupuesto from './ControlPresupuesto'

const Header = ({gastos,presupuesto, setPresupuesto, valido, setValido, setGastos}) => {
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
              gastos={gastos}
              presupuesto={presupuesto}
              setPresupuesto={setPresupuesto}
              setGastos={setGastos}
              setValido={setValido}
            />
        )}
        
    </header>
  )
}

export default Header