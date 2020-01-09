import React from 'react';
import { useOnScreen } from '../../hooks/index';

export default function About(){
    const [aboutRef, aboutView] = useOnScreen({rootMargin: '-300px'});

    return (
        <>
            <span className={`about about${!aboutView ? '' : '-to-nav'}`}>About</span>
            <h2 className={`about-title about-title${aboutView ? '' : '-to-nav'}`}>About Mike</h2>

            <section className='intro' ref={aboutRef} >
                <p>
                    I'll start with a little history on myself and how I came to this point. I began my adult life
                    serving five years in the US Air Force as an Avionics System Technician on F-16 aircraft. I enjoyed
                    the time I spent in the Air Force but never intended it to be a full career. After separating from
                    the Air Force I went to school at Unviersal Technical Institute and earned an Associate's degree in
                    Automotive Technology. From there I went on to earn seven ASE certifications as well as become an
                    inspector for Virginia's annual state safety inspection, which is required for all vehicles registered in
                    the state of Virginia.
                </p>
                    
                <p>
                    Since making the transition from the Air Force to the civilian world and working on cars I haven't been
                    challenged in ways I need to be. Day to day work has become very simple and repetitive and I need a career that will stimulate my mind so I can enjoy what I do. I have since found out about coding and the
                    development world and have been extremely intrigued by it! With the way technology changes and evolves so quickly I believe I will always have the challenge I need to enjoy work.
                </p>
                    
                <p>
                    One of the accomplishments, professional or personal, I am most proud of is hiking the Southern
                    California section of the Pacific Crest Trail. If you've never heard of the Pacific Crest Trail, it runs from the California/Mexico border and winds through California, Oregon, and Washington and finishes eight miles
                    into Canada.  The full trail is over 2,600 miles long! I intended on completing the full length of the trail but was forced to come home due to injuries I could no longer hike on. I hiked through numerous injuries on the trail but ultimately I decided long-term health was more important than finishing something I could always come back to. Hiking 700 miles is still a feat in itself and I plan to go back someday and finish what I started!
                </p>
            </section>
        </>
    )
}