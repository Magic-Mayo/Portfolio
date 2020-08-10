import React, { useState } from 'react';
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

    return(
        <section className='contact-form-wrapper'>
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
                setMessageSent={setMessageSent}
                innerWidth={innerWidth}
                />
            }

        </section>
    )
}