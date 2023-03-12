import useCotizador from "../hooks/useCotizador"

export default function Error() {
    const {error } = useCotizador()
  return (
    <div className="border text-center border-red-400 py-3 text-red-700 bg-red-100 text-2xl">
      <p>{error}</p>
    </div>
  )
}
