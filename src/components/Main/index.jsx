import React from 'react';

/* Componet */
import About from './About';
import Service from './Service';
import Project from './Project';
import Contact from './Contact';
import Random from './Random';

const Main = () => (
    <main>
        <About />        
        <Random/>
        <Service />
        
        
        <Project />

        <Contact />
    </main>
);

export default Main;