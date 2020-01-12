import { useState, useEffect } from 'react';

export function useOnScreen(options, initialize = false){
    const [ref, setRef] = useState(null);
    const [onScreen, setOnScreen] = useState(initialize);

    useEffect(()=>{
        const observer = new IntersectionObserver(([entry])=>{
            setOnScreen(entry.isIntersecting)
        }, options)

        if(ref){
            observer.observe(ref)
        }

        return ()=>{
            if(ref){
                observer.unobserve(ref)
            }
        }
    },[ref, options])

    return [setRef, onScreen];
}

export default useOnScreen;