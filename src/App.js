import React, {useEffect} from 'react';
import Portfolio from './page/Portfolio';
import { useInView } from 'react-intersection-observer';

let timeout = setTimeout(()=>'inview',1000);
export default function App() {

    const [ref, inView] = useInView({
        threshold: .99
    })

    useEffect(()=>{
        setTimeout(()=>{
            return timeout === 'inview' ? 'outview' : 'inview'
        }, 1010)
    },[inView])

    return (
        <div className='app'>
            <header className='app-header' ref={ref}>
                
                <span
                className={`app-myName ${inView ? 'inview' : 'outview'}`}>
                    Mike Mayo
                </span>
                
                <span
                className={`app-descriptor ${inView ? 'inview' : 'outview'}`}
                style={{visibility: timeout === 'inview' ? 'visible' : 'hidden'}}>
                    Thinker | Creator | Developer
                </span>
            </header>
            <Portfolio />
        </div>
    );
}