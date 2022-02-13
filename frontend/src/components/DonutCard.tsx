import * as React from "react";
import {Link} from "react-router-dom";

interface Donut {
    name: string;
    image: string;
}

export const DonutCard: React.FC<Donut> = (donut: Donut) => {
    return (
        <div className="donuts-Card">
            <img className="donuts-Img" src={donut.image}></img>
            <h1 className="donuts-Text">{donut.name}</h1>
        </div>
    );
}
