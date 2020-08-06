import React, { useEffect, useState } from 'react';

export default () => {

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
    },[])

    return (
        <>
            <header className='app-header'>
                <span
                className='app-myName'>
                    Mike Mayo
                </span>
                
                <div className={`app-descriptor ${shake ? 'shake' : ''} ${shook ? 'shook' : ''}`}>
                    <span
                    className={`app-descriptor-thinker app-descriptor ${!thinkerView ? 'outview' : ''}`}>
                        Thinker
                    </span>

                    <span
                    className={`app-descriptor-creator app-descriptor ${!creatorView ? 'outview' : ''}`}>
                        Creator
                    </span>


                    <span
                    className={`app-descriptor-developer app-descriptor ${!developerView ? 'outview' : ''}`}>
                        Developer
                    </span>
                </div>
            </header>
        </>
    )
}