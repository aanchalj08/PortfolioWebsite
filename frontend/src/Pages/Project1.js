import React from 'react';
import ProjectPage from '../components/Projects/ProjectPage';
import {portfolio} from '../data';

function Project1(){
    return(
        <>
        <ProjectPage {...portfolio}></ProjectPage>
        </>

    );
}

export default Project1;