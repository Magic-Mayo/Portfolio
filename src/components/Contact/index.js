import React, { useState } from 'react';

export default function Contact(){
    const [contactName, setContactName] = useState('');
    const [contactEmail, setContactEmail] = useState('');
    const [contactMessage, setContactMessage] = useState('');

    return(
        <div className='contact-form-wrapper'>
        <span className='contact-form-header'>Contact Mike Mayo</span>
            <form className='contact-form' netlify>
                <input
                className='contact-form-name'
                placeholder='Preferred contact name'
                onChange={(e)=>setContactName(e.target.value)}
                value={contactName}/>
                <input
                className='contact-form-email'
                placeholder='Email address'
                onChange={(e)=>setContactEmail(e.target.value)}
                value={contactEmail}/>
                <textarea
                className='contact-form-message'
                placeholder='Enter message to send to Mike Mayo here!'
                onChange={(e)=>setContactMessage(e.target.value)}
                value={contactMessage}>
                </textarea>
                <button
                className='contact-form-submit'
                onClick={(e)=>{
                    e.preventDefault();
                    setContactMessage('');
                    setContactName('');
                    setContactEmail('');}}>Submit</button>
            </form>
        </div>
    )
}