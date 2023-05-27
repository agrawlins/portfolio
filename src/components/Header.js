import React, { useRef } from "react";


const Header = (props) => {
    const {homeRef, historyRef, projectsRef, contactRef} = props

    const scrollToSection = (ref) => {
        ref.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      };

    const styles = {
        header: "z-10 fixed h-12 w-full flex items-center justify-center text-white",
        text: "fixed top-0 h-12 w-full  flex items-center justify-center opacity-75 bg-slate-900 space-x-5",
        p: "text-xl hover:text-slate-400",
    }
    return (
        <div className={styles.header}>
            <div className={styles.text}>
                <p className={styles.p} onClick={() => scrollToSection(homeRef)}>Home</p>
                <p className={styles.p} onClick={() => scrollToSection(historyRef)}>History</p>
                <p className={styles.p} onClick={() => scrollToSection(projectsRef)}>Projects</p>
                <p className={styles.p} onClick={() => scrollToSection(contactRef)}>Contact</p>
            </div>
        </div>
    )
}

export default Header