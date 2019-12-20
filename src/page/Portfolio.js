import React from 'react';
// import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import projectData from '../data/projects.json'

export default function Portfolio(){
    return (
        <div className='app'>
            <header className='app-header'>
                <span className='app-myName'>Mike Mayo</span>
                <span className='app-descriptor'>Thinker | Creator | Developer</span>
            </header>
            {/* <About /> */}
            {projectData.map(project=>{
                console.log(project)
                return <Projects
                key={project.name}
                name={project.name}
                address={project.address}
                img={project.img}
                github={project.github}
                desc={project.description}
                />
            })}
            <Projects />
            <Contact />
        </div>
    )
}