import React, {useContext, useState} from 'react'
export const HistoryContext = React.createContext()

const HistoryProvider = (props) => {
    const [selectedCard, setSelectedCard] = useState({
        title: null,
        description: null,
        gitHub: null,
        image: null
    })

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