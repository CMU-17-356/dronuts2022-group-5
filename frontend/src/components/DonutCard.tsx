import * as React from "react";
import {useEffect, useState} from "react";
import {DonutCardChild} from "./DonutCartChild";
import {postRequest} from "../utils/requests";
import {OrderInterface} from "../types/api";

class Donut {
    id: string
    name: string
    image: string
    description: string
    price: number
    quantity: number

    constructor(id: string, name: string, image: string, description: string, price: number, quantity: number) {
        this.id = id;
        this.name = name;
        this.image = image;
        this.description = description;
        this.price = price;
        this.quantity = quantity;
    }
}

export const DonutCard: React.FC<Donut> = (donutIn: Donut) => {
    const donut: Donut = new Donut(donutIn.id, donutIn.name, donutIn.image, donutIn.description, donutIn.price, donutIn.quantity);
    const [quantity, setQuantity] = useState(donut.quantity);

    const headers = new Headers();
    headers.append("Access-Control-Allow-Origin", "*");
    headers.append("Access-Control-Allow-Credentials", "true");
    headers.append("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    headers.append("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");


    useEffect(() => {
        if (quantity != 0)
            sentOrder(donut.id, quantity).then()
    }, [quantity])

    async function sentOrder(donut: string, amount: number) {
        console.log("sendOrder")
        try {
            const res = await postRequest<OrderInterface>({
                "donut": donut,
                "amounts": amount
            }, "customer/order/update?custId=621be978bd932c994c202f0c", headers);
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="donuts-Card">
            <img className="donuts-Img" src={donut.image}></img>
            <h1 className="donuts-Text">{donut.name}</h1>
            <h1 className="donuts-Description">{donut.description}</h1>
            <h1 className="donuts-Description">${donut.price}</h1>

            <div className="donut-Add-Minus">
                <button className="donuts-Button" onClick={() => {
                    setQuantity(quantity + 1);
                    //sentOrder(donut.id, quantity).then()
                }}>+
                </button>
                <DonutCardChild amount={quantity}/>
                <button className="donuts-Button" onClick={() => {
                    if (quantity > 0) {
                        setQuantity(quantity - 1);
                        //sentOrder(donut.id, quantity).then()
                    }
                }}>-
                </button>
            </div>
        </div>
    );
}
