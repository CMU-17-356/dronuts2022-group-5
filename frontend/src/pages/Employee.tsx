import * as React from "react";
import "../styles/Employee.css";
import {DonutCard} from "../components/DonutCard";
import "../styles/Menu.css";
import { getRequest, postRequest } from "../utils/requests";
import { OrderButton } from "../components/OrderButton";
import { OrderInterface } from "../types/api";

class Donut {
    id: string
    name: string
    price: number
    weight: number
    discount: number
    picture: string
    description: string
    availability: boolean
    tags: Array<string>
}

export class Order {
    id: string
    amounts: Array<number>
    status: string
    tax: number
    serviceFee: number
    deliveryFee: number
    totalCost: number
    rating: number
    customer: string
    donuts: Array<string>
}

export const Employee: React.FC = () => {
    // TODO: add confirmOrder to order buttons
    async function confirmOrder(order: Order) {
        alert("confirm order");
        try {
            const res = await postRequest<OrderInterface>(order, `employee/confirm?orderId=${order.id}`, null);
            if (res.status == 200) {
                console.log("success");
            } else {
                console.log(res);
            }
            // Refresh?
        } catch (err) {
            console.log(err);
        }
    }

    const [menu, setMenu] = React.useState<Array<Donut>>([]);
    async function getMenu() {
        try {
            const res = await getRequest<Array<Donut>>("donut/donuts", {});
            if (res.status === 200) {
                setMenu(res.data);
            }
        } catch (error) {
            console.log(error);
        }
    }
    React.useEffect(() => {
            getMenu();
    }, []);

    const menuDict: { [key: string] : Donut } = {};
    menu.forEach(donut => {
        menuDict[donut.id] = donut;
    });

    const [orders, setOrders] = React.useState<Array<Order>>([]);
    async function getOrders() {
        try {
            const res = await getRequest<Array<Order>>("employee/orders", {});
            if (res.status == 200) {
                setOrders(res.data);
            }
        } catch (err) {
            console.log(err);
        }
    }
    React.useEffect(() => {
        getOrders();
    }, []);

    let donuts: Array<string> = [];
    let amounts: Array<number> = [];
    if (orders.length > 0) {
        donuts = orders[0].donuts;
        amounts = orders[0].amounts;
    }

    return (<>
        <div className="employee-Main-Div">
            <div className="list-orders-div">
                <h1 className = "employee-main-div-title">Orders</h1>
                {orders.map((order: Order, index: number) => (
                    <OrderButton key={index} id={order.id}/>
                ))}
            </div>

            <div className="order-div">
                <h1 className="order-Title">Order</h1>
                <div className="In-Progress-Div">
                    <h1 className = "In-Progress-Title">In Progress</h1>
                    <div className="In-Progress">
                        {donuts.map((donutId: string, index: number) => {
                            const donut = menuDict[donutId];
                            return <DonutCard
                                key={index}
                                name={donut.name}
                                image={donut.picture}
                                description={donut.description}
                                price={donut.price}
                                quantity={amounts[index]}
                            />;
                        })}
                    </div>
                </div>
                <div className="Completed-Div">
                    <h1 className = "Completed-Title">Completed</h1>
                    <div className="Completed">
                    </div>
                </div>
            </div>
        </div>
    </>);
}
