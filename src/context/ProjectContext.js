import React, {useContext, useState} from 'react'
import downArrow from '../images/logos/downArrow.jpg'

export const ProjectContext = React.createContext()

const ProjectProvider = (props) => {
    const [selectedCard, setSelectedCard] = useState({
        title: null,
        description: null,
        gitHub: null,
        image: downArrow
    })

    const {} = props
    return (
        <ProjectContext.Provider
            value={{
                selectedCard,
                setSelectedCard
            }}
        >
            {props.children}
        </ProjectContext.Provider>
    )
}

export default ProjectProvider