import { Route, Routes } from "react-router-dom"
import ContactUs from "./pages/ContactUs"
import AboutUs from "./pages/AboutUs"
import Home from "./pages/Home"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </>
  )
}

export default App
