import React, {useState, useContext} from "react";
import {ProjectContext} from '../../context/ProjectContext'

const ProjectCard = (props) => {
  const {id, title, image, gitHub, description, handleClick} = props
  const [editToggle, setEditToggle] = useState(false)
  const [projectCard, setProjectCard] = useState({
      title: title,
      image: image,
      gitHub: gitHub,
      description: description,
  })

  const {setSelectedCard} = useContext(ProjectContext)

  const styles = {
    card: "m-5 h-48 w-48 flex justify-center truncate shadow-lg shadow-black rounded-xl hover:ring ring-offset-2 ring-slate-400",
    button: "",
    img: "h-full w-full rounded"
  }

  return(
    <>
        <div className={styles.card} >
            <button className={styles.button} onClick={() => setSelectedCard(projectCard)}>
                <img src={image} className={styles.img}></img> 
            </button>
        </div>    
    </>
  )
}

export default ProjectCard