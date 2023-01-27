import React, { useState, useContext } from "react";
import HistoryCard from "./HistoryCard";
import { HistoryContext } from "../../context/HistoryContext";
import historyData from "../../data/historyData";

const History = (props) => {
    const [historyList, setHistoryList] = useState([...historyData])
    const {selectedCard} = useContext(HistoryContext)

    const mappedHistoryList = historyList.map((project) => {
        return(
            <div>
                <HistoryCard {...project} 
                    key = {project.id}
                    id = {project.id}
                    data = {historyList}
                />
            </div>
            )
        })

        const styles = {
            h1: " w-full text-3xl text-white flex justify-center bg-gradient-to-t from-slate-900 to-slate-500",
            history: "h-screen w-full px-3 flex justify-center opacity-75 bg-slate-700 text-white overflow-x-auto",
            ulHeader: "flex justify-center text-white",
            ul: "flex",
            display: "m-5 p-5 h-1/2 w-1/3 text-white flex flex-col self-center shadow-lg shadow-black rounded-xl",
            displayTitle: "flex self-center",
            displayImage: "m-5 h-72 w-72 flex self-center shadow-lg shadow-black rounded-xl",
            displayText: "h-12",
        }
        return (
            <>
                <h1 className={styles.h1}>Work History</h1>
                { selectedCard === null ?
                    <></>
                :
                    <div className={styles.display}>
                        <h1 className={styles.displayTitle}>{selectedCard.title}</h1>
                        <img className={styles.displayImage} src={selectedCard.image}></img> 
                        <p className={styles.displayText}>{selectedCard.description}</p>
                    </div>
                }
                <h1 className={styles.ulHeader}>CLICK ON A POSITION TO LEARN MORE</h1>
                <div className={styles.history}>
                    <ul className={styles.ul}>
                        {mappedHistoryList}
                    </ul>
                </div>
            </>
        )
}

export default History