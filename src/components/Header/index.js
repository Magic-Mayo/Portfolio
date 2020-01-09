import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import Logo from '../Logos'

export default function Header(props){

    const [titleRef, titleView] = useInView({rootMargin: '-81% 0px 0px 0px'});
    const [thinkerView, setThinkerView] = useState(false);
    const [creatorView, setCreatorView] = useState(false);
    const [developerView, setDeveloperView] = useState(false);
    const [shake, setShake] = useState(false);
    const [shook, setShook] = useState(false);

    useEffect(()=>{
        setTimeout(() => {
            return setCreatorView(true);
        }, 900);
        setTimeout(() => {
            return setThinkerView(true);
        }, 1200);
        setTimeout(() => {
            return setDeveloperView(true);
        }, 1500);
        setTimeout(()=>{
            return setShake(true)
        }, 1200)
        setTimeout(()=>{
            return setShook(true)
        }, 1500)
    },[titleView])

    return (
        <>
            <nav className='app-nav'> 
                <Logo
                site='linkedin'
                inView={titleView}
                styles={{margin: '.75rem 1.5rem', position: 'absolute'}}
                nav={true} />

                <span className={`app-nav-title app-nav-slide-${titleView ? 'out' : 'in'}`}>
                    Mike Mayo
                </span>

                <Logo
                site='github'
                inView={titleView}
                styles={{margin: '.75rem 1.5rem', position: 'absolute'}} 
                nav={true}/>
            </nav>

            <header className='app-header' ref={titleRef}>
                <span
                className='app-myName' style={titleView ? {} : {display: 'none'}}>
                    Mike Mayo
                </span>
                
                <div className={`app-descriptor ${shake ? 'shake' : ''} ${shook ? 'shook' : ''}`}>
                    <span
                    className={`app-descriptor-thinker app-descriptor ${!thinkerView ? 'outview' : titleView ? '' : 'hidden'}`}>
                        Thinker
                    </span>

                    <span
                    className={`app-descriptor-creator app-descriptor ${!creatorView ? 'outview' : ''} ${titleView ? '' : 'hidden'}`}>
                        Creator
                    </span>


                    <span
                    className={`app-descriptor-developer app-descriptor ${!developerView ? 'outview' : ''} ${titleView ? '' : 'hidden'}`}>
                        Developer
                    </span>
                </div>
            </header>
        </>
    )
}