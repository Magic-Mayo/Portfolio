import React, {useState, useEffect} from 'react';
import Nav from '../components/Nav';
import Header from '../components/Header'
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import projectData from '../data/projects.json'
import { Route, Link } from 'react-router-dom';
import Arrow from '../components/Logos/arrow';
import DownArrow from '../components/Logos/downArrow';
import useWindowDimensions from '../hooks/useWindowDimensions';

export default function Portfolio(){
    const [showProject, setShowProject] = useState(0);
    const {innerWidth, innerHeight} = useWindowDimensions();

    return (
        <>
            <Nav
            mobile={innerWidth < 675 || innerHeight < 700}
            />

            <Route exact path='/'>
                <Header />
                {innerWidth > 675 &&
                    <Link to='/projects' className='link-arrow'>
                        <DownArrow>
                            <span>Projects</span>
                        </DownArrow>
                    </Link>
                }
            </Route>

            <Route path='/projects'>
                <section
                className='project-wrapper'
                >
                    <span
                    onClick={() => setShowProject(prevProj => prevProj > 0 ? prevProj - 1 : projectData.length - 1)}
                    className='arrow prev-arrow'
                    >
                        <Arrow />
                    </span>

                    {projectData.map((project, ind) => {
                        return <Projects
                        key={ind}
                        showProject={showProject === ind}
                        {...project}
                        />
                    })}

                    <span
                    onClick={() => setShowProject(prevProj => prevProj === projectData.length - 1 ? 0 : prevProj + 1)}
                    className='arrow next-arrow'
                    >
                        <Arrow />
                    </span>

                    {innerWidth > 675 &&
                        <Link to='/about' className='link-arrow'>
                            <DownArrow>
                                <span>About</span>
                            </DownArrow>
                        </Link>
                    }
                </section>
            </Route>

            <Route path='/about'>
                {innerWidth > 675 &&
                    <Link to='/projects' className='up-arrow link-arrow'>
                        <DownArrow
                        top={true}
                        >
                            <span>Projects</span>
                        </DownArrow>
                    </Link>
                }

                <About />

                {innerWidth > 675 &&
                    <Link to='/contact' className='link-arrow'>
                        <DownArrow>
                            <span>Contact</span>
                        </DownArrow>
                    </Link>
                }
            </Route>

            <Route path='/contact'>
                {innerWidth > 675 &&
                    <Link to='/about' className='up-arrow link-arrow'>
                        <DownArrow
                        top={true}
                        >
                            <span>About</span>
                        </DownArrow>
                    </Link>
                }
                
                <Contact />
            </Route>
            <div style={{display: 'none'}}>
                Icons made by
                <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">
                    Pixel perfect 
                </a>
                from 
                <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
            </div>
        </>
    )
}