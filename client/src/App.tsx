import React,{useState} from "react";
import "./App.css";

import Nav from "./components/Nav";
import { Route,Routes } from "react-router-dom";
import Contact from "./pages/Contact";
import HomePage from "./pages/HomePage";
import Menu from "./pages/Menu";
import Carts from "./pages/Carts";
import LoginPage from "./pages/LoginPage";
import Footer from './components/Footer'

function App() {
   const [open, setOpen] = useState(false);

  
  return <div className="App">
   <Nav setOpen={setOpen}/>

   <Routes>
    <Route path="/" element={<HomePage/>} />
    <Route path="/contact" element={<Contact/>} />
    <Route path="/menu" element={<Menu/>} />
    <Route path="cart" element={<Carts />} />
    <Route path="/login"  element={<LoginPage open={open} setOpen={setOpen}/>}/>

   </Routes>
   <Footer />
  </div>;
}

export default App;
