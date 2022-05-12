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
                    workExperience && workExperience.map(work => (
                        <div className='work-experience-card'>
                            <div className='work-experience-header'>
                                <h3 className='text-color-primary'>{work.position}</h3>
                                <h5 className='text-color-white'>{work.company}</h5>
                                <h5 className='text-color-secondary'>{FormatDate(work.startDate)} - {FormatDate(work.endDate)}</h5>
                            </div>

                            <ul className='work-experience-description'>
                                {
                                    work.description.map(description => (<li>{description}</li>))
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