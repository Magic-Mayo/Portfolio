import React, { useLayoutEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

export default function Header(props){

    const [titleRef, titleView] = useInView({threshold: .75});
    const [thinkerView, setThinkerView] = useState(false);
    const [creatorView, setCreatorView] = useState(false);
    const [developerView, setDeveloperView] = useState(false);
    const [separatorView, setSeparatorView] = useState(false);

    useLayoutEffect(()=>{
        setTimeout(() => {
            return setThinkerView(true);
        }, 1000);
        setTimeout(() => {
            return setCreatorView(true);
        }, 1450);
        setTimeout(() => {
            return setDeveloperView(true);
        }, 1900);
        setTimeout(() => {
            return setSeparatorView(true);
        }, 2350);

        return ()=>{
            setThinkerView(false);
            setCreatorView(false);
            setDeveloperView(false);
            setSeparatorView(false);
        }
    },[titleView])

    return (
        <header className='app-header' ref={titleRef}>
                
                <span
                className={`app-myName ${!titleView ? 'outview' : 'inview'}`}>
                    Mike Mayo
                </span>
                
                <div className='app-descriptor'>
                    <span
                    className={`app-descriptor-thinker app-descriptor ${!thinkerView ? 'outview' : 'inview'} ${titleView ? '' : 'hidden'}`}>
                        Thinker&nbsp;
                    </span>

                    <span
                    className={`app-descriptor-separator app-descriptor ${separatorView ? 'inview' : 'outview'} ${titleView ? '' : 'hidden'}`}>
                        |
                    </span>

                    <span
                    className={`app-descriptor-creator app-descriptor ${creatorView ? 'inview' : 'outview'} ${titleView ? '' : 'hidden'}`}>
                        &nbsp;Creator&nbsp;
                    </span>

                    <span
                    className={`app-descriptor-separator app-descriptor ${separatorView ? 'inview' : 'outview'} ${titleView ? '' : 'hidden'}`}>
                        |
                    </span>

                    <span
                    className={`app-descriptor-developer app-descriptor ${developerView ? 'inview' : 'outview'} ${titleView ? '' : 'hidden'}`}>
                        &nbsp;Developer
                    </span>
                </div>
            </header>
    )
}