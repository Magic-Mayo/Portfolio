import React from 'react';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import projectData from '../data/projects.json'

export default function Portfolio(){
    return (
        <>
            <About />
            <section className='project-wrapper'>
                <h1 className='project-header'>Projects</h1>
                <span className='project-container'>
                    {projectData[0].map(project=>{
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
                </span>
                <span className='project-container'>
                    {projectData[1].map(project=>{
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
                </span>
                <span className='project-container'>
                    {projectData[2].map(project=>{
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
                </span>
            </section>
            <Contact />
        </>
    )
}