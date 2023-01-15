 import React from 'react'
 import {BrowserRouter as Router, Routes, Route, Outlet} from "react-router-dom"
 import "./App.css"
 import "bootstrap/dist/css/bootstrap.min.css"
 import Navbar from "./components/Navbar"
 import Home from "./components/Home"

 import About from "./components/About"
 import Contact from "./components/Contact"
 import  Login from "./components/Login"
 import Signup from "./components/Signup"
 const App = () => {
   return (
     <>
       <Router>
       <Routes>
       <Route element={
         <>
  
         <Navbar/>
         <Outlet/>
         </>
       }>
       <Route path="/" element= {<Home/>}/>

       <Route path="/signup" element={<Signup/>} />
       <Route path="/login" element={<Login/>} />
       <Route path="/about" element={<About/>} />
       <Route path="/contact" element={<Contact/>} />
       </Route>
       </Routes>
       </Router>
     </>
   );
 }
 export default App;
