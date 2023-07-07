import React from 'react';
import ProjectPage from '../components/Projects/ProjectPage';
import {food} from '../data';

function Project3(){
    return(
        <>
        <ProjectPage {...food}></ProjectPage>
        </>

    );
}

export default Project3;