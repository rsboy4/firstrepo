import { useEffect } from "react"
import StringGenerator from "./stringer"

const Sillycomponent = () => {
  const vela = StringGenerator()

  useEffect(() => {
    localStorage.setItem("route_for_getting_playlist", "/" + vela)
  }, [vela])
  return (
    <div></div>
  )
}

export default Sillycomponent
