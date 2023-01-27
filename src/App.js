import React, {useState, useContext} from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";
import History from "./components/history/History";
import Projects from "./components/projects/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import arrow from "./images/arrow.png"
import Header from "./components/Header";
import ProjectProvider from "./context/ProjectContext";
import HistoryProvider from "./context/HistoryContext";

const App = () => {

  const [sidebarActive, setSidebarActive] = useState(true)

  const toggleSidebar = () => {
    setSidebarActive(!sidebarActive)
  }
 
  const styles = {
    app: "h-screen flex flex-col font-serif bg-slate-700",
    sidebarButton: "flex self-center",
    arrowLeft: "-ml-12 max-h-24 rotate-180 opacity-95 invert",
    arrowRight: "-ml-12 max-h-24 opacity-95 invert"
  }

  return (
    <div className={styles.app}>
      <Router> 
        <Header/>
        {/* {sidebarActive ? 
          <>
            <Sidebar/>
          </>
          :
          <>
          </>
        } */}
        <Routes className="Routes"> 
            <Route path ="/" element={<Home />} /> 
            <Route path ="/history" element={
              <HistoryProvider>
                <History />
              </HistoryProvider>
            } />
            <Route path ="/projects" element={
              <ProjectProvider>
                <Projects />
              </ProjectProvider>
            } /> 
            <Route path ="/contact" element={<Contact />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
