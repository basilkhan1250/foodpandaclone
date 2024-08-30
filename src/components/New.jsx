import React from "react";
import chef from './assets/home-vendor-pk (1).png'

const New = () => {
    return (
        <div className="New">
            <div className="text">
                <h1>You prepare the food, we handle the rest</h1>
            </div>
            <div className="container">
                <img className="chef" src={chef}></img>
            </div>
            <div className="add">
                <h2>List your restaurant or shop on foodpanda</h2>
                <p className="add-text">Would you like millions of new customers to enjoy your amazing food and groceries? So would we!</p>
                <p className="add-text">It's simple: we list your menu and product lists online, help you process orders, pick them up, and deliver them to hungry pandas – in a heartbeat!</p>
                <p className="add-text">Interested? Let's start our partnership today!</p>
                <button className="add-btn">Get started</button>
            </div>
        </div>
    )
}


export default New;