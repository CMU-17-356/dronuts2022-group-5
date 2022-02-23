import * as React from "react";

interface Donut {
    name: string;
    image: string;
    description: string
    price: number
    quantity: number
}

export const DonutCard: React.FC<Donut> = (donut: Donut) => {
    return (
        <div className="donuts-Card">
            <img className="donuts-Img" src={donut.image}></img>
            <h1 className="donuts-Text">{donut.name}</h1>
            <h1 className="donuts-Description">{donut.description}</h1>
            <h1 className="donuts-Description">${donut.price}</h1>
            {donut.quantity > 0 ? 
                <div className = "donut-Add-Minus">
                    <button className = "donuts-Button">+</button>
                    <h1 className="donuts-Quantity">{donut.quantity}</h1>
                    <button className = "donuts-Button">-</button>
                </div> : <button className = "donuts-Button">+</button> }
        </div>
    );
}
