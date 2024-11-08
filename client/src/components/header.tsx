import App from "../App";
import React from "react";

import Logo from "../assets/images/Logo_RT.png";
import Home from "../assets/images/home.png";
import "./header.css";






function Header() {

    return (

        <section className="header">
            <img src={Logo} id="logo" alt="Logo_Rotten_Tomatoes" />
            <div id="navbar">
                <button type="button"><img src={Home} id="home" alt="Home_Icon" /></button>
                <button type="button" id="Log_In">Log In</button>
            </div>


        </section>

    )

}


export default Header;