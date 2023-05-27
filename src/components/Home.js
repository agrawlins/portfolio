import React from "react";

const Home = () => {
  const styles = {
    home: "h-full w-full flex flex-col items-center bg-slate-700 text-white",
    header:
      "mb-5 w-full text-3xl flex justify-center bg-gradient-to-t from-slate-900 to-slate-500",
    content: "w-full flex justify-center text-white",
    text: "h-full w-full flex flex-col items-center justify-center object-scale-down",
    subText: "p-2 px-16 w-full flex flex-col items-center bg-slate-900 opacity-75",
    h1: "pb-3 font-bold text-5xl",
    h2: "pb-3 font-bold text-4xl",
    pHead: "py-3 text-lg font-bold",
    p: "py-3",
    list: "w-1/2 flex justify-around",
    link: "text-slate-400 hover:text-slate-200",
    img: "h-full w-screen",
  };
  return (
    <div id="home" className={styles.content}>
      <div className={styles.text}>
        <h2 className={styles.h2}>Adam Rawlins</h2>
        <h1 className={styles.h1}>
          BRIDGING THE GAP BETWEEN<br/>DREAMS AND REALITY
        </h1>
        <div className={styles.subText}>
          <p className={styles.pHead}>
            Adam is skilled in the following scripting languages:
          </p>
          <div className={styles.list}>
            <p>
              HTML5
              <br /> JavaScript
              <br /> CSS
              <br /> ES6
              <br /> React
              <br /> Node.js
              <br /> Express
              <br />
            </p>
            <p>
              AJAX/HTTP
              <br /> Mongoose
              <br /> MongoDB
              <br /> JSON
              <br /> Git
              <br /> Firebase
              <br /> TailwindCSS
            </p>
          </div>
          <p className={styles.pHead}>
            He is also proficient in the following skillsets: <br />
          </p>
          <div className={styles.list}>
            <p>
              Windows Administration
              <br /> Linux Administration
              <br /> TCP/IP
              <br /> Satellite Communications
            </p>
            <p>
              Active Directory
              <br />
              Network Configuration
              <br /> Network Security <br />
              Troubleshooting
              <br />
            </p>
          </div>
        </div>
        <br />
      </div>
    </div>
  );
};

export default Home;
