import * as React from "react";
import {NavBar} from "../components/NavBar";
import {ListItem} from "../components/ListItem";
import {ListInfo} from "../components/ListInfo";
import "../styles/Confirmation.css";

export const Confirmation: React.FC = () => {
    return (<>
        <NavBar/>
        <div className="main-Confirmation-Div">

            <div className="confirmation-Div">
                <h1 className="div-Text">Confirmation</h1>
                <div className="list-Items">
                    <ListItem key = {1} size = {3} name = {"Blueberry Donuts"} price = {3.21}/>
                    <ListItem key = {1} size = {3} name = {"Blueberry Donuts"} price = {3.21}/>
                    <ListItem key = {1} size = {3} name = {"Blueberry Donuts"} price = {3.21}/>
                    <ListItem key = {1} size = {3} name = {"Blueberry Donuts"} price = {3.21}/>
                    <ListItem key = {1} size = {4} name = {"Subtotal"} price = {12.84}/>
                </div>
            </div>

            <div className="payment-Div">
                <h1 className="div-Text">Payment</h1>
                <div className="list-Items">
                    <ListItem key = {1} size = {3} name = {"Subtotal"} price = {3.21}/>
                    <ListItem key = {1} size = {3} name = {"Subtotal"} price = {3.21}/>
                    <ListItem key = {1} size = {3} name = {"Subtotal"} price = {3.21}/>
                    <ListItem key = {1} size = {3} name = {"Subtotal"} price = {3.21}/>
                    <ListItem key = {1} size = {3} name = {"Subtotal"} price = {3.21}/>

                </div>
            </div>

            <div className="contact-Div">
                <h1 className="div-Text">Contact</h1>
                <div className="list-Items">
                    <ListInfo key = {2} title = {"Address"} content = {"hello?"}/>
                    <ListInfo key = {2} title = {"Email"} content = {"hello?"}/>
                    <ListInfo key = {2} title = {"Payment"} content = {"hello?"}/>
                    <ListInfo key = {2} title = {"Number"} content = {"hello?"}/>
                </div>
            </div>

            <div className="button-Div">
                <h1 className = "button-Div-H1">Estimated Time Of Arrival: 15 minutes</h1>
                <div className = "agreement-button-div">
                    <h1 className = "agreement-H1">By checking the box, you agree to our terms and services</h1>
                    <input className = "button-Div-Input" type="checkbox"></input>
                </div>
                <button className = "checkout-Button">
                    Make Payment
                </button>
            </div>
        </div>
    </>);
}
