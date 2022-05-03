import React from 'react';
import { AiFillLinkedin, AiFillGithub, AiFillFile } from 'react-icons/ai';
import { SiDevpost } from 'react-icons/si';
import { MdEmail } from "react-icons/md";

const Footer = () => {
    return (
        <footer className='footer'>
            <p>Made with React by Jenil Vekaria</p>
            <a href="#home"><p className='scroll-to-top'>🚀Scroll to the top!🚀</p></a>
            <div className='footer-links'>
                <a href='https://linkedin.com/in/jenilvekaria' alt="Linkedin"><AiFillLinkedin size={25} /></a>
                <a href='https://github.com/Jenil-Vekaria' alt="Github" ><AiFillGithub size={25} /></a>
                <a href="https://devpost.com/JenilVekaria" alt="Devpost"><SiDevpost size={25} /></a>
                <a href="mailto:jenilvekaria@yahoo.ca" alt="Email"><MdEmail size={25} /></a>
                <a href="/resume.pdf" alt="Resume"><AiFillFile size={25} /></a>
            </div>
        </footer>
    );
};

export default Footer;