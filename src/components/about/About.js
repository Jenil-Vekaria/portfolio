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
                        Minim est ex irure velit ea eiusmod eu esse mollit cillum enim do
                        Lorem sunt. Consectetur aliqua adipisicing deserunt minim ut magna
                        consectetur velit ea ipsum consequat. Cillum sint incididunt mollit
                        proident officia officia est eu. Deserunt consectetur et et anim
                        excepteur.
                    </p>
                    <br />
                    <p>
                        Minim est ex irure velit ea eiusmod eu esse mollit cillum enim do
                        Lorem sunt. Consectetur aliqua adipisicing deserunt minim ut magna
                        consectetur velit ea ipsum consequat. Cillum sint incididunt mollit
                        proident officia officia est eu. Deserunt consectetur et et anim
                        excepteur.
                    </p>
                    <br />
                    <button className='btn-filled'>Contact Me</button>
                </div>
            </div>
        </section>
    );
};

export default About;