import React, { useState } from 'react';
import Logo from '../Logos'


export default function Contact(){
    const [contactName, setContactName] = useState('');
    const [contactEmail, setContactEmail] = useState('');
    const [contactMessage, setContactMessage] = useState('');
    
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
            .then(() => alert("Your message is on the way!"))
            .catch(error => alert(error));
            
            setContactMessage('');
            setContactName('');
            setContactEmail('');
        } else {
            alert('Please fill out all fields!')
        }
    };

    return(
        <section className='contact-form-wrapper'>
            <span className='contact-form-header'>Contact Mike Mayo</span>
            <form
            className='contact-form'
            netlify='true'
            name='messages'
            onSubmit={handleSubmit}>
                <span>
                    <input
                    className='contact-form-name'
                    placeholder='Your name'
                    onChange={(e)=>setContactName(e.target.value)}
                    value={contactName}
                    type='text'/>
                    <input
                    className='contact-form-email'
                    placeholder='Email address'
                    onChange={(e)=>setContactEmail(e.target.value)}
                    value={contactEmail}
                    type='email'/>
                </span>
                <span>
                    <textarea
                    className='contact-form-message'
                    placeholder='Enter message to send to Mike Mayo here!'
                    onChange={(e)=>setContactMessage(e.target.value)}
                    value={contactMessage}>
                    </textarea>
                </span>
                <button className='contact-form-submit'>Send!</button>
            </form>

            <p className='contact-other'>...or reach me here</p>
            <Logo site='linkedin' />
            <Logo site='github' styles={{margin: '0 2rem'}}/>
            <Logo site='mail' />
        </section>
    )
}