import { Fragment } from "react"
import useCotizador from "../hooks/useCotizador"
import { MARCAS, YEARS, PLANES } from "../constans/Datos"
import Error from "./Error"

function Formulario() {

    const {datos, handleChangeDatos, error, setError, cotizarSeguro} = useCotizador()

    const handleSubmit = e => {
        e.preventDefault()

        //validacion
        if(Object.values(datos).includes('')){
            setError('Todos los campos son obligatorios')
            return;
        }
        setError('')
        cotizarSeguro()

    }

  return (
    <>
    
        {error && <Error/>}
        <form onSubmit={handleSubmit}>
            <div className="my-5">
                <label className="block font-bold mb-3 text-gray-400 uppercase">Marca</label>
                <select
                    name="marca"
                    className="w-full bg-white border border-gray-200"
                    onChange={e => handleChangeDatos(e)}
                    value={datos.marca}
                    
                >
                    <option value=''>--Seleccione--</option>
                    {MARCAS.map( marca => (
                        <option key={marca.id} value={marca.id}>
                            {marca.nombre}
                        </option>
                    ))}
                </select>
            </div>
            <div className="my-5">
                <label className="block font-bold mb-3 text-gray-400 uppercase">Año</label>
                <select
                    name="year"
                    className="w-full bg-white border border-gray-200"
                    value={datos.year}
                    onChange={e => handleChangeDatos(e)}
                >
                    <option value=''>--Seleccione--</option>
                    {YEARS.map( year => (
                        <option value={year}>
                            {year}
                        </option>
                    ))}
                </select>
            </div>
            <div className="my-5">
                <label className="block font-bold mb-3 text-gray-400 uppercase">Elige un plan</label>
                <div className="flex gap-3">
                    {PLANES.map( plan => (
                        <Fragment key={plan.id}>
                            <label>{plan.nombre}</label>
                            <input
                                type='radio'
                                name='plan'
                                value={plan.id}
                                onChange={e => handleChangeDatos(e)}
                            />
                        </Fragment>
                    ))}
                </div>
                <input
                    type='submit'
                    value='Cotizar'
                    className="text-white text-2xl bg-indigo-600 cursor-pointer mt-7 text-center p-3 w-full uppercase hover:bg-indigo-700 transition-colors font-bold"
                />
            </div>
       
        </form>
    </>
  )
}

export default Formulario
