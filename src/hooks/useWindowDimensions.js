import { useState, useEffect } from 'react';

export default () => {
    const [innerWidth, setInnerWidth] = useState(window.innerWidth);
    const [innerHeight, setInnerHeight] = useState(window.innerHeight);

    const onResize = () => {
        setInnerWidth(window.innerWidth);
        setInnerHeight(window.innerHeight);
    }

    useEffect(() => {
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize)
    }, []);

    return {innerWidth, innerHeight}
}