import React from 'react';
import './contact.css';
import { MdEmail } from "react-icons/md";
import Footer from '../footer/Footer';

const Contact = () => {
    return (
        <section className='contact-container' id="contact">
            <div className='section-header'>
                <h5>Reach out!</h5>
                <h2>Contact Me</h2>
            </div>

            <h4>
                Seeking fulltime software/full-stack developer position. Got a job opportunity,
                feedback on my portfolio or invitation to coffee☕, my inbox is
                always open.
            </h4>

            <a href="mailto:jenilvekaria@yahoo.ca"><button className='btn btn-filled'> <MdEmail size={20} /> Send Email</button></a>

            <Footer />

        </section>
    );
};

export default Contact;