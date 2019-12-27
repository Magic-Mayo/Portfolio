import React, {useState} from 'react';
import Logo from '../Logos';

export default function Projects(props){

    const [hoverText, setHoverText] = useState(false);
    const [opacity, setOpacity] = useState(1);
    const [gifSrc, setgifSrc] = useState(false);

    return (
        <div
        className={`project project-${props.github}`}
        onMouseEnter={()=>setgifSrc(true)}
        onMouseLeave={()=>setgifSrc(false)}>
            
            <h1 className={`project-title project-title-${props.name}`}>
                {props.name}
            </h1>

            <Logo
            address={props.github}
            site='github'/>
            
            <p>{props.desc}</p>

            <span
            className='img-container'
            onClick={()=>window.open(`${props.address}`, '_blank','')}
            onMouseEnter={()=>setHoverText(true)}
            onMouseLeave={()=>setHoverText(false)}>

                <img
                src={require(`../../assets/${gifSrc ? props.gif : props.img}`)}
                onMouseLeave={()=>setOpacity(1)}
                onMouseEnter={()=>setOpacity(.3)}
                style={{opacity: opacity}}
                alt={props.name}
                className={`img img-${props.github}`}>
                </img>

                {hoverText && <span className='img-span'>Click to visit site</span>}
            </span>
        </div>
    )
}