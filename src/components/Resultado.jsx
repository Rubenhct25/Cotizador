import { useCallback, useMemo, useRef } from "react"
import { MARCAS, PLANES } from "../constans/Datos"
import useCotizador from "../hooks/useCotizador"

export default function Resultado() {

    const {resultado, datos} = useCotizador()
    const {marca, plan, year} = datos
    const yearRef = useRef(year)

    if(resultado === 0) return null

    const [nombreMarca] =useMemo(()=> MARCAS.filter(m => m.id === Number(marca)), [resultado]) 

    const [nombrePlan] = useMemo(()=> PLANES.filter(p => p.id === Number(plan)), [resultado])

  return (
    <div className="bg-gray-100 text-center p-5 mt-5 shadow">
      <h2 className="text-gray-600 font-black text-3xl">
        Resumen
      </h2>

      <p className="my-3">
        <span className="font-bold">Marca: </span>
        {nombreMarca.nombre}
      </p>
      <p className="my-3">
        <span className="font-bold">Plan: </span>
        {nombrePlan.nombre}
      </p>
      <p className="my-3">
        <span className="font-bold">Año del auto: </span>
        {yearRef.current}
      </p>
      <p className="my-3 text-2xl">
        <span className="font-bold">Total cotizacion: </span>
        {resultado}
      </p>
    </div>
  )
}
