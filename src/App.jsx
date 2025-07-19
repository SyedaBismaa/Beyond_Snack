import Navbar from "./componants/Navbar"
import Category from "./pages/Category"
import Home from "./pages/Home"
import Products from "./pages/Products"

function App() {

  return (
  <div className=" bg-black text-white h-full w-full  p-5">
    <Navbar/>
    <Home/>
    <Category/>
    <Products/>
  </div>
  )
}

export default App
