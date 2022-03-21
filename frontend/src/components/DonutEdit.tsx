import * as React from "react";
import "../styles/MenuEdit.css"

export class DonutModel {
    id: string
    name: string
    picture: string
    description: string
    price: number

    constructor(id: string, name: string, image: string, description: string, price: number) {
        this.id = id;
        this.name = name;
        this.picture = image;
        this.description = description;
        this.price = price;
    }
}

class Donut {
    donutModel: DonutModel
    submitCb: (arg0: string, arg2: DonutModel) => Promise<void> // Function to submit update
}

export const DonutEdit: React.FC<Donut> = (donut: Donut) => {
    const [imageText, setImageText] = React.useState(donut.donutModel.picture);
    const [nameText, setNameText] = React.useState(donut.donutModel.name);
    const [descriptionText, setDescriptionText] = React.useState(donut.donutModel.description);
    const [priceText, setPriceText] = React.useState(donut.donutModel.price);

    async function submit() {
        const donutModel = new DonutModel(donut.donutModel.id, nameText, imageText, descriptionText, priceText);
        donut.submitCb(donut.donutModel.id, donutModel);
    }

    return (
        <tr className="donutEdit-Row">
            <td width="10%"><img className="donutEdit-Img" src={imageText}/></td>
            <td><textarea className="donutEdit-Text" value={imageText} onChange={e => setImageText(e.target.value)}/></td>
            <td><textarea className="donutEdit-Text" value={nameText} onChange={e => setNameText(e.target.value)}/></td>
            <td><textarea className="donutEdit-Text" value={descriptionText} onChange={e => setDescriptionText(e.target.value)}/></td>
            <td><textarea className="donutEdit-Text" value={priceText} onChange={e => setPriceText(Number(e.target.value))}/></td>
            <td><button className="donutEdit-Button" onClick={submit}>Update</button></td>
        </tr>
    );
}
