import * as React from "react";
import "../styles/MenuEdit.css"

class Donut {
    id: string
    name: string
    image: string
    description: string
    price: number

    constructor(id: string, name: string, image: string, description: string, price: number) {
        this.id = id;
        this.name = name;
        this.image = image;
        this.description = description;
        this.price = price;
    }
}

export const DonutEdit: React.FC<Donut> = (donutIn: Donut) => {
    const donut: Donut = new Donut(donutIn.id, donutIn.name, donutIn.image, donutIn.description, donutIn.price);

    return (
        <tr className="donutEdit-Row">
            <td width="10%"><img className="donutEdit-Img" src={donut.image}/></td>
            <td><textarea className="donutEdit-LongText">{donut.image}</textarea></td>
            <td><textarea className="donutEdit-Text">{donut.name}</textarea></td>
            <td><textarea className="donutEdit-LongText">{donut.description}</textarea></td>
            <td><textarea className="donutEdit-Text">{donut.price}</textarea></td>
            <td><button className="donutEdit-Button">Update</button></td>
        </tr>
        // <div className="donuts-Row">
        //     <img className="donuts-Img" src={donut.image}></img>
        //     <h1 className="donuts-Text">{donut.name}</h1>
        //     <h1 className="donuts-Description">{donut.description}</h1>
        //     <h1 className="donuts-Description">${donut.price}</h1>
        // </div>
    );
}
