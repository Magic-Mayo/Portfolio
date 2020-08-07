import React, {useState} from 'react';
import Logo from '../Logos';

export default ({github, name, address, img, gif, description, showProject, innerWidth}) => {

    const [hoverText, setHoverText] = useState(false);
    const [opacity, setOpacity] = useState(1);
    const [gifSrc, setGifSrc] = useState(false);

    return (
        <div
        className={`project project-${github} ${showProject ? 'current' : ''}`}
        onTouchStart={e => console.log(e)}
        >
            
            <a
            href={address}
            rel='noopener noreferrer'
            target='_blank'
            className={`project-title project-title-${name}`}
            >
                {name}
            </a>

            
            <p>{description}</p>

            <div
            className='img-container'
            onClick={() => window.open(`${address}`, '_blank','')}
            >

                <img
                src={require(`../../assets/${gifSrc ? img : gif}`)}
                alt={name}
                style={{opacity: opacity}}
                className={`img img-${github}`}
                onMouseEnter={() => {
                    setHoverText(true);
                    setOpacity(.3);
                    setGifSrc(true)
                }}
                onMouseLeave={() => {
                    setHoverText(false);
                    setOpacity(1);
                    setGifSrc(false)
                }}
                />
                
                {innerWidth > 800 &&
                    <div className='img-links'>
                        <a
                        href={address}
                        rel='noopener noreferrer'
                        target='_blank'
                        >
                            <Logo />
                        </a>

                        <Logo
                        address={github}
                        site='github'
                        />
                    </div>
                }

                {hoverText &&
                    <span
                    className='img-span'>
                        Visit site
                        <Logo
                        color='29,53,87'
                        />
                    </span>
                }
            </div>
            
            {innerWidth <= 800 &&
                <div className='img-links'>
                    <a
                    href={address}
                    rel='noopener noreferrer'
                    target='_blank'
                    >
                        <Logo />
                    </a>

                    <Logo
                    address={github}
                    site='github'
                    />
                </div>
            }
        </div>
    )
}
