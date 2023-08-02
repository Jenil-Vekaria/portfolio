import React, { useState, useEffect } from 'react';
import sanityClient from "../../client";
import { urlFor } from '../../util/SanityImageUrl';

import './about.css';

const About = () => {
    const [certifications, setCertifications] = useState([]);
    const [skills, setSkills] = useState([]);
    const [aboutMe, setAboutMe] = useState(null);

    useEffect(() => {
        sanityClient.fetch(`*[_type == "certification"] | order(issued desc)`)
            .then(data => setCertifications(data))
            .catch(console.error);

        sanityClient.fetch(`*[_type == "skill"]`)
            .then(data => setSkills(data))
            .catch(console.error);

        sanityClient.fetch(`*[_type == "aboutme"]`)
            .then(data => setAboutMe(data))
            .catch(console.error);
    }, []);

    return (
        <section className='container' id="about">
            <div className='section-header'>
                <h5>My Intro</h5>
                <h2>About Me</h2>
            </div>

            <div className='about-me'>
                <div className='about-container'>
                    <div className='about-profile'>
                        <img src={aboutMe ? urlFor(aboutMe[0].profile) : ""} alt='Profile' />
                    </div>

                    <div className='about-me-description'>
                        {
                            aboutMe ? (
                                aboutMe[0].description.map((description, index) => (<React.Fragment key={index}><p >{description}</p><br /></React.Fragment>))
                            ) : null
                        }
                    </div>
                </div>

                <div className='about-container'>
                    <div>
                        <h3>Education</h3>
                        <br />
                        <div>
                            <h4 className='text-color-primary'>Ryerson University</h4>
                            <h5 className='text-color-white'>BSc in Computer Science (Co-op)</h5>
                            <h5 className='text-color-secondary'>September 2017 - May 2022</h5>
                            <p className='text-regular'>CGPA: 3.85 / 4.33</p>
                        </div>
                        <br />
                        <div>
                            <h4 className='text-color-primary'>West Humber Collegiate Institute</h4>
                            <h5 className='text-color-white'>High School Diploma</h5>
                            <h5 className='text-color-secondary'>September 2013 - June 2017</h5>
                            <p className='text-regular'>Average: 88 / 100</p>
                        </div>
                    </div>

                    <div>
                        <h3>Skills</h3>
                        <br />
                        <div className='about-skills'>

                            {
                                skills.map((skillsGroup, index) => (
                                    <div key={index}>
                                        <h5 className='text-color-secondary'>{skillsGroup.group}</h5>
                                        <div className='flex'>
                                            {
                                                skillsGroup.skills.map((url, index) => (
                                                    <img alt="" key={index} src={url} height="25" />

                                                ))
                                            }
                                        </div>
                                    </div>
                                ))
                            }
                        </div>

                    </div>

                    <div>
                        <h3>Certifications</h3>
                        {
                            certifications.map(certification =>
                                <a href={certification.link} key={certification.name}>
                                    <img alt={certification.name} src={certification.imageURL} width='140px' />
                                </a>
                            )
                        }
                    </div>
                </div>
            </div>
        </section >
    );
};

export default About;