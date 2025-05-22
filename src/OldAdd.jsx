import Saludo from "./components/Saludo/Saludo";
import SaludoPer from "./components/SaludoPer/SaludoPer"
import SaludoDes from "./components/SaludoDes/SaludoDes";
import Tarjeta from "./components/Tarjeta/Tarjeta";
// Importa la funcion Mastercard de la funcion Tarjeta.
import { Mastercard } from "./components/Tarjeta/Tarjeta";
import ListaDeElems from "./components/ListaDeElems/ListaDeElems";
import BotonAlerta from "./components/BotonAlerta/BotonAlerta";

function App() {
  let alias = "barximan";
  let user = {
    nombre: "echoziman",
    correo: "e@e.e"
  }

  return (
    <>
      {/* Funcion sencilla sin argumentos. */}
      <Saludo />

      {/* Aqui el valor de alias se esta declarando en
      un let mas arriba */}
      <SaludoPer nombre={alias}/>

      {/* Aqui se estan insertando los atributos
      en el propio bloque */}
      <SaludoDes nombre={"foo"} correo={"f@f.f"}/>

      {/* Con ...user, se agregan todos los valores
      de esa lista (ver declaracion arriba) */}
      <SaludoDes {...user}/>

      {/* Cuando no tiene argumentos, se coloca el
      valor default establecido en la funcion */}
      <SaludoDes /> 

      <Tarjeta titulo={"⚡ Tarjeta"}>
        <Mastercard />
      </Tarjeta>

      <ListaDeElems elementos={["f", "b", "v", "e", "d"]}/>

      <BotonAlerta msj={"Buenas noches."} />
    </>
  )
}

export default App
