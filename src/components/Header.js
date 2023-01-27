import React from "react";
import {Link} from 'react-router-dom'; // p5 import Link
import HeaderMugshot from '../images/mugshots/Home Page Thumbnail.jpg'


const Header = () => {

    const styles = {
        header: "h-24 w-full px-5 flex items-center justify-start opacity-75 bg-slate-900 text-white",
        link: "mr-5 p-1 text-2xl text-slate-400 hover:text-slate-200",
        img: "h-12 hover:ring ring-offset-2 ring-slate-400 rounded-full"
    }
    return (
        <div className={styles.header}>
            <Link to="/" className={styles.link} title="HOME"> 
                <img className={styles.img} src={HeaderMugshot}/>
            </Link> 
            <Link to="/history" className={styles.link}> 
                <p>History</p>
            </Link>
            <Link to="/projects" className={styles.link}> 
                <p>Projects</p>
            </Link>
            <Link to="/contact" className={styles.link}> 
                <p>Contact</p>
            </Link>
        </div>
    )
}

export default Header