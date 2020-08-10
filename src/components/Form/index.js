import React, {useState} from 'react';
import Logo from '../Logos';

export default ({setMessageSent, innerWidth}) => {
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


    return (
        <>
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
            
            <form
            className='contact-form'
            netlify='true'
            name='messages'
            onSubmit={handleSubmit}
            >
                <div className='contact-form-input'>
                    <span
                    className={`contact-form-input-name ${contactName ? 'content' : ''}`}
                    >
                        <input
                        placeholder='Your name'
                        onChange={e => setContactName(e.target.value)}
                        value={contactName}
                        type='text'
                        name='contact-name'
                        />
                    </span>
                    <span>
                        <input
                        className={`contact-form-email ${contactEmail ? 'content' : ''}`}
                        placeholder='Email address'
                        onChange={e => setContactEmail(e.target.value)}
                        value={contactEmail}
                        type='email'/>
                    </span>
                    </div>
                    <div className='contact-form-input'>
                        <textarea
                        className='contact-form-message'
                        placeholder='Enter message to send to Mike Mayo here!'
                        onChange={e => setContactMessage(e.target.value)}
                        value={contactMessage}>
                        </textarea>
                </div>
                <button className='contact-form-submit'>Send!</button>
            </form>

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
        </>
    )
}