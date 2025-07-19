import Navbar from "./componants/Navbar"
import Category from "./pages/Category"
import Home from "./pages/Home"

function App() {

  return (
  <div className="bg-gray-200 h-screen w-full  p-5">
    <Navbar/>
    <Home/>
    <Category/>
  </div>
  )
}

export default App
