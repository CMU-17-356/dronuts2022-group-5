import * as React from "react";
import "../styles/MenuEdit.css"

export class DonutModel {
    id: string
    name: string
    picture: string
    description: string
    price: number
    weight: number

    constructor(id: string, name: string, image: string, description: string, price: number, weight: number) {
        this.id = id;
        this.name = name;
        this.picture = image;
        this.description = description;
        this.price = price;
        this.weight = weight;
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
    const [weightText, setWeightText] = React.useState(donut.donutModel.weight);

    async function submit() {
        const donutModel = new DonutModel(donut.donutModel.id, nameText, imageText, descriptionText, priceText, weightText);
        donut.submitCb(donut.donutModel.id, donutModel);
    }

    return (
        <tr className="donutEdit-Row">
            <td className="donutEdit-SmallTd"><img className="donutEdit-Img" src={imageText}/></td>
            <td className="donutEdit-LongTd">
                <textarea
                    className="donutEdit-Text"
                    value={imageText}
                    onChange={e => setImageText(e.target.value)}
                />
            </td>
            <td>
                <textarea
                    className="donutEdit-Text"
                    value={nameText}
                    onChange={e => setNameText(e.target.value)}
                />
            </td>
            <td className="donutEdit-LongTd">
                <textarea
                    className="donutEdit-Text"
                    value={descriptionText}
                    onChange={e => setDescriptionText(e.target.value)}
                />
            </td>
            <td className="donutEdit-SmallTd">
                <textarea
                    className="donutEdit-Text"
                    value={priceText}
                    onChange={e => setPriceText(Number(e.target.value))}
                />
            </td>
            <td className="donutEdit-SmallTd">
                <textarea
                    className="donutEdit-Text"
                    value={weightText}
                    onChange={e => setWeightText(Number(e.target.value))}
                />
            </td>
            <td className="donutEdit-SmallTd">
                <button className="donutEdit-Button" onClick={submit}>Update</button></td>
        </tr>
    );
}
