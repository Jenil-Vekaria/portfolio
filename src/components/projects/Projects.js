import React, { useState, useEffect } from 'react';
import { HiViewGrid } from 'react-icons/hi';
import { BiListUl, BiLink } from 'react-icons/bi';
import { BsGithub } from 'react-icons/bs';
import { SiDevpost } from 'react-icons/si';
import './projects.css';
import { WindowSize } from '../../util/WindowSize';
import sanityClient from "../../client";
import { urlFor } from '../../util/SanityImageUrl';

const Projects = () => {

    const windowSize = WindowSize();
    const filterOptions = ["All", "Java", "React", "Angular", "HTML", "CSS", "Python", "C-Programming", "Kotlin", "NodeJs", "ExpressJs", "MongoDB", "SQL", "Arduino", "Data Science", "Machine Learning"];

    const [selectedFilter, setSelectedFilter] = useState("All");
    const [showGridView, setShowGridView] = useState(true);
    const [projects, setProjects] = useState(null);
    const [filteredProjects, setFilteredProjects] = useState(null);
    const [projectLimit, setProjectLimit] = useState(6);

    useEffect(() => {
        if (selectedFilter === "All") {
            setFilteredProjects(projects);
        }
        else {
            setFilteredProjects(projects.filter(project => project.technologies.includes(selectedFilter)));
        }
    }, [selectedFilter]);

    useEffect(() => {
        sanityClient.fetch(`*[_type == "project"] | order(created desc)`)
            .then((data) => {
                setProjects(data);
                setFilteredProjects(data);
            })
            .catch(console.error);
    }, []);


    const onFilterOptionSelect = (e) => {
        setSelectedFilter(e.target.value);
    };

    const onHandleShowMore = () => {
        var endIndex = projectLimit + 3;

        if (endIndex > filteredProjects.length) {
            endIndex = filteredProjects;
        }

        setProjectLimit(endIndex);
    };

    const onHandleShowLess = () => {
        setProjectLimit(6);
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
                                    filterOptions.map((option, index) => (
                                        <option value={option} key={index}>{option}</option>

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
                    showGridView && filteredProjects && (
                        <div className='project-card-container'>

                            {
                                filteredProjects.slice(0, projectLimit).map((project) => (
                                    <div className='project-card' key={project._id}>
                                        <img src={urlFor(project.image.asset._ref)} alt='Soccer Robot' />
                                        <div className='project-card-info'>
                                            <h4 className='text-color-primary'>{project.name}</h4>
                                            <p>{project.description}</p>
                                        </div>

                                        <div className='project-languages'>
                                            {
                                                project.technologies.map((tech, index) => (<p key={index}>{tech}</p>))
                                            }
                                        </div>

                                        <div className='project-links'>
                                            {
                                                project.demo && (<a href={project.demo}><BiLink size={20} /></a>)
                                            }

                                            {
                                                project.github && (<a href={project.github}><BsGithub size={20} /></a>)
                                            }

                                            {
                                                project.devpost && (<a href={project.devpost}><SiDevpost size={20} /></a>)
                                            }
                                        </div>
                                    </div>
                                ))

                            }
                        </div>
                    )
                }


                {
                    !showGridView && filteredProjects != null && filteredProjects.length > 0 && (
                        <div className='project-list-container'>
                            <table>
                                <tr className='list-row'>
                                    <th>NAME</th>
                                    <th>DESCRIPTION</th>
                                    <th>TECH</th>
                                    <th>LINKS</th>
                                </tr>
                                {
                                    filteredProjects.slice(0, projectLimit).map(project => (
                                        <tr className='list-row' key={project._id}>
                                            <td width="15%">{project.name}</td>
                                            <td width="55%">{project.description}</td>
                                            <td width="15%">{project.technologies.join(", ")}</td>
                                            <td>
                                                {
                                                    project.demo && (<a href={project.demo}><BiLink size={20} /></a>)
                                                }

                                                {
                                                    project.github && (<a href={project.github}><BsGithub size={20} /></a>)
                                                }

                                                {
                                                    project.devpost && (<a href={project.devpost}><SiDevpost size={20} /></a>)
                                                }
                                            </td>
                                        </tr>
                                    ))
                                }
                            </table>
                        </div>
                    )
                }

                {
                    filteredProjects != null && filteredProjects.length > 0 &&
                    (
                        projectLimit < filteredProjects.length ? (
                            <button className='btn btn-filled show-projects' onClick={onHandleShowMore}>Show More Projects</button>
                        ) :
                            (
                                <a href="#projects"><button className='btn btn-filled show-projects' onClick={onHandleShowLess}>Show Less Projects</button></a>
                            )
                    )
                }

                {
                    filteredProjects != null && filteredProjects.length === 0 && (
                        <>
                            <br />
                            <h3>No Projects Found :(</h3>
                        </>
                    )
                }

            </div>

        </section>
    );
};

export default Projects;