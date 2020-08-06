import React, {useState} from 'react';
import Logo from '../Logos';

export default ({github, name, address, img, gif, description, showProject}) => {

    const [hoverText, setHoverText] = useState(false);
    const [opacity, setOpacity] = useState(1);
    const [gifSrc, setGifSrc] = useState(false);

    return (
        <div
        className={`project project-${github} ${showProject ? 'current' : ''}`}
        onMouseEnter={() => setGifSrc(true)}
        onMouseLeave={() => setGifSrc(false)}
        >
            
            <h1 className={`project-title project-title-${name}`}>
                {name}
            </h1>

            <Logo
            address={github}
            site='github'
            styles={{margin: '2rem 0 0 3rem'}}
            />
            
            <p>{description}</p>

            <span
            className='img-container'
            onClick={() => window.open(`${address}`, '_blank','')}
            onMouseEnter={() => {
                setHoverText(true);
                setOpacity(.3);
            }}
            onMouseLeave={() => {
                setHoverText(false);
                setOpacity(1);
            }}
            >

                <img
                src={require(`../../assets/${gifSrc ? img : gif}`)}
                alt={name}
                style={{opacity: opacity}}
                className={`img img-${github}`}
                />

                {hoverText && 
                    <span
                    className='img-span'>Visit site
                        <img src={require('../../assets/newtab.png')} alt='Open site in new tab'/>
                    </span>}
            </span>
        </div>
    )
}
