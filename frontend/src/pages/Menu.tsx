import * as React from "react";
import {DonutCard} from "../components/DonutCard";
import {NavBar} from "../components/NavBar";
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

export const Menu: React.FC = () => {
    return (<>
        <NavBar/>
        <div className="main-Div">

            <div className="menu-Div">
                <h1 className="menu-Title">Top Sellers</h1>
                <div className="options-Div">
                    {items.map((donut: Donut, index: number) => (
                        <DonutCard key={index} name={donut.name} image={donut.image} description={donut.description} price={donut.price} quantity={donut.quantity}/>
                    ))}
                </div>
            </div>

            <div className="menu-Div">
                <h1 className="menu-Title">Freshly Baked</h1>
                <div className="options-Div">
                    {items.map((donut: Donut, index: number) => (
                        <DonutCard key={index} name={donut.name} image={donut.image} description={donut.description} price={donut.price} quantity={donut.quantity}/>
                    ))}
                </div>
            </div>

            <div className="menu-Div">
                <h1 className="menu-Title">Top Sellers</h1>
                <div className="options-Div">
                    {items.map((donut: Donut, index: number) => (
                        <DonutCard key={index} name={donut.name} image={donut.image} description={donut.description} price={donut.price} quantity={donut.quantity}/>
                    ))}
                </div>
            </div>
        </div>
    </>);
}
