import React, { useEffect, useState } from 'react';
import { AiFillLinkedin, AiFillGithub, AiFillFile } from 'react-icons/ai';
import { SiDevpost } from 'react-icons/si';
import { MdEmail } from "react-icons/md";
import countapi from 'countapi-js';

const Footer = () => {
    const [websiteHit, setwebsiteHit] = useState(0);

    useEffect(() => {
        countapi.hit('jenil-vekaria.netlify.app', process.env.REACT_APP_COUNT_API_KEY).then((result) => { setwebsiteHit(result.value); });
    }, []);


    return (
        <footer className='footer'>
            <p>Made with React by Jenil Vekaria</p>
            <a href="#home"><p className='scroll-to-top'>🚀Scroll to the top!🚀</p></a>
            <p className='active'>Website View Count: {websiteHit}</p>
            <div className='footer-links'>
                <a href='https://linkedin.com/in/jenilvekaria' alt="Linkedin"><AiFillLinkedin size={25} /></a>
                <a href='https://github.com/Jenil-Vekaria' alt="Github" ><AiFillGithub size={25} /></a>
                <a href="https://devpost.com/JenilVekaria" alt="Devpost"><SiDevpost size={25} /></a>
                <a href="mailto:jenilvekaria@yahoo.ca" alt="Email"><MdEmail size={25} /></a>
                <a href="https://drive.google.com/file/d/1FurMCQXQO0pMMJ8PsFiuHgIZYFVktoIp/view?usp=sharing" alt="Resume"><AiFillFile size={25} /></a>
            </div>
        </footer>
    );
};

export default Footer;