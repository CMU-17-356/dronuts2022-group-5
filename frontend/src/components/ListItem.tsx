import * as React from "react";

interface Item {
    size: number;
    name: string;
    price: number;
}

const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

export const ListItem: React.FC<Item> = (item: Item) => {
    return (
        <div className="list-Item">
            <h1 className="list-Size">{item.size == 0 ? "" : item.size + "x"}</h1>
            <h1 className="list-Name">{item.name}</h1>
            <h1 className="list-Price">{formatter.format(item.price)}</h1>
        </div>
    );
}
