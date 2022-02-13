import * as React from "react";
import {Link} from "react-router-dom";
import {DonutCard} from "../components/DonutCard";
import "../styles/Menu.css";

class Donut {
    name: string
    image: string

    constructor(name: string, image: string) {
        this.name = name;
        this.image = image;
    }
}

// Temporary Menu
const items: Array<Donut> = [
    new Donut("Apple Krumb", "https://cmu-17-356.github.io/Dronuts/assets/donut_flavors/apple_krumb.jpg"),
    new Donut("Bavarian", "https://cmu-17-356.github.io/Dronuts/assets/donut_flavors/bavarian_kreme.jpg"),
    new Donut("Bavarian", "https://cmu-17-356.github.io/Dronuts/assets/donut_flavors/bavarian_kreme.jpg"),
    new Donut("Bavarian", "https://cmu-17-356.github.io/Dronuts/assets/donut_flavors/bavarian_kreme.jpg"),
    new Donut("Bavarian", "https://cmu-17-356.github.io/Dronuts/assets/donut_flavors/bavarian_kreme.jpg"),
    new Donut("Bavarian", "https://cmu-17-356.github.io/Dronuts/assets/donut_flavors/bavarian_kreme.jpg"),
    new Donut("Bavarian", "https://cmu-17-356.github.io/Dronuts/assets/donut_flavors/bavarian_kreme.jpg"),
    new Donut("Bavarian", "https://cmu-17-356.github.io/Dronuts/assets/donut_flavors/bavarian_kreme.jpg"),
    new Donut("Bavarian", "https://cmu-17-356.github.io/Dronuts/assets/donut_flavors/bavarian_kreme.jpg"),
    new Donut("Bavarian", "https://cmu-17-356.github.io/Dronuts/assets/donut_flavors/bavarian_kreme.jpg"),
    new Donut("Cruller", "https://cmu-17-356.github.io/Dronuts/assets/donut_flavors/cruller.jpg"),
]

export const Menu: React.FC = () => {
    return (<>
        <div className="main-Div">

            <div className="menu-Div">
                <h1 className="menu-Title">Top Sellers</h1>
                <div className="options-Div">
                    {items.map((donut: Donut, index: number) => (
                        <DonutCard key={index} name={donut.name} image={donut.image} />
                    ))}
                </div>
            </div>

            <div className="menu-Div">
                <h1 className="menu-Title">Freshly Baked</h1>
                <div className="options-Div">
                    {items.map((donut: Donut, index: number) => (
                        <DonutCard key={index} name={donut.name} image={donut.image} />
                    ))}
                </div>
            </div>

            <div className="menu-Div">
                <h1 className="menu-Title">Top Sellers</h1>
                <div className="options-Div">
                    {items.map((donut: Donut, index: number) => (
                        <DonutCard key={index} name={donut.name} image={donut.image} />
                    ))}
                </div>
            </div>
        </div>
    </>);
}
