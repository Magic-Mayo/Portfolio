import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

export default function Header(props){

    const [titleRef, titleView] = useInView({
        threshold: .99
    });

    let viewTimeout;

    useEffect(()=>{
        setTimeout(() => {
            return viewTimeout = titleView;
        }, 1000);

        return () => viewTimeout;
    }, [titleView])
    return (
        <header className='app-header' ref={titleRef}>
                
                <span
                className={`app-myName ${!titleView ? 'outview' : 'inview'}`}>
                    Mike Mayo
                </span>
                
                <div className='app-descriptor'>
                    <span
                    className={`app-descriptor-thinker app-descriptor ${viewTimeout ? 'inview' : 'outview'}`}>
                        Thinker&nbsp;
                    </span>

                    <span
                    className={`app-descriptor-separator app-descriptor ${!titleView ? 'outview' : 'inview'}`}>
                        |
                    </span>

                    <span
                    className={`app-descriptor-creator app-descriptor ${!titleView ? 'outview' : 'inview'}`}>
                        &nbsp;Creator&nbsp;
                    </span>

                    <span
                    className={`app-descriptor-separator app-descriptor ${!titleView ? 'outview' : 'inview'}`}>
                        |
                    </span>

                    <span
                    className={`app-descriptor-developer app-descriptor ${!titleView ? 'outview' : 'inview'}`}>
                        &nbsp;Developer
                    </span>
                </div>
            </header>
    )
}