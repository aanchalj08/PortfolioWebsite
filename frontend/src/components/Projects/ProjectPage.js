import React from "react";
import styles from "./ProjectPage.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Footer from "../Footer/Footer";
import { NavLink } from "react-router-dom";



function ProjectPage({image,title,tagline,url1,url2,overview,tools}) {
  return (
    <>
    <div className={styles.container}>
      <div className={styles.intro}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.tagline}>
          {tagline}
        </p>
        <p className={styles.tagline2}>
          This project is designed and developed by Aanchal Jain.
        </p>
        <img src={image} alt="project-img"></img>
        <div className={styles.links}>
          <a href={url1}>
            <FontAwesomeIcon icon={faLink}></FontAwesomeIcon> Live Link
          </a>
          <a href={url2}>
            <FontAwesomeIcon icon={faLink}></FontAwesomeIcon> Link to{" "}
            <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>{" "}
          </a>
        </div>
      </div>
      <div className={styles.sec2}>
        <h1 className={styles.heading}>Project Overview</h1>
        <p>
         {overview}
        </p>
        
      </div>
      <div className={styles.sec3}>
      <h1 className={styles.heading}>Tools Used</h1>
      {tools.map((i) => (
        <button>{i.name}</button>
      ))}
      </div>
      <div className={styles.sec4}>
      <NavLink to="/projects"><button>GO BACK</button></NavLink>
      </div>
      </div>
      <Footer></Footer>
      </>
    
  );
}

export default ProjectPage;
