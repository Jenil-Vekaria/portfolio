import React, { useState, useEffect } from 'react';
import './home.css';
import { BsMoonFill, BsMoon } from 'react-icons/bs';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';

const Home = () => {

    const [theme, settheme] = useState("dark-theme");

    useEffect(() => {
        document.documentElement.className = theme;
    }, [theme]);

    return (
        <section className='container' id="home">
            <div className='header-topbar'>
                <h4 className='text-color-primary'>Jenil</h4>
                {
                    theme === "dark-theme" ?
                        (
                            <BsMoonFill className="theme-toggle" size={20} onClick={() => settheme("light-theme")} />
                        ) :
                        (
                            <BsMoon className="theme-toggle" size={20} onClick={() => settheme("dark-theme")} />
                        )
                }
            </div>
            <header className='header-container'>
                <div className='header-intro'>
                    <h4>Hello 👋, I'm</h4>
                    <h1>Jenil Vekaria</h1>
                    <br />
                    <h4 className='text-color-primary '>Software Developer</h4>
                    <h4 className='text-color-primary text-weight-light'>Who builds and designs exceptional high-quality applications.</h4>
                    <div className='header-cta'>
                        <a href="https://drive.google.com/file/d/1FurMCQXQO0pMMJ8PsFiuHgIZYFVktoIp/view?usp=sharing" alt="Resume"><button className='btn btn-outline'>View Resume</button></a>
                        <a href="#about"><button className='btn btn-filled'>About me</button></a>
                    </div>

                </div>


                <div className='header-sidebar-info'>
                    <div className='header-social'>
                        <a href='https://linkedin.com/in/jenilvekaria' alt="LinkedIn" className='header-social-link'><AiFillLinkedin size={20} /></a>
                        <a href='https://github.com/Jenil-Vekaria' alt="Github" className='header-social-link'><AiFillGithub size={20} /></a>
                    </div>

                    <a href='#about' className='header-scroll-down'>Scroll Down</a>
                </div>

            </header>
        </section >
    );
};

export default Home;