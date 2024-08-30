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
                    <h2 className="add-text">List your restaurant or shop on foodpanda</h2>
                    <p className="ad-text">Would you like millions of new customers to enjoy your amazing food and groceries? So would we!</p>
                </div>
        </div>
    )
}


export default New;