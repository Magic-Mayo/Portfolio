import React, { useState, useEffect } from 'react';
import Logo from '../Logos';
import Form from '../Form';

const wasMessageSent = () => {
    const messageSentOn = parseInt(localStorage.getItem('dateMessage'));
    if((isNaN(messageSentOn) === false && Date.now() - messageSentOn > 8640000000) || isNaN(messageSentOn)){
        return false;
    }
    
    return true;
}


export default ({innerWidth}) => {
    const [messageSent, setMessageSent] = useState(wasMessageSent);
    
    useEffect(() => {
        let messageTimer;

        if(messageSent === 'Please fill out all fields!' || messageSent === 'There was an error sending your message!  Please try again!'){
            messageTimer = setTimeout(() => setMessageSent(false), 3000);
        }
    
        return () => messageTimer ? clearTimeout(messageTimer) : null;
    }, [messageSent]);

    return(
        <section className='contact-form-wrapper'>
            {innerWidth < 675 &&
                <>
                    <p className='contact-other'>Contact Mike!</p>
                    
                    <div>
                        <Logo site='linkedin' />
                        <Logo site='github' />
                        <Logo site='mail' />
                    </div>
                </>
        
            }

            {messageSent ?
                <p className='contact-message-sent'>
                    {messageSent === true ?
                        "You've already sent a message to Mike in the last 24 hours!  He's using a service that only allows a finite number of messages each month!  Please help him out by waiting patiently for a response to your previous message!  I know he will really appreciate it!"
                    :
                        messageSent
                    }
                </p>
            
            : 
                <Form
                messageSent={messageSent}
                setMessageSent={setMessageSent}
                innerWidth={innerWidth}
                />
            }

            {innerWidth > 675 &&
                <>
                    <p className='contact-other'>....or reach Mike here!</p>
                    
                    <div>
                        <Logo site='linkedin' />
                        <Logo site='github' />
                        <Logo site='mail' />
                    </div>
                </>
            }
        </section>
    )
}