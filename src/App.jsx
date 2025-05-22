// import Component, {ComponentLogin} from "./components/Component/Component"
// import Notification from "./components/Notification/Notification"
import Dashboard from "./components/Dashboard/Dashboard"
import ComponentOther from "./components/ComponentOther/ComponentOther"
import ProductItem, {ProductItemDirect} from "./components/ProductItem/ProductItem"

function App() {

  let product = {
    name:"Cambur",
    price:2,
    isOnSale:true,
    stock:0
  }

  return (
    <>
      {/* <Notification hasMessages={true} />
      <br/>
      <Component userName="Randy" />
      <ComponentLogin isLoggedIn={true} /> */}

      <Dashboard isAdmin={!true}/>
      <ComponentOther isAdmin={true} />

      <ProductItem product={product}/>
      <ProductItemDirect name={"Mango"} price={350} isOnSale={true} stock={50}/>
      <ProductItemDirect {...product} />
    </>
  )
}

export default App