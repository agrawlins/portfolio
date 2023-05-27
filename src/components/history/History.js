import React, { useState, useContext } from "react";
import HistoryCard from "./HistoryCard";
import historyData from "../../data/historyData";
import { HistoryContext } from "../../context/HistoryContext";

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
    historyContent: "w-full flex flex-col bg-slate-700",
    h1: "w-full text-3xl text-white flex justify-center bg-gradient-to-t from-slate-900 to-slate-500",
    history:
      "h-96 w-full p-3 flex justify-center  bg-slate-700 text-white overflow-x-auto",
    ulHeader: "flex justify-center text-white",
    ul: "flex flex-col",
    display:
      "m-5 p-5 h-1/2 w-full text-white flex flex-col self-center shadow-lg shadow-black rounded-xl",
    displayTitle: "flex self-center",
    displayImage:
      "m-5 h-48 w-48 flex self-center shadow-lg shadow-black rounded-xl",
    displayText: "h-12",
  };
  return (
    <div className={styles.historyContent}>
        <h1 className={styles.h1}>Work History</h1>
        <div className={styles.display}>
            <h1 className={styles.displayTitle}>{selectedCard.title}</h1>
            <img className={styles.displayImage} src={selectedCard.image}></img> 
            <p className={styles.displayText}>{selectedCard.description}</p>
        </div>
        <h1 className={styles.ulHeader}>SELECT A POSITION TO LEARN MORE</h1>
        <div className={styles.history}>
            <ul className={styles.ul}>
                {mappedHistoryList}
            </ul>
        </div>
    </div>
)
};

export default History;
