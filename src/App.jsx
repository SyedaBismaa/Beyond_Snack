import Footer from "./componants/Footer"
import Navbar from "./componants/Navbar"
import About from "./pages/About"
import Category from "./pages/Category"
import Home from "./pages/Home"
import Products from "./pages/Products"
import ReachUs from "./pages/ReachUs"
import Process from "./pages/process"


function App() {

  return (
    <div className=" h-full w-full  p-5">
      <Navbar />
      <Home />
      <Category />
      <Products />
      <Process />
      <About />
      <ReachUs />
      <Footer />
    </div>
  )
}

export default App
