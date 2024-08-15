import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import React from 'react'

import Home from '../Pages/Home';
import Portfolio from '../Pages/Portfolio';
import About from '../Pages/About';
import Artprints from '../Pages/Artprints';
import Exhibition from '../Pages/Exhibition';
import Contact from '../Pages/Contact';
import Footer from './Footer';
import NavBar from './Navbar';

export default function HogRoutes() {
  return (
    <Router>
        <div className="wrapper">
            <NavBar />
                <div className="content">
                    <Routes>
                        <Route path = "/" element={<Home/>} exact/>
                        <Route path = "/about-us" element={<About/>} exact/>
                        <Route path = "/portfolio" element={<Portfolio/>} exact/>
                        <Route path = "/art-prints" element={<Artprints/>} exact/>
                        <Route path = "/exhibitions" element={<Exhibition/>} exact/>
                        <Route path = "/contact" element={<Contact/>} exact/>
                    </Routes>
                </div>
            <Footer />
        </div>
    </Router>
  )
}