import React, {useState, useContext} from "react";
import {ProjectContext} from '../../context/ProjectContext'

const ProjectCard = (props) => {
  const {id, title, image, gitHub, liveLink, description, handleClick} = props
  const [editToggle, setEditToggle] = useState(false)
  const [projectCard, setProjectCard] = useState({
      title: title,
      image: image,
      gitHub: gitHub,
      liveLink: liveLink,
      description: description,
  })

  const {setSelectedCard} = useContext(ProjectContext)

  const styles = {
    card: "m-5 h-72 w-64 flex flex-col items-center justify-center truncate shadow-lg shadow-black rounded-xl hover:ring ring-offset-2 ring-slate-400",
    button: "",
    github: "hover:text-slate-400",
    img: "h-48 w-64 rounded"
  }

  return(
    <>
        <div className={styles.card} >
          <a href={liveLink} target="blank">
            <button className={styles.button} onClick={() => setSelectedCard(projectCard)}>
                <img src={image} className={styles.img}></img> 
            </button>
          </a>
            {title}
          <a href={gitHub} target="blank" className={styles.github}>
          View the code on Github
          </a>
        </div>    
    </>
  )
}

export default ProjectCard