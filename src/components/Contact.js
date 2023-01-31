import React from "react"
import EmailIcon from '../images/logos/email.jpg'
import FacebookPic from '../images/logos/facebook.png'
import InstagramPic from '../images/logos/instagram.jpg'
import LinkedInPic from '../images/logos/linkedin.png'
import GitHubPic from '../images/logos/github.webp'
import YouTubePic from '../images/logos/youtube.webp'
import mugshot from '../images/mugshots/Home Page Mugshot.jpg'

const Contact = () => {
    const styles = {
        content: "h-full text-slate-300 items-center justify-center",
        header: "flex flex-col items-center",
        h1: "p-2 mb-5 w-full text-3xl flex justify-center bg-gradient-to-t from-slate-900 to-slate-500",
        h2: "flex justify-center text-6xl",
        mugshot: " my-5 h-1/3 w-1/3 flex self-center shadow-lg shadow-black object-scale-down rounded-3xl opacity-75",
        button: "m-5 h-24 w-24 bg-slate-200 shadow-lg shadow-black rounded-full hover:ring ring-offset-2 ring-slate-400",
        links: "p-3 flex justify-center",
        img: " p-1 h-full w-full object-scale-down rounded-full",
        oldie: "flex justify-center text-slate-400 hover:text-slate-200"
    }
    return(
        <div className={styles.content}>
            <header className={styles.header}>
                <h1 className={styles.h1}>CONTACT</h1>
                <h2 className={styles.h2}>GET IN TOUCH</h2>
                <img className={styles.mugshot} src={mugshot}/>
            </header>
            <div className={styles.links}>
                <a href="mailto:agrawlins@gmail.com" className="Email">
                    <button className={styles.button} title="EMAIL">
                        <img src={EmailIcon} className={styles.img}></img>
                        <p>EMAIL</p>
                    </button>
                </a>
                    <a href="https://www.facebook.com/adam.rawlins.75" target="_blank">
                        <button className={styles.button} title="FACEBOOK">
                            <img src={FacebookPic} className={styles.img}></img>
                            <p>FACEBOOK</p>
                        </button>
                    </a>
                    <a href="https://www.instagram.com/adam.rawlins.75/" target="_blank">
                        <button className={styles.button} title="INSTAGRAM">
                            <img src={InstagramPic} className={styles.img} target="_blank"></img>
                            <p>INSTAGRAM</p>
                        </button>
                    </a>
                    <a href="https://www.linkedin.com/in/adam-rawlins-a61717b1" target="_blank">
                        <button className={styles.button} title="LINKEDIN">
                            <img src={LinkedInPic} className ={styles.img}></img>
                            <p>LINKEDIN</p>
                        </button>
                    </a>
                    <a href="https://github.com/agrawlins?tab=repositories" target="_blank">
                        <button className={styles.button} title="GITHUB">
                            <img src={GitHubPic} className={styles.img}></img>
                            <p>GITHUB</p>
                        </button>
                    </a>
                    <a href="https://www.youtube.com/channel/UCigQ5VjrovXyo1VazFc8jzg" target="_blank">
                        <button className={styles.button} title="YOUTUBE">
                            <img src={YouTubePic} className={styles.img}></img>
                            <p>YOUTUBE</p>
                        </button>
                    </a>
            </div>
            {/* <h3><a href="https://agrawlins.github.io" target='blank' className={styles.oldie}>CHECK OUT THE ORIGINAL PAGE</a></h3> */}
        </div>
    )
}

export default Contact