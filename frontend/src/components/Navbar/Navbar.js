  
import styles from './Navbar.module.css';
import React from 'react';
import Navlist from './Navlist';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from'react-router-dom';
import { useState } from 'react';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

function Navbar(){
    const [res,setRes]=useState(false);
    const clickHandler=()=>{
        setRes(!res);
    }
    return(
        <>
        <nav className={styles["nav-head"]}>
        <div className={styles.logo}>
        <div className={styles.git}>
        <a href='https://github.com/aanchalj08'>MY <FontAwesomeIcon icon={faGithub} size="lg"></FontAwesomeIcon> PROFILE</a>
        </div>
        <div className={styles.linkedin}>
        <a href='https://www.linkedin.com/in/aanchal-jain-a7885a213/'>LET'S CONNECT ON <FontAwesomeIcon icon={faLinkedin} size="lg"></FontAwesomeIcon></a>
        </div>
        </div>
        <div className={styles.hamburger}>
        {!res ? (
            <NavLink to='#' onClick={clickHandler}>
              <FontAwesomeIcon icon={faBars} size='lg' color='black' />
            </NavLink>
          ) : (
            <NavLink to='#' onClick={clickHandler}>
              <FontAwesomeIcon icon={faXmark} size='lg' color='black' />
            </NavLink>
          )}
        </div>
        <Navlist onToggle={res}></Navlist>
        </nav>
        </>
        
    )
}

export default Navbar;