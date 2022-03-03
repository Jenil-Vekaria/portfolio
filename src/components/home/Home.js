import React from 'react';
import './home.css';
import { BiMoon } from 'react-icons/bi';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import profile from '../../assests/profile_transparent.png';

const Home = () => {
    return (
        <section className='container'>
            <header className='header-container'>

                <div className='header-topbar'>
                    <h4 className='text-color-primary'>Jenil</h4>
                    <BiMoon size={20} />
                </div>



                <div className='header-intro'>
                    <h5>Hello, I'm</h5>
                    <h1>Jenil Vekaria</h1>
                    <h5 className='text-color-secondary'>Gradute Software Developer</h5>
                </div>

                <div className='header-cta'>
                    <button className='btn btn-outline'>Download Resume</button>
                    <button className='btn btn-filled'>About me</button>
                </div>


                <div className='header-profile'>
                    <img src={profile} alt='Profile' />
                </div>

                <div className='header-sidebar-info'>
                    <div className='header-social'>
                        <a href='https://linkedin.com/in/jenilvekaria' alt="Linkedin" className='header-social-link'><AiFillLinkedin /></a>
                        <a href='https://github.com/Jenil-Vekaria' alt="Github" className='header-social-link'><AiFillGithub /></a>
                    </div>

                    <a href='' className='header-scroll-down'>Scroll Down</a>
                </div>

            </header>
        </section>
    );
};

export default Home;