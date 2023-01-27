import React, { useState, useContext } from "react";
import ProjectCard from "./ProjectCard";
import { ProjectContext } from "../../context/ProjectContext";
import projectsData from "../../data/projectsData";

const Projects = (props) => {
    const [projectsList, setProjectsList] = useState([...projectsData])
    const {selectedCard} = useContext(ProjectContext)

    const mappedProjectsList = projectsList.map((project) => {
        return(
            <div>
                <ProjectCard {...project} 
                    key = {project.id}
                    id = {project.id}
                    data = {projectsList}
                />
            </div>
            )
        })

    const styles = {
        h1: " w-full text-3xl text-white flex justify-center bg-gradient-to-t from-slate-900 to-slate-500",
        projects: "h-screen w-full px-3 items-start opacity-75 bg-slate-700 text-white overflow-x-auto",
        ulHeader: "flex justify-center text-white",
        ul: "flex",
        display: "m-5 p-5 h-1/2 w-1/3 text-white flex flex-col self-center shadow-lg shadow-black rounded-xl",
        displayTitle: "flex self-center",
        displayImage: "m-5 h-72 w-72 flex self-center shadow-lg shadow-black rounded-xl",
        displayText: "h-12",
        displayLink: "flex self-center text-slate-400 hover:text-slate-200"
    }
    return (
        <>
            <h1 className={styles.h1}>Project Portfolio</h1>
            { selectedCard === null ?
                <></>
            :
                <div className={styles.display}>
                    <h1 className={styles.displayTitle}>{selectedCard.title}</h1>
                    <img className={styles.displayImage} src={selectedCard.image}></img> 
                    <p className={styles.displayText}>{selectedCard.description}</p>
                    <a href={selectedCard.gitHub} target='blank' className={styles.displayLink}>View the Code on GitHub</a>
                </div>
            }
            <h1 className={styles.ulHeader}>CLICK ON A PROJECT TO LEARN MORE</h1>
            <div className={styles.projects}>
                <ul className={styles.ul}>
                    {mappedProjectsList}
                </ul>
            </div>
        </>
    )
}

export default Projects