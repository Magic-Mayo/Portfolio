import React from 'react';
import Header from '../components/Header'
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import projectData from '../data/projects.json'
import useOnScreen from '../hooks';

export default function Portfolio(){

    const [headerRef, headerOnScreen] = useOnScreen({threshold: .3}, true);
    const [projectRef, projectOnScreen] = useOnScreen({threshold: .15});
    const [aboutRef, aboutOnScreen] = useOnScreen({threshold: .4});
    const [contactRef, contactOnScreen] = useOnScreen({threshold: .5});

    return (
        <>
            <Header
            headerOnScreen={headerOnScreen}
            headerRef={headerRef}
            aboutOnScreen={aboutOnScreen}
            projectOnScreen={projectOnScreen}
            contactOnScreen={contactOnScreen}
            />
            <span className={`project-nav project-nav${projectOnScreen && !headerOnScreen ? '-to' : ''}`}>Projects</span>
            <section className={`project-wrapper ${headerOnScreen || aboutOnScreen ? 'transparent' : 'opaque'}`} ref={projectRef}>
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
            <About
            aboutRef={aboutRef}
            aboutOnScreen={aboutOnScreen}
            contactOnScreen={contactOnScreen}
            projectOnScreen={projectOnScreen}
            />

            <Contact
            contactRef={contactRef}
            contactOnScreen={contactOnScreen}
            aboutOnScreen={aboutOnScreen}
            />
        </>
    )
}