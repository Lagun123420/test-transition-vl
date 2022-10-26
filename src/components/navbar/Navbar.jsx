import React, { useState } from "react";
import { Link } from "react-router-dom";

import classes from "./Navbar.module.css"

export const Navbar = () => {
    const [nameLink, setNameLink] = useState('')

    

    function NameLinkActive (e) {
        document.querySelector("#navbar_title").classList.add(classes.active_title);
        document.querySelector("#navbar_links").classList.add(classes.active_links);
        document.querySelector("#text_title_first").classList.add(classes.active_text_title);
        document.querySelector("#text_title_second").classList.add(classes.active_text_title);
        document.querySelector("#text_title_last").classList.add(classes.active_text_title);
        document.querySelectorAll(`.${classes.navbar_link}`).forEach(element=>{
            element.classList.add(classes.active_link)
        });

        return (setNameLink(e.target.textContent))
    }

    function NameLinkUnactive (e) {
        document.querySelector("#navbar_title").classList.remove(classes.active_title);
        document.querySelector("#navbar_links").classList.remove(classes.active_links);
        document.querySelector("#text_title_first").classList.remove(classes.active_text_title);
        document.querySelector("#text_title_second").classList.remove(classes.active_text_title);
        document.querySelector("#text_title_last").classList.remove(classes.active_text_title);
        document.querySelectorAll(`.${classes.navbar_link}`).forEach(element=> {element.classList.remove(classes.active_link)});
        e.stopPropagation();
        return (setNameLink(''))
    }


    return (
        <>
            <div className={classes.navbar}>
                <div id='navbar_title' className={classes.navbar_title}>
                    <div id='text_title_first' className={classes.navbar_text_title_first}>{nameLink[0]}</div>
                    <div id='text_title_second' className={classes.navbar_text_title_second}>{nameLink.slice(1, -1)}</div>
                    <div id='text_title_last' className={classes.navbar_text_title_last}>{nameLink[nameLink.length-1]}</div>
                </div>
                {/* <div id='text_title' className={classes.text_title}>
                    <div id='text_title_first' className={classes.navbar_text_title_first}>{nameLink[0]}</div>
                    <div id='text_title_second' className={classes.navbar_text_title_second}>{nameLink.slice(1, -1)}</div>
                    <div id='text_title_last' className={classes.navbar_text_title_last}>{nameLink[nameLink.length-1]}</div>
                </div> */}
                
                <div id='navbar_links' className={classes.navbar_links}>
                    <div>
                        <Link
                            className={classes.navbar_link} 
                            to='/works' 
                            onMouseOver={e => NameLinkActive(e)}
                            onMouseOut={e=> NameLinkUnactive()}
                        >Works</Link>
                    </div>
                    
                    <div>
                        <Link 
                            className={classes.navbar_link}
                            to='/' 
                            onMouseOver={e => NameLinkActive(e)}
                            onMouseOut={e=> NameLinkUnactive()}
                        >About</Link>
                    </div>
                    
                    <div>
                        <Link 
                            className={classes.navbar_link}
                            to='/'
                            onMouseOver={e => NameLinkActive(e)}
                            onMouseOut={e=> NameLinkUnactive()}
                        >Contact</Link>
                    </div>
                    
                    <div className={classes.navbar_link}>
                        <span>©2022</span>
                    </div>
                </div>
            </div>
        </>
    )
}