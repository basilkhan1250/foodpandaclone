import React from "react";
import logo from './assets/foodpandalogo.png';
import lang from './assets/multilingual.png';
import "./design.css";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-left">
                <img className="navbar-logo" src={logo} alt="Foodpanda Logo" />
                <h2 className="navbar-brand">foodpanda</h2>
            </div>
            <div className="navbar-right">
                <button className="navbar-btn">Log in</button>
                <button className="navbar-signbtn">Sign up</button>
                <div className="navbar-right-lang">
                    <img className="navbar-lang" src={lang} alt="Language Selector" />
                    <p className="lang">EN</p>
                    <select className="select ">
                        <option ></option>
                        <option className="english" value="English">English</option>
                    </select>
                    
                </div>

            </div>
        </div>
    );
};

export default Navbar;
