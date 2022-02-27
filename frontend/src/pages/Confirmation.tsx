import * as React from "react";
import {NavBar} from "../components";
import {ListItem} from "../components/ListItem";
import {ListInfo} from "../components/ListInfo";
import "../styles/Confirmation.css";
import {useEffect} from "react";
import {getRequest, postRequest} from "../utils/requests";
import {CustomerInterface, OrderInterface} from "../types/api";

import {Link} from "react-router-dom";


export const Confirmation: React.FC = () => {
    const customer = {
        "username": "test",
        "emailAddress": "test@test.com",
        "phoneNumber": 4120000000
    };

    const order = {
        "customer": "621be978bd932c994c202f0c",
        "donuts": null,
        "amounts": 4,
        "status": 'IN-PROGRESS',
        "tax": 1.50,
        "serviceFee": 1.50,
        "deliveryFee": 1.00,
        "totalCost": 13.00,
        "rating": 4.5
    }
    async function submitOrder() {
        alert("submitOrder")
        try {
            const custRes = await postRequest<CustomerInterface>(customer, "customer/create", null);
            if (custRes.status === 200) {
                console.log("success")
            }
            
            // TODO: Get the custId
            const custId = order['customer'];

            try {
                const orderres = await postRequest<OrderInterface>(order, `order?custId=${custId}`, null);
            } catch (error) {
                console.log(error);
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (<>
        <NavBar/>
        <div className="main-Confirmation-Div">

            <div className="confirmation-Div">
                <h1 className="div-Text">Confirmation</h1>
                <div className="list-Items">
                    <ListItem key = {1} size = {3} name = {"Blueberry Donuts"} price = {3.21}/>
                    <ListItem key = {2} size = {3} name = {"Blueberry Donuts"} price = {3.21}/>
                    <ListItem key = {3} size = {3} name = {"Blueberry Donuts"} price = {3.21}/>
                    <ListItem key = {4} size = {3} name = {"Blueberry Donuts"} price = {3.21}/>
                    <ListItem key = {5} size = {4} name = {"Subtotal"} price = {12.84}/>
                </div>
            </div>

            <div className="payment-Div">
                <h1 className="div-Text">Payment</h1>
                <div className="list-Items">
                    <ListItem key = {6} size = {3} name = {"Subtotal"} price = {3.21}/>
                    <ListItem key = {7} size = {3} name = {"Subtotal"} price = {3.21}/>
                    <ListItem key = {8} size = {3} name = {"Subtotal"} price = {3.21}/>
                    <ListItem key = {9} size = {3} name = {"Subtotal"} price = {3.21}/>
                    <ListItem key = {10} size = {3} name = {"Subtotal"} price = {3.21}/>

                </div>
            </div>

            <div className="contact-Div">
                <h1 className="div-Text">Contact</h1>
                <div className="list-Items">
                    <ListInfo key = {11} title = {"Address"} content = {"hello?"}/>
                    <ListInfo key = {12} title = {"Email"} content = {"hello?"}/>
                    <ListInfo key = {13} title = {"Payment"} content = {"hello?"}/>
                    <ListInfo key = {14} title = {"Number"} content = {"hello?"}/>
                </div>
            </div>

            <div className="button-Div">
                <h1 className = "button-Div-H1">Estimated Time Of Arrival: 15 minutes</h1>
                <div className = "agreement-button-div">
                    <h1 className = "agreement-H1">By checking the box, you agree to our terms and services</h1>
                    <input className = "button-Div-Input" type="checkbox"></input>
                </div>

                <Link className = "checkout-Button" onClick = {submitOrder} to="/status">
                    Make Payment
                </Link>
            </div>
        </div>
    </>);
}
