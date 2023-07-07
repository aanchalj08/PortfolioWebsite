import React from 'react';
import styles from './Card.module.css';

function Card(props){
    return (
       <div className={styles.container}>
       <h2>{props.title}</h2>
       <p>{props.year}</p>
       <p>{props.place}</p>
       <p>{props.result}</p>
       </div>
    )
}

export default Card;