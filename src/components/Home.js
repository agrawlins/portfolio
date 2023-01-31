import React from "react";
import mugshot from '../images/mugshots/Home Page Mugshot.jpg'

const Home = () => {
    const styles = {
        home: "h-screen w-full flex flex-col items-center opacity-75 bg-slate-700 text-white",
        header: "mb-5 w-full text-3xl flex justify-center bg-gradient-to-t from-slate-900 to-slate-500",
        content: "p-0 w-5/6 flex justify-center",
        img: "m-5 h-full w-1/2 flex self-center shadow-lg shadow-black rounded-xl",
        text: "p-5 h-full w-1/2 object-scale-down",
        h1: "pb-3 font-bold text-6xl",
        pHead: "py-3 text-lg font-bold",
        p: "py-3",
        list: "w-1/2 flex justify-around",
        link: "text-slate-400 hover:text-slate-200"
    }
    return (
        <div className={styles.home}>
            <h1 className={styles.header}>HOME</h1>
            <div className={styles.content}>
                <img className={styles.img} src={mugshot}/>
                <div className={styles.text}>
                    <h1 className={styles.h1}>Adam Rawlins</h1>
                    <p className={styles.p}>
                        Adam Rawlins is a certified Full-Stack Web Developer. He completed his training with V-School. He has been working in the IT field for six years now, and programming for two. He offers a wealth of general IT knowledge and programming talent.</p>
                    <p className={styles.pHead}>
                        Adam is skilled in the following scripting languages:
                    </p>
                    <div className={styles.list}>
                        <p> HTML5<br/> JavaScript<br/> CSS<br/> ES6<br/> React<br/> Node.js<br/> Express<br/></p>    
                        <p>AJAX/HTTP<br/> Mongoose<br/> MongoDB<br/> JSON<br/> Git<br/> Firebase<br/> TailwindCSS</p>    
                    </div> 
                    <p className={styles.pHead}>
                        He is also proficient in the following skillsets: <br/> 
                    </p>
                    <div className={styles.list}>
                        <p>Windows Administration<br/> Linux Administration<br/> TCP/IP<br/> Satellite Communications</p>
                        <p>Active Directory<br/>Network Configuration<br/> Network Security <br/>Troubleshooting<br/></p>
                    </div>
                    <br/>
                    <p>
                        If you'd like to get in touch, <a className={styles.link} href="mailto:agrawlins@gmail.com">Click Here</a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Home