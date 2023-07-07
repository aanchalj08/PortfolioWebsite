import React from 'react';
import Me from '../../assets/profile.png';
import styles from './Profile.module.css';
import Coding from '../../assets/Coding.png';
import HTML from '../../assets/HTML.png';
import CSS from '../../assets/CSS.png';
import Javascript from '../../assets/Javascript.png';
import node from '../../assets/node.png';
import database from '../../assets/database.png'
import CP from '../../assets/CP.png';
import ap from '../../assets/ap.png';
import dsa from '../../assets/dsa.png';
import mongo from '../../assets/mongo.png';
import OS from '../../assets/OS.png';
import reactii from '../../assets/reactii.png';
import bootstrap from '../../assets/bootstrap.png';
import Card from './Card';
import Footer from '../Footer/Footer';

function Profile(){
    return (
        <div className={styles.container}>
        <div className={styles.sec1}>
        <img src={Me} alt="my-pic" className={styles.myprof}></img>
        <div>
        <h1>Hello everyone!</h1>
        <p>I am a software engineering enthusiast who is actively pursuing expertise in the MERN stack. Additionally, I am dedicated to sharpening my skills in DSA and problem-solving techniques, which are crucial aspects of my professional journey.</p>
        <p>I am a pre-final year undergrad student at LNMIIT, pursuing my B.Tech degree in Communication and Computer Engineering (CCE) with an overall CGPA of 9.54.</p>
        <p>I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.</p>
        </div>
        </div>
        <div className={styles.sec2}>
        <h1>My Current Skills</h1>
        <div className={styles.skills}> 
        <button>C++ <img src={Coding} alt="c++"></img></button>
        <button>HTML<img src={HTML} alt="html"></img></button>
        <button>CSS <img src={CSS} alt="css"></img></button>
        <button>JavaScript <img src={Javascript} alt="javascript"></img></button>
        <button>React <img src={reactii} alt="react"></img></button>
        <button>Node<img src={node} alt="node"></img></button>
        <button>MongoDB<img src={mongo} alt="mongo"></img></button>
        <button>DSA<img src={dsa} alt="dsa"></img></button>
        <button>CP<img src={CP} alt="cp"></img></button>
        <button>OS<img src={OS} alt="os"></img></button>
        <button>DBMS<img src={database} alt="database"></img></button>
        <button>AP<img src={ap} alt="ap"></img></button>
        <button>Bootstrap<img src={bootstrap} alt="bootstrap"></img></button>
        </div>
        </div>
        <div className={styles.sec3}>
        <h1>Educational Qualifications</h1>
        <div className={styles.edu}>
        <Card title="B.Tech CCE" year="2021-2025" place="The LNMIIT,Jaipur" result="CGPA: 9.54"></Card>
        <Card title="12th Class" year="2020-2021" place="MIS,Kishangarh" result="Percentage: 89.2%"></Card>
        <Card title="10th Class" year="2018-2019" place="MSSPS,Kishangarh" result="Percentage: 96.4%"></Card>
        </div>
        </div>
        <Footer></Footer>
        </div>
        
    )
}

export default Profile;