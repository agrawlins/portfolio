import React from "react";
import EmailIcon from "../images/logos/email.jpg";
import FacebookPic from "../images/logos/facebook.png";
import InstagramPic from "../images/logos/instagram.jpg";
import LinkedInPic from "../images/logos/linkedin.png";
import GitHubPic from "../images/logos/github.webp";
import YouTubePic from "../images/logos/youtube.webp";

const Footer = () => {
  const styles = {
    footer:
      "fixed bottom-0 px-5  h-12 z-10 w-full flex justify-between items-center self-end opacity-75 bg-slate-900 text-white text-xs",
    button:
      "ml-1 h-6 w-6 bg-slate-200 shadow-lg shadow-black rounded-full hover:ring ring-offset-2 ring-slate-400",
    img: " p-1 h-full w-full object-scale-down rounded-full",
  };
  return (
    <div className={styles.footer}>
      <h1 className="w-1/2">Copyright © 2022 Adam G. Rawlins</h1>
      <div className="">
        <a href="https://www.facebook.com/adam.rawlins.75" target="_blank">
          <button className={styles.button} title="FACEBOOK">
            <img src={FacebookPic} className={styles.img}></img>
          </button>
        </a>
        <a
          href="https://www.linkedin.com/in/adam-rawlins-a61717b1"
          target="_blank"
        >
          <button className={styles.button} title="LINKEDIN">
            <img src={LinkedInPic} className={styles.img}></img>
          </button>
        </a>
        <a href="https://github.com/agrawlins?tab=repositories" target="_blank">
          <button className={styles.button} title="GITHUB">
            <img src={GitHubPic} className={styles.img}></img>
          </button>
        </a>
        <a
          href="https://www.youtube.com/channel/UCigQ5VjrovXyo1VazFc8jzg"
          target="_blank"
        >
          <button className={styles.button} title="YOUTUBE">
            <img src={YouTubePic} className={styles.img}></img>
          </button>
        </a>
      </div>
    </div>
  );
};

export default Footer;
