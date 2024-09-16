import React from "react";
import cooperate from "./assets/home-corporate-pk.png"

const OfficeLunch = () => {

    return (
        <div className="officeLunch">
            <div className="office-heading">
                <h1>Take your office out to lunch</h1>
            </div>
            <div className="container">
                <img src={cooperate} />
            </div>
            <div className="bussiness-card">
                <h2>foodpanda for business</h2>
                <p className="office-text">Order lunch or fuel for work-from-home, late nights in the office, corporate events, client meetings, and much more.</p>
                <button className="btn">Get Started</button>
            </div>
        </div>
    )

}

export default OfficeLunch;
