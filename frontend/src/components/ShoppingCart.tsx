import * as React from "react";
import "../styles/ShoppingCart.css";
import {Link} from "react-router-dom";
import {getRequest} from "../utils/requests";
import {Donut, Order} from "../pages/Employee";

export const ShoppingCart: React.FC = () => {
    // Fixed custId for now
    const custId = '621be978bd932c994c202f0c';
    const [menu, setMenu] = React.useState<{ [key: string]: Donut }>({});
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
                const menuDict: { [key: string]: Donut } = {};
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

    if (order != null && order.donuts != null && Object.keys(menu).length != 0) {
        len = order.donuts.length;
        for (let i = 0; i < len; i++) {
            subTotal += menu[order.donuts[i]].price * order.amounts[i];
        }
    }

    return (
        <>
            <div className="Shopping-Cart">
                <div className="title-SC">
                    <div className="location-Title">
                        <h1>Personal Cart</h1>
                        <h1>Carnegie Mellon University</h1>
                    </div>
                    <button className="button-Title">
                        X Close
                    </button>
                </div>
                <div className="total-SC">
                    <div className="guarantee-Total">
                        <img className="guarantee-Image" src={"image/Dronut.png"}></img>
                        <h1 className="guarantee-Time">By 1:21 pm</h1>
                        <h1 className="guarantee-Desc">100% satisfaction guarantee</h1>
                    </div>
                    <h1 className="price-Total">$5.97</h1>
                </div>
                <div className="list-SC">
                    {len != 0 && order?.donuts.map((donutId: string, index: number) => {
                        const donut = menu[donutId];
                        return <div key={index} className="list-item-SC">
                            <img className="donuts-Img" src={donut.picture}/>
                            <div>
                                <h1 className="list-name">{donut.name}</h1>
                                <h1 className="list-calories">300 Calories</h1>
                                <button className="list-button">Remove</button>
                            </div>
                            <div>{order?.amounts[index]}</div>
                            <h1>{order?.totalCost}</h1>
                        </div>
                    })}
                </div>
                <div className="confirmation-SC">
                    <Link className="confirmation-Button" to="/confirm">Checkout ${subTotal}</Link>
                </div>
            </div>

        </>
    );
}
