import React from "react";
import classes from "./Title.module.css"

export const Title = (title) => {
    let titleArr = title.title.split(' ');

    console.log(title.title === 'Vadym Lohinov');

    return (
        <>  
            {(title.title !== 'Vadym Lohinov') ?
                <div className={classes.title_container}>
                    
                    <div className={classes.title_small}><span>SELECTED WORKS I HAVE DONE SINCE 2018</span></div>
                    
                    <div className={classes.title_big_container}>
                        {titleArr.map((title) => (
                            <div key={title} className={classes.title_big_container_block}><span>{title}</span></div>
                        ))}
                    </div>
                    
                    <div className={classes.title_small}><span>HOLD AND DRAG TO DISCOVER</span></div>
                    
                </div>
            :
                <div className={classes.title_home_container}>{titleArr.map((title) => (
                    <div key={title}><span>{title}</span></div>
                ))}</div>
            }
        </>
    )
}

export default Title;