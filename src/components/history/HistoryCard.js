import React, {useState, useContext} from "react";
import {HistoryContext} from '../../context/HistoryContext'

const HistoryCard = (props) => {
  const {id, title, image, gitHub, description, handleClick} = props
  const [editToggle, setEditToggle] = useState(false)
  const [historyCard, setHistoryCard] = useState({
      title: title,
      image: image,
      gitHub: gitHub,
      description: description,
  })

  const {setSelectedCard} = useContext(HistoryContext)

  const styles = {
    card: "p-3 h-72 w-64 flex flex-col items-center justify-around truncate shadow-lg shadow-black rounded-xl hover:ring ring-offset-2 ring-slate-400",
    button: "",
    img: "h-48 w-64 rounded"
  }

  return(
    <>
        <div className={styles.card} >
            <button className={styles.button} onClick={() => setSelectedCard(historyCard)}>
                <img src={image} className={styles.img}></img> 
            </button>
            {title}
        </div>    
    </>
  )
}

export default HistoryCard