import React from 'react';
import Header from '../components/Header'
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import projectData from '../data/projects.json'
import useOnScreen from '../hooks';

export default function Portfolio(){

    const [aboutRef, aboutView] = useOnScreen({rootMargin: '-600px 0px -300px 0px'});
    const [contactRef, contactView] = useOnScreen({threshold: .5});
    const [projectRef, projectView] = useOnScreen({rootMargin: '-100px 0px 200px 0px'});

    return (
        <>
            <Header />
            <About
            aboutRef={aboutRef}
            aboutView={aboutView}
            />
            <span className={`project${projectView ? '-to-nav' : '-off'}`}>Projects</span>
            <h1 className={`project-header${!projectView ? '' : '-to-nav'}`}>Projects</h1>
            <section className='project-wrapper' ref={projectRef}>
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
            <Contact
            contactRef={contactRef}
            contactView={contactView} />
        </>
    )
}