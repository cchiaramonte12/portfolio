import {useState, useEffect} from 'react';
import './contact.scss';
import emailjs from 'emailjs-com';
import Map from '../Map/Map';

export default function Contact() {

    const submit = () => {
        if (name && email && message) {
            const serviceId = 'service_i3fog2a';
            const templateId = 'template_25odtrg';
            const userId = 'user_iePGmqtKrbs3xkkjQILv3';
            const templateParams = {
                name,
                email,
                message
            };
            emailjs.send(serviceId, templateId, templateParams, userId)
                .then(response => console.log(response))
                .then(error => console.log(error));
            setName('');
            setEmail('');
            setMessage('');
            setEmailSent(true);
        }
        else if (!isValidEmail) {
            alert('Please enter a valid email.');
        } else {
            alert('Thank, I will reply ASAP!');
        }
    }

    const isValidEmail = email => {
        const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(String(email).toLowerCase());
    }

    const [message, setMessage] = useState('');
    const [emailSent, setEmailSent] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    return (
        <div className = "contact" id="contact">
            <div className = 'top'>
                <h2>Contact me</h2>
                <form onSubmit={submit}>
                    <input type = "text" placeholder ="Full Name" value={name} onChange={e => setName(e.target.value)} />
                    <input type = "text" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                    <textarea placeholder="Message" value={message} onChange={e => setMessage(e.target.value)} ></textarea>
                    <button onClick={submit}>Send</button>
                    <span className={emailSent ? 'visible' : null}></span>
                </form>
            </div>
            <div className = 'bottom'>
                <Map />
            </div>
        </div>
    )
}