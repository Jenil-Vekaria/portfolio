import React, { useState, useEffect } from 'react';
import { HiViewGrid } from 'react-icons/hi';
import { BiListUl, BiLink } from 'react-icons/bi';
import { BsGithub } from 'react-icons/bs';
import { SiDevpost } from 'react-icons/si';
import projectsList from '../../assests/Projects.json';
import './projects.css';
import { WindowSize } from '../../util/WindowSize';

const Projects = () => {

    const projects = projectsList.Projects;
    const filterOptions = ["All", "Java", "React", "Angular", "HTML/CSS", "Python", "C Programming", "Kotlin", "NodeJs", "ExpressJs", "MongoDB", "SQL", "Arduino", "Data Science", "Machine Learning"];

    const [selectedFilter, setSelectedFilter] = useState("All");
    const [showGridView, setShowGridView] = useState(true);
    const [filteredProjects, setFilteredProjects] = useState(projects);
    const windowSize = WindowSize();

    // const filteredProjects = projects.filter(project => selectedFilter === "" ? project : project.LanguagesUsed.includes(selectedFilter));

    console.log(windowSize);

    useEffect(() => {
        setFilteredProjects(projects.filter(project => selectedFilter === "All" ? projects : project.LanguagesUsed.includes(selectedFilter)));
    }, [selectedFilter, projects]);


    const onFilterOptionSelect = (e) => {
        setSelectedFilter(e.target.value);
    };


    return (
        <section className='container' id="projects">
            <div className='section-header'>
                <h5>Check it out!</h5>
                <h2>My Projects</h2>
            </div>

            <div className='projects-container'>
                <h3 className='text-color-white'>Filter</h3>
                <div className='filter-sort-container'>

                    {
                        windowSize <= 1023 ? (
                            <select className='project-filter-dropdown' onChange={onFilterOptionSelect}>
                                {
                                    filterOptions.map(option => (
                                        <option value={option}>{option}</option>

                                    ))
                                }
                            </select>
                        ) :
                            (
                                <div className='filters'>
                                    {
                                        filterOptions.map(option => (
                                            <button className={`filter-button ${option === selectedFilter ? "active" : ""}`} onClick={onFilterOptionSelect} value={option}>{option}</button>

                                        ))
                                    }
                                </div>
                            )
                    }
                    <div className='view-by'>
                        <button className='view-button' onClick={() => setShowGridView(true)}><HiViewGrid className={`view-icon ${showGridView ? "active" : ""}`} /></button>
                        <button className='view-button' onClick={() => setShowGridView(false)}><BiListUl className={`view-icon ${!showGridView ? "active" : ""}`} /></button>
                    </div>
                </div>

                {
                    showGridView && (
                        <div className='project-card-container'>

                            {
                                filteredProjects.map((project, index) => (
                                    <div className='project-card' key={project.ProjectID}>
                                        <img src={project.ProjectImage} alt='Soccer Robot' />
                                        <div className='project-card-info'>
                                            <h4 className='text-color-primary'>{project.ProjectName}</h4>
                                            <p>{project.ProjectDescription}</p>
                                        </div>

                                        <div className='project-languages'>
                                            {
                                                project.LanguagesUsed.map(language => (<p>{language}</p>))
                                            }
                                        </div>

                                        <div className='project-links'>
                                            <a href="#">
                                                <BiLink size={20} />
                                            </a>
                                            <a href="#">
                                                <BsGithub size={20} />
                                            </a>
                                            <a href="#">
                                                <SiDevpost size={20} />
                                            </a>
                                        </div>
                                    </div>
                                ))

                            }
                        </div>
                    )
                }


                {
                    !showGridView && (
                        <div className='project-list-container'>
                            <table>
                                <tr className='list-row'>
                                    <th>NAME</th>
                                    <th>DESCRIPTION</th>
                                    <th>TECH</th>
                                    <th>LINKS</th>
                                </tr>
                                {
                                    filteredProjects.map(project => (
                                        <tr className='list-row'>
                                            <td width="15%">{project.ProjectName}</td>
                                            <td width="55%">{project.ProjectDescription}</td>
                                            <td width="15%">{project.LanguagesUsed.join(", ")}</td>
                                            <td>
                                                <a href="#">
                                                    <BiLink size={20} />
                                                </a>
                                                <a href="#">
                                                    <BsGithub size={20} />
                                                </a>
                                                <a href="#">
                                                    <SiDevpost size={20} />
                                                </a></td>
                                        </tr>
                                    ))
                                }
                            </table>
                        </div>
                    )
                }
            </div>

        </section>
    );
};

export default Projects;