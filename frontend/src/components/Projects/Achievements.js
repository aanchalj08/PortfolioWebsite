import React from "react";
import styles from './Achievements.module.css';

function Achievements(){
    return(
        <div className={styles.achieve} >
        <h1>Achievements</h1>
        <div className={styles.list}>
        <p>1. Merit Scholarship holder from last three semesters.</p>
        <p>2. Solved more than 650 questions on leetcode,codeforces and other platforms.</p>
        <p>3. Web Developer at IEEE Student branch.</p>
        </div>

        </div>
    )
}

export default Achievements;