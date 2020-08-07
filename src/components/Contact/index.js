import React, { useState } from 'react';
import Logo from '../Logos';
import Envelope from '../Logos/Envelope';


export default function Contact(props){
    const [contactName, setContactName] = useState('');
    const [contactEmail, setContactEmail] = useState('');
    const [contactMessage, setContactMessage] = useState('');
    
    const encode = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
    }

    const sendMessage = () => {

    }

    const handleEnvelopeClick = () => {
        
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

            <p className='contact-other'>...or reach me here</p>
            
            <div>
                <Logo site='linkedin' />
                <Logo site='github' styles={{margin: '0 2rem'}}/>
                <Logo site='mail' />
            </div>
        </section>
    )
}