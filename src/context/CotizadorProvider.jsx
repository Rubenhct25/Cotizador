import { createContext, useState } from "react"
import {obtenerDiferenciaYear, calcularMarca, calcularPlan, formatearDinero} from "../helpers"

const CotizadorContext = createContext()

function CotizadorProvider({children}) {
    const [datos, setDatos] = useState({
        marca:'',
        year:'',
        plan:''
    })
    const [error, setError] = useState('')
    const [resultado, setResultado] = useState(0)
    const [cargando, setCargando] = useState(false)



    const handleChangeDatos = e => {
        setDatos({
            ...datos,
            [e.target.name] : e.target.value
        })
    }

    const cotizarSeguro = () => {
        //base
        let resultado = 2000
        //obtener diferencia de year
        const diferencia = obtenerDiferenciaYear(datos.year)
        //restar el 3% por cada year
        resultado -= ((diferencia * 3) * resultado) / 100
        
        //europeo-30%  americano-15%  asiatico-5%
        resultado *= calcularMarca(datos.marca)
        
       //completo-50%  basico-20%
       resultado *= calcularPlan(datos.plan)
       
       //formatear dinero
       resultado = formatearDinero(resultado)

       setCargando(true)

       setTimeout(() => {
        setResultado(resultado)
        setCargando(false)
       }, 2000);
    }

  return (
    <CotizadorContext.Provider
        value={{
            datos,
            handleChangeDatos,
            error,
            setError,
            cotizarSeguro,
            resultado,
            cargando
        }}
    >
      {children}
    </CotizadorContext.Provider>
  )
}

export {CotizadorProvider}
export default CotizadorContext
