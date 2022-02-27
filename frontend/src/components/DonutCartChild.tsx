import * as React from "react";

interface Quantity{
    amount: number
}
export const DonutCardChild: React.FC<Quantity> = (quantity:Quantity) => {
    return (
    <h1 className="donuts-Quantity">{quantity.amount}</h1>
    );
}