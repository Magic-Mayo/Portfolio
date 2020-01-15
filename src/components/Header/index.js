import React, { useEffect, useState } from 'react';
import Logo from '../Logos'

export default function Header(props){

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
    },[props.headerOnScreen])

    return (
        <>
            <nav className='app-nav'> 
                <Logo
                site='linkedin'
                inView={props.headerOnScreen}
                styles={{margin: '.75rem 1.5rem', position: 'fixed'}}
                nav={true} />

                <span
                className={`app-nav-title app-nav-slide-${props.headerOnScreen ? 'out' : 'in'} app-nav-title${props.aboutOnScreen ? '-down' : props.projectOnScreen ? '-up' : props.contactOnScreen ? '-down' : ''}`}
                >
                    Mike Mayo
                </span>

                <Logo
                site='github'
                inView={props.headerOnScreen}
                styles={{margin: '.75rem 1.5rem', position: 'fixed'}} 
                nav={true}/>
            </nav>

            <header className={`app-header ${props.headerOnScreen ? 'opaque' : 'transparent'}`} ref={props.headerRef}>
                <span
                className='app-myName'>
                    Mike Mayo
                </span>
                
                <div className={`app-descriptor ${shake ? 'shake' : ''} ${shook ? 'shook' : ''}`}>
                    <span
                    className={`app-descriptor-thinker app-descriptor ${!thinkerView ? 'outview' : props.headerOnScreen ? '' : 'hidden'}`}>
                        Thinker
                    </span>

                    <span
                    className={`app-descriptor-creator app-descriptor ${!creatorView ? 'outview' : props.headerOnScreen ? '' : 'hidden'}`}>
                        Creator
                    </span>


                    <span
                    className={`app-descriptor-developer app-descriptor ${!developerView ? 'outview' : props.headerOnScreen ? '' : 'hidden'}`}>
                        Developer
                    </span>
                </div>
            </header>
        </>
    )
}