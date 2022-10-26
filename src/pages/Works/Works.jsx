import React from "react";
import Header from "../../components/header/Header";
import { Navbar } from "../../components/navbar/Navbar";
import ProjectList from "../../components/projectList/ProjectList";
import Title from "../../components/title/Title";

export const Works = () => {
    
    return (
        <>
            <div>
                <Header/>
            </div>
            
            <div>
                <Title title='My Works'/>
            </div>

            <div>
                <Navbar/>
            </div>

            <div>
                <ProjectList/>
            </div>
        </>
    )
}

export default Works;