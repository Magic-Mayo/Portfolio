import React, {useState, useEffect} from 'react';
import Github from '../Logos/Github';

export default function Projects(props){

    const [opacity, setOpacity] = useState(.3);
    const [hoverText, setHoverText] = useState(false);

    useEffect(()=>{
        setHoverText(hoverText)
    },[hoverText])

    return (
        <div className={`project project-${props.github}`} onMouseEnter={()=>setOpacity(1)} onMouseLeave={()=>setOpacity(.3)} style={{opacity: `${opacity}`}}>
            <h1 className={`project-title project-title-${props.name}`} onClick={()=>window.open(`${props.address}`, '_blank','')}>{props.name}</h1>
            <Github address={props.github} />
            <p>{props.desc}</p>
            <div className='img-container' onClick={()=>window.open(`${props.address}`, '_blank','')} onMouseEnter={()=>setHoverText(true)} onMouseLeave={()=>setHoverText(false)}>
                <img src={process.env.PUBLIC_URL + props.img} style={{}} alt={"name"}  className={`img img-${props.github}`}></img>
                {hoverText && <span>Click to visit site</span>}
            </div>
        </div>
    )
}