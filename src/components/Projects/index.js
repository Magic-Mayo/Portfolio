import React, {useState} from 'react';
import Github from '../Logos/Github';

export default function Projects(props){

    const [opacity, setOpacity] = useState(.3);

    return (
        <div className={`project project-${props.github}`} onMouseEnter={()=>setOpacity(1)} onMouseLeave={()=>setOpacity(.3)} style={{opacity: `${opacity}`}}>
            <h1 className={`project-title project-title-${props.name}`} onClick={()=>window.open(`${props.address}`, '_blank','')}>{props.name}</h1>
            <Github address={props.github} />
            <p>{props.desc}</p>
            <img src={process.env.PUBLIC_URL + props.img} alt={"name"} className={`img img-${props.github}`} onClick={()=>window.open(`${props.address}`, '_blank','')}></img>
        </div>
    )
}