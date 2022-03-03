import React from 'react';
import './home.css';
import { BiMoon, BiMouse } from 'react-icons/bi';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import profile from '../../assests/profile_transparent.png';

const Home = () => {
    return (
        <section className='container'>
            <header>
                <h4 className='text-color-primary'>Jenil</h4>
                <BiMoon size={20} />
            </header>
            <div className='home-intro'>
                <h5>Hello, I'm</h5>
                <h1>Jenil Vekaria</h1>
                <h5 className='text-color-secondary'>Computer Science Student</h5>
            </div>

            <div className='cta'>
                <button className='btn btn-outline'>Download Resume</button>
                <button className='btn btn-filled'>About me</button>
            </div>

            <div className='profile'>
                <img src={profile} alt='Profile' />
            </div>

            <div className='social-header'>
                <a href='' target="_blank"><AiFillLinkedin /></a>
                <a href='' target="_blank"><AiFillGithub /></a>
            </div>

            <div className='scroll-down'>
                <a href='' target="_blank"><BiMouse /> <h6>Scroll Down</h6></a>
            </div>

        </section>
    );
};

export default Home;