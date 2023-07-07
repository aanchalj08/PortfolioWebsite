import React from 'react';
import styles from './ProjectCard.module.css';
import { NavLink } from 'react-router-dom';


function ProjectCard(props){
    return(
        <div className={styles.head}>
        <img src={props.image} alt=""></img>
        <div className={styles.description}>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        <NavLink to={props.url}><button>DETAILS</button></NavLink>
        </div>
        </div>

    );
}

export default ProjectCard;