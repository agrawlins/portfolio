import React, { useState, useContext, forwardRef } from "react";
import ProjectCard from "./ProjectCard";
import { ProjectContext } from "../../context/ProjectContext";
import projectsData from "../../data/projectsData";

const Projects = (props, ref) => {
    const [projectsList, setProjectsList] = useState([...projectsData])

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
        projectsContent: "w-full flex flex-col items-center justify-center bg-slate-700 ",
        h1: " w-full text-3xl text-white flex justify-center bg-gradient-to-t from-slate-900 to-slate-500",
        projects: "h-screen w-full px-3 justify-center bg-slate-700 text-white overflow-x-auto",
        ulHeader: "flex justify-center text-white",
        ul: "flex flex-col items-center justify-center",
        display: "m-5 p-5 h-1/2 w-1/3 text-white flex flex-col self-center shadow-lg shadow-black rounded-xl",
        displayTitle: "flex self-center",
        displayImage: "m-5 h-72 w-72 flex self-center shadow-lg shadow-black rounded-xl",
        displayText: "h-12",
        displayLink: "flex self-center text-slate-400 hover:text-slate-200"
    }
    return (
        <div className={styles.projectsContent} ref={ref}>
            <h1 className={styles.h1}>Project Portfolio</h1>
            <h1 className={styles.ulHeader}>SELECT A PROJECT TO LEARN MORE</h1>
            <div className={styles.projects}>
                <ul className={styles.ul}>
                    {mappedProjectsList}
                </ul>
            </div>
        </div>
    )
}

export default forwardRef(Projects)