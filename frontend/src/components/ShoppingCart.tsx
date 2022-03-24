import * as React from "react";
import "../styles/ShoppingCart.css";
import {Link} from "react-router-dom";
import { Donut, Order } from "../pages/Employee";
import {getRequest, postRequest} from "../utils/requests";
import {OrderInterface} from "../types/api";

interface F{
    closeCB: React.Dispatch<boolean>  // State dispatch to select order
}

export const ShoppingCart: React.FC<F> = (f:F) => {
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

    React.useEffect(() => {
        getMenu();
        getOrder();
    }, []);

    let len = 0;
    let subTotal = 0;

    if (order != null && Object.keys(menu).length != 0) {
        len = order.donuts.length;
        for (let i = 0; i < len; i++) {
            subTotal += menu[order.donuts[i]].price * order.amounts[i];
        }
    }

    return (
    <>
        <div className = "Shopping-Cart">
            <div className = "title-SC">
                <div className = "location-Title">
                    <h1 className = "personal-Cart">Personal Cart</h1>
                    <h1 className = "pc-Location">Carnegie Mellon University</h1>
                </div>
                <button className = "button-Title" onClick={() => f.closeCB(false)}>
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
                <h1 className = "price-Total">${subTotal}</h1>
            </div>
            <div className = "list-SC">
                {len != 0 && order?.donuts.map((donutId: string, index: number) => {
                    const donut = menu[donutId];
                    return <div key={index} className = "list-item-SC">
                            <img className = "list-img" src={donut.picture}></img>
                            <div>
                                <h1 className="list-name">{donut.name}</h1>
                                <h1 className="list-calories">300 Calories</h1>
                                <button className = "list-button">Remove</button>
                            </div>
                            <h1 className = "sc-price">{order?.amounts[index]}</h1> 
                            <h1 className = "sc-price">${donut.price * order?.amounts[index]}</h1>
                            </div>
                } )}
            </div>
            <div className = "confirmation-SC">
                <button className = "confirmation-Button">
                    <Link className = "confirmation-Link" to="/confirm">Checkout ${subTotal}</Link>
                </button>
            </div>
        </div>
    </>
    );
}
