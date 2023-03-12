import Formulario from "./Formulario"
import useCotizador from "../hooks/useCotizador"
import Resultado from "./Resultado"
import Spinner from "./Spinner"


function AppSeguro() {

  const {cargando} = useCotizador()
 
  return (
    <>
      <header className="my-10">
        <h1 className="text-white font-bold text-center text-5xl">Cotizador de seguros de auto</h1>
      </header>
      <main className="bg-white md:w-2/3 lg:w-2/4 mx-auto p-10 shadow rounded">
        <Formulario/>

        {cargando? <Spinner/> : <Resultado/>}

      </main>
    </>
  )
}

export default AppSeguro
