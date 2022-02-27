import * as React from "react";
import {useEffect, useState} from "react";
import {DonutCard} from "../components/DonutCard";
import {NavBar} from "../components/NavBar";
import "../styles/Menu.css";
import {getRequest} from "../utils/requests";

class Donut {
    name: string
    picture: string
    description: string
    price: number
    quantity: number

    constructor(name: string, image: string, description: string, price: number, quantity: number) {
        this.name = name;
        this.picture = image;
        this.description = description;
        this.price = price;
        this.quantity = quantity;
    }
}


export const Menu: React.FC = () => {
    const [menu, setMenu] = useState<Array<Donut>>([]);

    async function getMenu() {
        try {
            const res = await getRequest<Array<Donut>>("donut/donuts", {});
            if (res.status === 200) {
                setMenu(res.data);
            }
            console.log(res.data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
            getMenu();
        },
        [])

    return (<>
        <NavBar/>
        <div className="main-Div">

            <div className="menu-Div">
                <h1 className="menu-Title">Top Sellers</h1>
                <div className="options-Div">
                    {menu.map((donut: Donut, index: number) => (
                        <DonutCard key={index} name={donut.name} image={donut.picture} description={donut.description}
                                   price={donut.price} quantity={donut.quantity}/>
                    ))}
                </div>
            </div>

            <div className="menu-Div">
                <h1 className="menu-Title">Freshly Baked</h1>
                <div className="options-Div">
                    {menu.map((donut: Donut, index: number) => (
                        <DonutCard key={index} name={donut.name} image={donut.picture} description={donut.description}
                                   price={donut.price} quantity={donut.quantity}/>
                    ))}
                </div>
            </div>

            <div className="menu-Div">
                <h1 className="menu-Title">Top Sellers</h1>
                <div className="options-Div">
                    {menu.map((donut: Donut, index: number) => (
                        <DonutCard key={index} name={donut.name} image={donut.picture} description={donut.description}
                                   price={donut.price} quantity={donut.quantity}/>
                    ))}
                </div>
            </div>
        </div>
    </>);
}
