import React from 'react';
import styles from './Navlist.module.css';
import { NavLink } from 'react-router-dom';



function Navlist(props){
    const state=props.onToggle;

    return (
        <ul className={`${styles["nav-list"]} ${state? styles.mobile : ""}`}>
        <li>
        <NavLink to="/" className={({isActive})=>(isActive ? styles.active : undefined)}>HOME</NavLink>
        </li>
        <li>
        <NavLink to="/about" className={({isActive})=>(isActive ? styles.active : undefined)}>ABOUT</NavLink>
        </li>
        <li>
        <NavLink to="/projects" className={({isActive})=>(isActive ? styles.active : undefined)}>PROJECTS</NavLink>
        </li>
        <li>
        <NavLink to="/contact" className={({isActive})=>(isActive ? styles.active : undefined)}>CONTACT</NavLink>
        </li>
        </ul>
    )
};

export default Navlist;