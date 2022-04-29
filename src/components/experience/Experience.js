import React from 'react';
import './experience.css';

const Experience = () => {
    return (
        <section className='container' id="work_experience">
            <div className='section-header'>
                <h5>My experience</h5>
                <h2>Work Experience</h2>
            </div>

            <div className='work-experience-container'>

                <div className='work-experience-card'>
                    <div className='work-experience-header'>
                        <h3 className='text-color-primary'>IT Developer</h3>
                        <h5 className='text-color-white'>Ontario Ministry of Health and Long Term Care</h5>
                        <h5 className='text-color-secondary'>January 2021 - August 2021</h5>
                    </div>

                    <ul className='work-experience-description'>
                        <li>Completed user stories using Salesforce (Apex, SOQL/SOSL, JavaScript) for Case and Contact Management</li>
                        <li>Analyzed and synced multiple development environments daily</li>
                        <li>Collaborated with QA team daily to resolve any bugs or defects</li>
                        <li>Managed Vaccine Clinic mailbox to process requests from health units</li>
                        <li>Processed 600+ vaccine clinic requests and configured into the COVax system</li>
                    </ul>
                </div>

                <div className='work-experience-card'>
                    <div className='work-experience-header'>
                        <h3 className='text-color-primary'>Software Developer</h3>
                        <h5 className='text-color-white'>ServiceEcho</h5>
                        <h5 className='text-color-secondary'>May 2020 - December 2020</h5>
                    </div>

                    <ul className='work-experience-description'>
                        <li>Redesigned entire Android app UI using Java and XML increasing customer experience</li>
                        <li>Designed and developed custom multi-stack navigation</li>
                        <li>Incorporated View Bining which reduced code base by 80% and increasing productivity</li>
                        <li>Utilized Atlassian JIRA, Bitbucket, and Confluence for technical/customer documentation, track ticket, and develop UAT</li>
                        <li>Published the Android app to the Google Play Store for closed testing</li>
                    </ul>
                </div>


            </div>

        </section>
    );
};

export default Experience;