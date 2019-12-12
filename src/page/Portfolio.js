import React from 'react';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

export default function Portfolio(){
    return (
        <div className='app'>
            <header className='app-header'>
                <span className='app-myName'>Mike Mayo</span>
                <span className='app-descriptor'>Thinker | Creator | Developer</span>
            </header>
            <About />
            <Projects />
            <Contact />
        </div>
    )
}