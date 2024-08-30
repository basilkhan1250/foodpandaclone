import React from "react";
import hero from "./assets/refresh-hero-home-pk.png";

const Web = () => {
    return (
        <div className="web">
            <div className="hero">
                <div className="input">
                    <h1 className="heading">It's the food and groceries you love, delivered</h1>
                    <div className="inputGroup">
                        <input className="inp" placeholder="Your street and street number" />
                        <button className="btn">Find food</button>
                    </div>
                </div>
                <div className="image">
                    <img src={hero} alt="Hero" />
                </div>
            </div>
        </div>
    );
};

export default Web;
