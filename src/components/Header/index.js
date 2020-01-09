import React, { useEffect, useState } from 'react';
import Logo from '../Logos'
import { useOnScreen } from '../../hooks/index';

export default function Header(props){

    const [setRef, onScreen] = useOnScreen({rootMargin: '-110px'});
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
    },[onScreen])

    return (
        <>
            <nav className='app-nav'> 
                <Logo
                site='linkedin'
                inView={onScreen}
                styles={{margin: '.75rem 1.5rem', position: 'absolute'}}
                nav={true} />

                <span className={`app-nav-title${onScreen ? '' : ''} app-nav-slide-${onScreen ? 'out' : 'in'}`}>
                    Mike Mayo
                </span>

                <Logo
                site='github'
                inView={onScreen}
                styles={{margin: '.75rem 1.5rem', position: 'absolute'}} 
                nav={true}/>
            </nav>

            <header className='app-header' ref={setRef}>
                <span
                className='app-myName' style={onScreen ? {} : {display: 'none'}}>
                    Mike Mayo
                </span>
                
                <div className={`app-descriptor ${shake ? 'shake' : ''} ${shook ? 'shook' : ''}`}>
                    <span
                    className={`app-descriptor-thinker app-descriptor ${!thinkerView ? 'outview' : onScreen ? '' : 'hidden'}`}>
                        Thinker
                    </span>

                    <span
                    className={`app-descriptor-creator app-descriptor ${!creatorView ? 'outview' : ''} ${onScreen ? '' : 'hidden'}`}>
                        Creator
                    </span>


                    <span
                    className={`app-descriptor-developer app-descriptor ${!developerView ? 'outview' : ''} ${onScreen ? '' : 'hidden'}`}>
                        Developer
                    </span>
                </div>
            </header>
        </>
    )
}