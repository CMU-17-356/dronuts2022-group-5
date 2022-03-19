import * as React from "react";
import "../styles/Employee.css";
import {DonutCard} from "../components/DonutCard";
import "../styles/Menu.css";
import { getRequest, postRequest } from "../utils/requests";
import { OrderButton } from "../components/OrderButton";
import { OrderInterface } from "../types/api";

export class Donut {
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
    // Retrieves the menu from backend
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

    // Retrieves the in progress orders from backend
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

    // Dismisses an order (sends a confirmation to the backend)
    async function dismissOrder() {
        try {
            const orderId = orders[selectedOrder].id;
            const res = await postRequest<OrderInterface>(null, `employee/confirm?orderId=${orderId}`, null);
            if (res.status != 200) {
                console.log(res);
                return;
            }
            setOrders(orders.filter(order => order.id != orderId));
            selectOrder(0);
        } catch (err) {
            console.log(err);
        }
    }

    // States for menu, order, selected order
    const [menu, setMenu] = React.useState<{ [key: string]: Donut}>({});
    const [orders, setOrders] = React.useState<Array<Order>>([]);
    const [selectedOrder, selectOrder] = React.useState<number>(0);

    React.useEffect(() => {
        getMenu();
        getOrders();
    }, []);

    return (<>
        <div className="employee-Main-Div">
            <div className="list-orders-div">
                <h1 className = "employee-main-div-title">Orders</h1>
                {orders.map((order: Order, index: number) => (
                    <OrderButton
                        key={index}
                        id={order.id}
                        index={index}
                        selectCb={selectOrder}
                        dismissCb={dismissOrder}
                    />
                ))}
            </div>

            <div className="order-div">
                <h1 className="order-Title">Order {orders[selectedOrder]?.id}</h1>
                <div className="In-Progress-Div">
                    <h1 className = "In-Progress-Title">Items</h1>
                    <div className="In-Progress">
                        {orders[selectedOrder]?.donuts.map((donutId: string, index: number) => {
                            const donut = menu[donutId];
                            if (donut) {
                                return <DonutCard
                                    key={index}
                                    id = {donut.id}
                                    name={donut.name}
                                    image={donut.picture}
                                    description={donut.description}
                                    price={donut.price}
                                    quantity={orders[selectedOrder].amounts[index]}
                                    menuView={false}
                                />;
                            }
                        })}
                    </div>
                </div>
                {/* <div className="Completed-Div">
                    <h1 className = "Completed-Title">Completed</h1>
                    <div className="Completed">
                    </div>
                </div> */}
            </div>
        </div>
    </>);
}
