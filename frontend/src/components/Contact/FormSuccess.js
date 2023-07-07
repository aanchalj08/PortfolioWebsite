import React from 'react';
import styles from './FormSuccess.module.css';
import { NavLink } from 'react-router-dom';

function FormSuccess(){
    return(
        <div className={styles.container}>
        <h1>Thank You!</h1>
        <p>Your form submission has been received</p>
        <NavLink to="/"><button>Go Back</button></NavLink>
        
        </div>
    )
}

export default FormSuccess;