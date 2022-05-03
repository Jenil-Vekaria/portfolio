import React from 'react';
import './about.css';
import profile from '../../assests/profile.png';

const About = () => {
    return (
        <section className='container' id="about">
            <div className='section-header'>
                <h5>My Intro</h5>
                <h2>About Me</h2>
            </div>

            <div className='about-container'>
                <div className='about-profile'>
                    <img src={profile} alt='Profile' />
                </div>

                <div className='about-me-description'>
                    <p>
                        Hi 👋, I'm Jenil! I graduated from <span className='highlight'>Ryerson University</span> in 2022 with a Bachelors
                        degree in <span className='highlight'>Computer Science</span>. I'm a software engineer specialized in
                        developing and designing exceptional high quality web/mobile applications that run
                        seamlessly across all platforms & devices.
                    </p>
                    <br />
                    <p>
                        Computer Science has vast subdisciplines and as technologies advance quickly, I always
                        enjoy trying out new technologies to keep things interesting and challenging. My passion
                        for programming started back in grade 8 creating my first mobile game and ever since
                        then I began to appreciate the smart and efficient methologies  that goes behind all the technologies
                        I've ever used. I'm always learning new technologies through school, hackathons and personal
                        projects.

                    </p>
                    <br />
                    <p>
                        Aside from being in front of my computer, I am probably playing Basketball 🏀,
                        Biking 🚴‍♂️, Swimming 🏊‍♂️(former Lifeguard), listening to music 🎵 or watching TV shows 📺.
                    </p>
                    <br />
                    <a href="#contact"><button className='btn btn-filled' >Contact Me</button></a>
                </div>
            </div>
        </section>
    );
};

export default About;