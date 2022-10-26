import React from "react"

import classes from "./ProjectList.module.css"

const hrefImage = "https://i.pinimg.com/736x/70/5b/bb/705bbb820c7332b04d619f7536645753.jpg"

export const ProjectList = () => {
    return (
        <div className={classes.projectList}>
            <div className={classes.projectList_block}>
                <div className={classes.projectList_title}>
                    <span>2021</span>
                </div>
                
                <div className={classes.projectList_img}>
                    <img src={hrefImage} width="130" height="130" alt=""></img>
                </div>
                
                <div className={classes.projectList_img}>
                    <img src={hrefImage} width="130" height="130" alt=""></img>
                </div>
            </div>
            
            <div className={classes.projectList_block}>
                <div className={classes.projectList_title}>
                    <span>2022</span>
                </div>
                
                <div className={classes.projectList_img}>
                    <img src={hrefImage} width="130" height="130" alt=""></img>
                </div>
                
                <div className={classes.projectList_img}>
                    <img src={hrefImage} width="130" height="130" alt=""></img>
                </div>
                
                <div className={classes.projectList_img}>
                    <img src={hrefImage} width="130" height="130" alt=""></img>
                </div>
                
                <div className={classes.projectList_img}>
                    <img src={hrefImage} width="130" height="130" alt=""></img>
                </div>
                
                <div className={classes.projectList_img}>
                    <img src={hrefImage} width="130" height="130" alt=""></img>
                </div>
                
                <div className={classes.projectList_img}>
                    <img src={hrefImage} width="130" height="130" alt=""></img>
                </div>
            </div>
        </div>
    )
}

export default ProjectList;