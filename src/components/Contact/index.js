import React, { useState } from 'react';



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
    };

    return(
        <div className='contact-form-wrapper'>
            <span className='contact-form-header'>Contact Mike Mayo</span>
            <form
            className='contact-form'
            netlify='true'
            name='messages'
            onSubmit={handleSubmit}>
                <span>
                    <input
                    className='contact-form-name'
                    placeholder='Preferred contact name'
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
                <textarea
                className='contact-form-message'
                placeholder='Enter message to send to Mike Mayo here!'
                onChange={(e)=>setContactMessage(e.target.value)}
                value={contactMessage}>
                </textarea>
                <button className='contact-form-submit'>Send!</button>
            </form>
        </div>
    )
}