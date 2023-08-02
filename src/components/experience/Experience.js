import React, { useEffect, useState } from 'react';
import sanityClient from "../../client";
import FormatDate from '../../util/FormatDate';
import './experience.css';

const Experience = () => {

    const [workExperience, setWorkExperience] = useState(null);

    useEffect(() => {
        sanityClient.fetch(`*[_type == "workExperience"] | order(startDate desc)`)
            .then(data => setWorkExperience(data))
            .catch(console.error);
    }, []);


    return (
        <section className='container' id="work_experience">
            <div className='section-header'>
                <h5>My experience</h5>
                <h2>Work Experience</h2>
            </div>

            <div className='work-experience-container'>

                {
                    workExperience && workExperience.map((work, index) => (
                        <div className='work-experience-card' key={index}>
                            <div className='work-experience-header'>
                                <h4 className='text-color-primary'>{work.company}</h4>
                                <h5 className='text-color-white'>{work.position}</h5>
                                <h5 className='text-color-secondary'>{FormatDate(work.startDate)} - {FormatDate(work.endDate)}</h5>
                            </div>

                            <ul className='work-experience-description'>
                                {
                                    work.description.map((description, index) => (<li key={index}>{description}</li>))
                                }
                            </ul>
                        </div>
                    ))
                }
            </div>

        </section>
    );
};

export default Experience;