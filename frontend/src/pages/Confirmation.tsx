import * as React from "react";
import {NavBar} from "../components";
import {ListItem} from "../components/ListItem";
import {ListInfo} from "../components/ListInfo";
import "../styles/Confirmation.css";
import {getRequest, postRequest} from "../utils/requests";
import {OrderInterface} from "../types/api";

import {Link} from "react-router-dom";
import { Donut, Order } from "./Employee";


export const Confirmation: React.FC = () => {
    // Fixed custId for now
    const custId = '621be978bd932c994c202f0c';
    const [menu, setMenu] = React.useState<{[key: string]: Donut}>({});
    const [order, setOrder] = React.useState<Order>();

    // Retrives the order from backend
    async function getOrder() {
        try {
            console.log("call get Order")
            const res = await getRequest<Order>(`customer/unconfirm?custId=${custId}`, null);
            if (res.status == 200) {
                setOrder(res.data);
            } else {
                console.log(res);
            }
        } catch (err) {
            console.log(err);
        }
    }

    // Retrieves menu from backend
    async function getMenu() {
        try {
            const res = await getRequest<Array<Donut>>("donut/donuts", {});
            if (res.status === 200) {
                // Convert menu into dict (key is id, value is Donut)
                const menuDict: { [key: string] : Donut } = {};
                res.data.forEach(donut => {
                    menuDict[donut.id] = donut;
                });
                setMenu(menuDict);
            } else {
                console.log(res);
            }
        } catch (error) {
            console.log(error);
        }
    }

    // Submits order
    async function submitOrder() {
        try {
            const orderRes = await postRequest<OrderInterface>(order, `customer/confirm?orderId=${order?.id}`, null);
            if (orderRes.status === 200) {
                console.log("success");
            }
        } catch (error) {
            console.log(error);
        }
    }

    React.useEffect(() => {
        getMenu();
        getOrder();
    }, []);


    let len = 0;
    let numItems = 0;
    let subTotal = 0;

    if (order != null && Object.keys(menu).length != 0) {
        len = order.donuts.length;
        for (let i = 0; i < len; i++) {
            numItems += order.amounts[i];
            subTotal += menu[order.donuts[i]].price * order.amounts[i];
        }
    }

    const serviceFee = order?.serviceFee ?? 0;
    const deliveryFee = order?.deliveryFee ?? 0;
    const tax = order?.tax ?? 0;
    const total = subTotal + serviceFee + deliveryFee + tax;

    return (<>
        <NavBar/>
        <div className="main-Confirmation-Div">
            <div className="confirmation-Div">
                <h1 className="div-Text">Confirmation</h1>
                <div className="list-Items">
                    {len != 0 ? order?.donuts.map((donutId: string, index: number) => {
                        const donut = menu[donutId];
                        return <ListItem
                            key={index}
                            size={order?.amounts[index]}
                            name={donut.name}
                            price={donut.price}
                        />;
                    }) : <></>}
                    <ListItem key={len} size={numItems} name={"Subtotal"} price={subTotal}/>
                </div>
            </div>

            <div className="payment-Div">
                <h1 className="div-Text">Payment</h1>
                <div className="list-Items">
                    <ListItem key={len+1} size={0} name={"Subtotal"} price={subTotal}/>
                    <ListItem key={len+2} size={0} name={"Tax"} price={tax}/>
                    <ListItem key={len+3} size={0} name={"Service Fee"} price={serviceFee}/>
                    <ListItem key={len+4} size={0} name={"Delivery Fee"} price={deliveryFee}/>
                    <ListItem key={len+5} size={0} name={"Total"} price={total}/>
                </div>
            </div>

            <div className="contact-Div">
                <h1 className="div-Text">Contact</h1>
                <div className="list-Items">
                    <ListInfo key={len+6} title={"Address"} content={"hello?"}/>
                    <ListInfo key={len+7} title={"Email"} content={"hello?"}/>
                    <ListInfo key={len+8} title={"Payment"} content={"hello?"}/>
                    <ListInfo key={len+9} title={"Number"} content={"hello?"}/>
                </div>
            </div>

            <div className="button-Div">
                <h1 className = "button-Div-H1">Estimated Time Of Arrival: 15 minutes</h1>
                <div className = "agreement-button-div">
                    <h1 className = "agreement-H1">By checking the box, you agree to our terms and services</h1>
                    <input className = "button-Div-Input" type="checkbox"></input>
                </div>

                <Link className="checkout-Button" onClick={submitOrder} to="/status">
                    Make Payment
                </Link>
            </div>
        </div>
    </>);
}
