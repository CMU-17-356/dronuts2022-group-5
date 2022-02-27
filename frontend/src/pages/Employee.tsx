import * as React from "react";
import "../styles/Employee.css";
import {DonutCard} from "../components/DonutCard";
import "../styles/Menu.css";

class Donut {
    name: string
    image: string
    description: string
    price: number
    quantity: number

    constructor(name: string, image: string, description: string, price: number, quantity: number) {
        this.name = name;
        this.image = image;
        this.description = description;
        this.price = price;
        this.quantity = quantity;
    }
}

// Temporary Menu
const items: Array<Donut> = [
    new Donut("Apple Krumble", "https://cmu-17-356.github.io/Dronuts/assets/donut_flavors/apple_krumb.jpg", "Apples and crumbs", 3.99, 0),
    new Donut("Apple Krumble", "https://cmu-17-356.github.io/Dronuts/assets/donut_flavors/apple_krumb.jpg", "Apples and crumbs", 3.99, 2),
    new Donut("Apple Krumble", "https://cmu-17-356.github.io/Dronuts/assets/donut_flavors/apple_krumb.jpg", "Apples and crumbs", 3.99, 0),
    new Donut("Apple Krumble", "https://cmu-17-356.github.io/Dronuts/assets/donut_flavors/apple_krumb.jpg", "Apples and crumbs", 3.99, 0),
    new Donut("Apple Krumble", "https://cmu-17-356.github.io/Dronuts/assets/donut_flavors/apple_krumb.jpg", "Apples and crumbs", 3.99, 0),
    new Donut("Apple Krumble", "https://cmu-17-356.github.io/Dronuts/assets/donut_flavors/apple_krumb.jpg", "Apples and crumbs", 3.99, 0),
    new Donut("Apple Krumble", "https://cmu-17-356.github.io/Dronuts/assets/donut_flavors/apple_krumb.jpg", "Apples and crumbs", 3.99, 0),
]

export const Employee: React.FC = () => {
    return (<>
        <div className="employee-Main-Div">
            <div className="list-orders-div">
                <h1 className = "employee-main-div-title">Orders</h1>
                <div className="list-order-button">
                    <button className = "xButton">x</button>
                    <button className = "ListButton">Order #3000</button>
                    <button className = "xButton">x</button>
                </div>
                <div className="list-order-button">
                    <button className = "xButton">x</button>
                    <button className = "ListButton">Order #3000</button>
                    <button className = "xButton">x</button>
                </div>
                <div className="list-order-button">
                    <button className = "xButton">x</button>
                    <button className = "ListButton">Order #3000</button>
                    <button className = "xButton">x</button>
                </div>
                <div className="list-order-button">
                    <button className = "xButton">x</button>
                    <button className = "ListButton">Order #3000</button>
                    <button className = "xButton">x</button>
                </div>
            </div>

            <div className="order-div">
                <h1 className="order-Title">Order #3000</h1>
                <div className="In-Progress-Div">
                    <h1 className = "In-Progress-Title">In Progress</h1>
                    <div className="In-Progress">
                        {items.map((donut: Donut, index: number) => (
                            <DonutCard key={index} name={donut.name} image={donut.image} description={donut.description} price={donut.price} quantity={donut.quantity}/>
                        ))}
                    </div>
                </div>
                <div className="Completed-Div">
                    <h1 className = "Completed-Title">Completed</h1>
                    <div className="Completed">
                        {items.map((donut: Donut, index: number) => (
                            <DonutCard key={index} name={donut.name} image={donut.image} description={donut.description} price={donut.price} quantity={donut.quantity}/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </>);
}
