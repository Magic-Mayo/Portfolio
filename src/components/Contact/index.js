import React, { useState } from 'react';
import Logo from '../Logos';

const wasMessageSent = () => {
    const messageSentOn = parseInt(localStorage.getItem('dateMessage'));
    if((isNaN(messageSentOn) === false && Date.now() - messageSentOn > 8640000000) || isNaN(messageSentOn)){
        return false;
    }
    
    return true;
}

export default () => {
    const [contactName, setContactName] = useState('');
    const [contactEmail, setContactEmail] = useState('');
    const [contactMessage, setContactMessage] = useState('');
    const [messageSent, setMessageSent] = useState(wasMessageSent);
    
    const encode = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
    }

    const handleSubmit = e => {
        e.preventDefault();

        if(contactName !== '' && contactEmail !== '' && contactMessage !== ''){
            fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "messages", "name": [contactName], "email": [contactEmail], "message": [contactMessage]})
            })
            .then(() => {
                setMessageSent(true);
                localStorage.setItem('sentMessage', contactMessage);
                localStorage.setItem('dateMessage', Date.now());
            })
            .catch(error => {
                setMessageSent('There was an error sending your message!  Please try again!');
                setTimeout(() => setMessageSent(), 5000)
            });

            setContactMessage('');
            setContactName('');
            setContactEmail('');
        } else {
            alert('Please fill out all fields!')
        }
    };

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

            <form
            className='contact-form'
            netlify='true'
            name='messages'
            onSubmit={handleSubmit}
            >
                <div className='contact-form-input'>
                    <input
                    className='contact-form-name'
                    placeholder='Your name'
                    onChange={(e) => setContactName(e.target.value)}
                    value={contactName}
                    type='text'/>
                    <input
                    className='contact-form-email'
                    placeholder='Email address'
                    onChange={(e) => setContactEmail(e.target.value)}
                    value={contactEmail}
                    type='email'/>
                </div>
                <div className='contact-form-input'>
                    <textarea
                    className='contact-form-message'
                    placeholder='Enter message to send to Mike Mayo here!'
                    onChange={(e) => setContactMessage(e.target.value)}
                    value={contactMessage}>
                    </textarea>
                </div>
                    <button className='contact-form-submit'>Send!</button>
            </form>
            }

            <p className='contact-other'>...or reach me here</p>
            
            <div>
                <Logo site='linkedin' />
                <Logo site='github' styles={{margin: '0 2rem'}}/>
                <Logo site='mail' />
            </div>
        </section>
    )
}