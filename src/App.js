import React, { useState, useEffect } from 'react';
import {
    Route,
    Routes,
} from "react-router-dom";
import './App.css';

/* Pages */
import Home from "./pages/Home/HomePage";
import About from "./pages/About/AboutPage";
import Services from "./pages/Service/ServicesPage";

import Project from './components/Main/Project';
import RouterScrollTop from "./components/ParticlesBg/RouterScrollTop"
import Random from './components/Main/Random';
import Admin from './components/Main/admin';




function App() {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 4000)
    }, [])
    return (
        <>
            <RouterScrollTop />
            {
                loading ?

                    <div className='loading-pag'>
                        <div className="loader">
                            <span>Welcome to Hacking World</span>
                            <span>Welcome to Hacking World</span>
                        </div>
                    </div>

                    :

                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                        <Route exact path="/admin" element={<Admin/>}></Route>
                        <Route exact path="/about" element={<About />}></Route>
                        <Route exact path="/service" element={<Services />}></Route>
                        <Route exact path="/project" element={<Project />}></Route>
                        <Route exact path="/random" element={<Random />}></Route>
                    </Routes>

            }

        </>
    )
}

export default App
