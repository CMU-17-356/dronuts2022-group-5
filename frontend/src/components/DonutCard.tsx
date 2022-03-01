import * as React from "react";
import {useState} from "react";
import {DonutCardChild} from "./DonutCartChild";

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

export const DonutCard: React.FC<Donut> = (donutIn: Donut) => {
    const donut: Donut = new Donut(donutIn.name, donutIn.image, donutIn.description, donutIn.price, donutIn.quantity);
    const [quantity, setQuantity] = useState(donut.quantity);
    return (
        <div className="donuts-Card">
            <img className="donuts-Img" src={donut.image}></img>
            <h1 className="donuts-Text">{donut.name}</h1>
            <h1 className="donuts-Description">{donut.description}</h1>
            <h1 className="donuts-Description">${donut.price}</h1>

                <div className="donut-Add-Minus">
                    <button className="donuts-Button" onClick={() =>setQuantity(quantity+1)}>+</button>
                    <DonutCardChild amount={quantity}/>
                    <button className="donuts-Button" onClick={() => {if (quantity > 0) setQuantity(quantity-1)}}>-</button>
                </div>
        </div>
    );
}
