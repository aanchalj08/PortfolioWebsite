import React from 'react';
import bg from '../../assets/texture.jpg';
import styles from './Intro.module.css';
import { NavLink } from 'react-router-dom';

function Intro(){
    return(
        
        <div className={styles.head}>
        <img src={bg} alt="background" className={styles.pic}></img>
        <p className={styles.name}>HEY! I AM AANCHAL JAIN</p>
        <p className={styles.tagline}>Passionate full stack developer and aspiring software engineer, crafting innovative solutions and shaping the digital landscape with creativity and code.</p>
        <NavLink to="about">KNOW ME!</NavLink>
        </div>
        
    )
}

export default Intro;

