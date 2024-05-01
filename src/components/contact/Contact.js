import React from 'react';
import './contact.css';
import { MdEmail } from "react-icons/md";

const Contact = () => {
    return (
        <section className='contact-container' id="contact">
            <div className='section-header'>
                <h5>Reach out!</h5>
                <h2>Contact Me</h2>
            </div>

            <div className='contact-description'>
                <p>Got feedback on my</p>
                <p>portfolio or invitation to coffee ☕, my inbox is</p>
                <p>always open.</p>
            </div>

            <a href="mailto:jenilvekaria@yahoo.ca"><button className='btn btn-filled'> <MdEmail size={20} /> Send Email</button></a>

        </section>
    );
};

export default Contact;