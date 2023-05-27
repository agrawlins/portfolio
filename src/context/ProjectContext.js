import React, {useContext, useState} from 'react'

export const ProjectContext = React.createContext()

const ProjectProvider = (props) => {
    const [selectedCard, setSelectedCard] = useState({
        title: null,
        description: null,
        gitHub: null,
        image: null
    })

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