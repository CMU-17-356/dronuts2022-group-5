import * as React from "react";
import "../styles/ShoppingCart.css";
import {Link} from "react-router-dom";

export const ShoppingCart: React.FC = () => {
    return (
    <>
        <div className = "Shopping-Cart">
            <div className = "title-SC">
                <div className = "location-Title">
                    <h1 className = "personal-Cart">Personal Cart</h1>
                    <h1 className = "pc-Location">Carnegie Mellon University</h1>
                </div>
                <button className = "button-Title">
                    X Close
                </button>
            </div>
            <div className = "total-SC">
                <img className = "guarantee-Image" src={"image/Dronut.png"}></img>
                <div className = "guarantee-Total">
                    <h1 className = "guarantee-Title">Dronuts</h1>
                    <h1 className = "guarantee-Time">By 1:21 pm</h1>
                    <h1 className = "guarantee-Desc">100% satisfaction guarantee</h1>
                </div>
                <h1 className = "price-Total">$5.97</h1>
            </div>
            <div className = "list-SC">
                <div className = "list-item-SC">
                    <img className = "list-img" src="https://cmu-17-356.github.io/Dronuts/assets/donut_flavors/apple_krumb.jpg"></img>
                    <div>
                        <h1 className="list-name">Apple Krumble</h1>
                        <h1 className="list-calories">300 Calories</h1>
                        <button className = "list-button">Remove</button>
                    </div>
                    <input className = "list-item-text" type="text" placeholder="3"></input>
                    <h1 className = "sc-price">$5.97</h1>
                </div>


            </div>
            <div className = "confirmation-SC">
                <button className = "confirmation-Button">
                    <Link className = "confirmation-Link" to="/confirm">Checkout $5.97</Link>
                </button>
            </div>
        </div>
    </>
    );
}
