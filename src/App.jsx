import Navbar from "./componants/Navbar"
import About from "./pages/About"
import Category from "./pages/Category"
import Home from "./pages/Home"
import Products from "./pages/Products"

function App() {

  return (
  <div className=" h-full w-full  p-5">
    <Navbar/>
    <Home/>
    <Category/>
    <Products/>
    <About/>
  </div>
  )
}

export default App
