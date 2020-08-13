import React, {useState} from 'react';

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
            });
            
            setContactMessage('');
            setContactName('');
            setContactEmail('');
        } else {
            setMessageSent('Please fill out all fields!');
        }
    };

    return (
        <>
            <form
            className='contact-form'
            netlify='true'
            name='messages'
            onSubmit={handleSubmit}
            >
                <div className='contact-form-input'>
                    <div className='wrapper'>
                        <label
                        htmlFor='name'
                        className={contactName ? 'content' : ''}
                        >
                            {contactName ? 'My name is...' : 'Your name'}
                        </label>
                        <input
                        onChange={e => setContactName(e.target.value)}
                        value={contactName}
                        type='text'
                        name='name'
                        />
                    </div>

                    <div className='wrapper'>
                        <label
                        htmlFor='email'
                        className={contactEmail ? 'content' : ''}
                        >
                            {contactEmail ? 'My email is...' : 'Email address'}
                        </label>
                        <input
                        onChange={e => setContactEmail(e.target.value)}
                        value={contactEmail}
                        type='email'
                        name='email'
                        />
                    </div>
                </div>

                <div className='contact-form-input contact-form-textarea'>
                    <label
                    htmlFor='message'
                    className={contactMessage ? 'content' : ''}
                    >
                        {contactMessage ? 'My message to Mike...' : innerWidth < 850 ? 'Enter a message!' : 'Enter message to send to Mike Mayo here!'}
                    </label>
                    <textarea
                    name='message'
                    onChange={e => setContactMessage(e.target.value)}
                    value={contactMessage}
                    />
                </div>
                
                <button className='contact-form-submit'>Send!</button>
            </form>
        </>
    )
}