import React, { useState } from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import { Navbar } from "../../components/navbar/Navbar";
import Title from "../../components/title/Title";

export const Home = () => {
    const [title, setTitle] = useState('Vadym Lohinov')

    return (
        <>  
            <div>
                <Header/>
            </div>
            
            <div>
                <Title title={title} setTitle={setTitle}/>
            </div>
            
            <div>
                <Navbar/>
            </div>
            
            <div>
                <Footer/>
            </div>
        </>
    )
}

export default Home;

