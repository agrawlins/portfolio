import React, { useRef } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import History from "./components/history/History";
import Projects from "./components/projects/Projects";
import HistoryProvider from "./context/HistoryContext";
import ProjectProvider from "./context/ProjectContext";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

const App = () => {
  const homeRef = useRef(null);
  const historyRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const styles = {
    app: "h-full bg-slate-800 overflow-auto",
    content: "z-10 flex flex-col items-center",
    airGap: "h-12",
  };

  return (
    <div className={styles.app}>
      <Header homeRef={homeRef} historyRef={historyRef} projectsRef={projectsRef} contactRef={contactRef} />
      <div className={styles.content}>
        <div className={styles.airGap} ref={homeRef}></div>
          <Home />
        <HistoryProvider>
        <div className={styles.airGap} ref={historyRef}></div>
            <History />
        </HistoryProvider>
        <div className={styles.airGap} ref={projectsRef}></div>
        <ProjectProvider>
            <Projects />
        </ProjectProvider>
        <div className={styles.airGap}  ref={contactRef}></div>
        <Contact />
        <div className={styles.airGap}></div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
