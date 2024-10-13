
import {Routes, Route} from "react-router-dom"
import HomePage from "./pages/HomePage"
import About from "./pages/About"
import Services from "./pages/Services"
import Products from "./pages/Products"
import Contact from "./pages/Contact"
import NotFoundPage from "./pages/NotFoundPage"
import MyNavbar from "./components/MyNavbar"
import Footer from "./components/Footer"
import Header from "./components/Header"
import WhatsappButton from "./components/WhatsappButton"

function App() {

  return (
    <div>
      <Header/>
      
      <MyNavbar/>

      <Routes>

        <Route path="/" element={<HomePage/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="*" element={<NotFoundPage/>}/>

      </Routes>

      <WhatsappButton/> 

      <Footer/>

    </div>
  )
}

export default App
