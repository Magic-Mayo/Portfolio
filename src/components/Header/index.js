import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

export default function Header(props){

    const [titleRef, titleView] = useInView({rootMargin: '-450px 0px 0px 0px'});
    const [thinkerView, setThinkerView] = useState(false);
    const [creatorView, setCreatorView] = useState(false);
    const [developerView, setDeveloperView] = useState(false);
    const [shake, setShake] = useState(false);

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
            return setShake(false)
        }, 1270)
        setTimeout(()=>{
            return setShake(true)
        }, 1500)
        setTimeout(()=>{
            return setShake(false)
        }, 1570)
    },[titleView])

    return (
        <>
            <nav className='app-nav' style={!titleView ? {} : {display: 'none'}}>
                <span className='app-nav-title'>Mike Mayo</span>
            </nav>
            <header className='app-header' ref={titleRef}>
                <span
                className='app-myName' style={titleView ? {} : {display: 'none'}}>
                    Mike Mayo
                </span>
                
                <div className={`app-descriptor ${shake ? 'shake' : ''}`}>
                    <span
                    className={`app-descriptor-thinker app-descriptor ${!thinkerView ? 'outview' : '' } ${titleView ? '' : 'hidden'}`}>
                        Thinker
                    </span>

                    <span
                    className={`app-descriptor-creator app-descriptor ${creatorView ? '' : 'outview'} ${titleView ? '' : 'hidden'}`}>
                        Creator
                    </span>


                    <span
                    className={`app-descriptor-developer app-descriptor ${developerView ? '' : 'outview'} ${titleView ? '' : 'hidden'}`}>
                        Developer
                    </span>
                </div>
            </header>
        </>
    )
}