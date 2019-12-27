import React from 'react';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import projectData from '../data/projects.json'

export default function Portfolio(){
    return (
        <>
            <About />
            <div className='project-container'>
                <h1>Projects</h1>
                {projectData.map(project=>{
                    return <Projects
                    key={project.name}
                    name={project.name}
                    address={project.address}
                    img={project.img}
                    gif={project.gif}
                    github={project.github}
                    desc={project.description}
                    />
                })}
            </div>
            <Contact />
        </>
    )
}