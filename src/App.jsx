import Navbar from "./components/Navbar"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Front from "./components/front/Front";
import Abouts from "./components/about/Abouts";
import Products from "./components/products/Products";
import ProductDetails from "./components/products/details/ProductDetails";
import { useState } from "react";
import Service from "./components/service/Service";



function App() {
  const [show, setShow] = useState(false);
  return (
    <>
   <Router>
   <Navbar show={show} setShow={setShow} />
    <Routes>
      <Route path="/" element={<Front setShow={setShow} />}/>
      <Route path="/contact" element={<Contact setShow={setShow} />}/>
      <Route path="/about" element={<Abouts/>}/>
      <Route path="/products" element={<Products setShow={setShow} />}/>
      <Route path="/productdetails/:id" element={<ProductDetails setShow={setShow} />}/>
      <Route path="/services" element={<Service setShow={setShow} />}/>
    </Routes>
    <Footer/>
   </Router>
    </>
  )
}

export default App