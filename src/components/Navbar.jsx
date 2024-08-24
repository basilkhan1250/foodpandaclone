import React from "react";
import logo from './assets/foodpandalogo.png'
import "./design.css"

const Navbar = () => {

    return (
        <div className="head">
            <div className="start">
                <img className="logo" src={logo} />
                <h2>foodpanda</h2>
            </div>
            <div className="end">
                <button className="btn">Log in</button>
                <button className="signbtn">Sign up</button>
            </div>
        </div>
    )

}

export default Navbar