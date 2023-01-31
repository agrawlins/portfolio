import React, {useContext, useState} from 'react'
import downArrow from '../images/logos/downArrow.jpg'

export const HistoryContext = React.createContext()

const HistoryProvider = (props) => {
    const [selectedCard, setSelectedCard] = useState({
        title: null,
        description: null,
        gitHub: null,
        image: downArrow
    })

    const {} = props
    return (
        <HistoryContext.Provider
            value={{
                selectedCard,
                setSelectedCard
            }}
        >
            {props.children}
        </HistoryContext.Provider>
    )
}

export default HistoryProvider