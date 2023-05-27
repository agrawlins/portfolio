import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import EmailIcon from "../images/logos/email.jpg";
import FacebookPic from "../images/logos/facebook.png";
import InstagramPic from "../images/logos/instagram.jpg";
import LinkedInPic from "../images/logos/linkedin.png";
import GitHubPic from "../images/logos/github.webp";
import YouTubePic from "../images/logos/youtube.webp";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  const styles = {
    content: "h-screen w-full text-slate-300 flex flex-col items-center ",
    header: "flex flex-col items-center",
    h1: "p-2 mb-5 w-screen text-3xl flex justify-center bg-gradient-to-t from-slate-900 to-slate-500",
    form: "m-5 w-full flex flex-col items-center justify-center text-black",
    names: "w-full flex rounded space-x-4",
    input: "my-2 w-full rounded",
    textarea: "m-2 w-full rounded",
    button:
      "m-2 h-12 w-12 bg-white shadow-lg shadow-black rounded-full hover:ring ring-offset-2 ring-slate-400",
    email:
      " h-12 w-full bg-white shadow-lg shadow-black rounded hover:ring ring-offset-2 ring-slate-400",
    links: "m-5 p-3 w-full flex justify-around",
    img: " p-1 h-full w-full object-scale-down rounded-full",
    oldie: "flex justify-center text-slate-400 hover:text-slate-200",
  };
  return (
    <div className={styles.content}>
      <h1 className={styles.h1}>CONTACT</h1>
      <div className="w-3/4 flex flex-col items-center justify-center">
        <form ref={form} onSubmit={sendEmail} className={styles.form}>
          <div className={styles.names}>
            <input
              className={styles.input}
              type="text"
              name="firstName"
              placeholder="First Name"
              required
            />
            <input
              className={styles.input}
              type="text"
              name="lastName"
              placeholder="Last Name"
              required
            />
          </div>
          <input
            className={styles.input}
            type="email"
            name="email"
            placeholder="Email"
            required
          />
          <input
            className={styles.input}
            type="text"
            name="subject"
            placeholder="Subject"
            required
          />
          <textarea
            className={styles.textarea}
            type="textarea"
            name="message"
            cols="30"
            rows="10"
            placeholder="Brief Message Here"
            required
          ></textarea>
          <button className={styles.email} title="EMAIL">
            <img src={EmailIcon} className={styles.img}></img>
          </button>
        </form>
        <div className={styles.links}>
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
          <a
            href="https://github.com/agrawlins?tab=repositories"
            target="_blank"
          >
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
    </div>
  );
};

export default Contact;
