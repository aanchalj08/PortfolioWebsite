import React from 'react';
import ProjectPage from '../components/Projects/ProjectPage';
import {conference} from '../data'

function Project2(){
    return(
        <>
        <ProjectPage {...conference}></ProjectPage>
        </>

    );
}

export default Project2;