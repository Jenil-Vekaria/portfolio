import React from 'react';
import './skills.css';
import { BsPatchCheckFill } from 'react-icons/bs';
const Skills = () => {
    return (
        <section className='container' id="skills">
            <div className='section-header'>
                <h5>What Skills I Have</h5>
                <h2>Technical Skills</h2>
            </div>
            <div className='skills-container'>
                <div className='skills-card'>
                    <h3 className='text-color-primary'>Languages</h3>
                    <div className='skills-list'>
                        <article className='skills-item'>
                            <BsPatchCheckFill className="skills-item-icon" />
                            <h5>Java</h5>
                        </article>
                        <article className='skills-item'>
                            <BsPatchCheckFill className="skills-item-icon" />
                            <h5>Python</h5>
                        </article>
                        <article className='skills-item'>
                            <BsPatchCheckFill className="skills-item-icon" />
                            <h5>Kotlin</h5>
                        </article>
                        <article className='skills-item'>
                            <BsPatchCheckFill className="skills-item-icon" />
                            <h5>JavaScript</h5>
                        </article>
                        <article className='skills-item'>
                            <BsPatchCheckFill className="skills-item-icon" />
                            <h5>Bash</h5>
                        </article>
                        <article className='skills-item'>
                            <BsPatchCheckFill className="skills-item-icon" />
                            <h5>Apex</h5>
                        </article>
                        <article className='skills-item'>
                            <BsPatchCheckFill className="skills-item-icon" />
                            <h5>SQL</h5>
                        </article>
                        <article className='skills-item'>
                            <BsPatchCheckFill className="skills-item-icon" />
                            <h5>XML</h5>
                        </article>
                    </div>
                </div>

                <div className='skills-card'>
                    <h3 className='skills-title text-color-primary'>Frontend/Backend</h3>
                    <div className='skills-list'>
                        <article className='skills-item'>
                            <BsPatchCheckFill className="skills-item-icon" />
                            <h5>React</h5>
                        </article>
                        <article className='skills-item'>
                            <BsPatchCheckFill className="skills-item-icon" />
                            <h5>Angular</h5>
                        </article>
                        <article className='skills-item'>
                            <BsPatchCheckFill className="skills-item-icon" />
                            <h5>Express.js</h5>
                        </article>
                        <article className='skills-item'>
                            <BsPatchCheckFill className="skills-item-icon" />
                            <h5>Node.js</h5>
                        </article>
                        <article className='skills-item'>
                            <BsPatchCheckFill className="skills-item-icon" />
                            <h5>Bootstrap CSS</h5>
                        </article>
                        <article className='skills-item'>
                            <BsPatchCheckFill className="skills-item-icon" />
                            <h5>Materialize CSS</h5>
                        </article>
                    </div>
                </div>

                <div className='skills-card'>
                    <h3 className='skills-title text-color-primary'>Database</h3>
                    <div className='skills-list'>
                        <article className='skills-item'>
                            <BsPatchCheckFill className="skills-item-icon" />
                            <h5>Oracle DB</h5>
                        </article>
                        <article className='skills-item'>
                            <BsPatchCheckFill className="skills-item-icon" />
                            <h5>MongoDB</h5>
                        </article>
                        <article className='skills-item'>
                            <BsPatchCheckFill className="skills-item-icon" />
                            <h5>Firebase DB</h5>
                        </article>
                    </div>
                </div>

                <div className='skills-card'>
                    <h3 className='skills-title text-color-primary'>Tools</h3>
                    <div className='skills-list'>
                        <article className='skills-item'>
                            <BsPatchCheckFill className="skills-item-icon" />
                            <h5>TravisCI</h5>
                        </article>
                        <article className='skills-item'>
                            <BsPatchCheckFill className="skills-item-icon" />
                            <h5>Git</h5>
                        </article>
                        <article className='skills-item'>
                            <BsPatchCheckFill className="skills-item-icon" />
                            <h5>Postman</h5>
                        </article>
                        <article className='skills-item'>
                            <BsPatchCheckFill className="skills-item-icon" />
                            <h5>Android Studio</h5>
                        </article>
                        <article className='skills-item'>
                            <BsPatchCheckFill className="skills-item-icon" />
                            <h5>JIRA</h5>
                        </article>
                        <article className='skills-item'>
                            <BsPatchCheckFill className="skills-item-icon" />
                            <h5>Bitbucket</h5>
                        </article>
                        <article className='skills-item'>
                            <BsPatchCheckFill className="skills-item-icon" />
                            <h5>Confluence</h5>
                        </article>

                        <article className='skills-item'>
                            <BsPatchCheckFill className="skills-item-icon" />
                            <h5>Google Cloud</h5>
                        </article>
                        <article className='skills-item'>
                            <BsPatchCheckFill className="skills-item-icon" />
                            <h5>Adobe XD</h5>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;