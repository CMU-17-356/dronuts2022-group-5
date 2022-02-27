import * as React from "react";

interface Order {
    id: string
}

export const OrderButton: React.FC<Order> = (order: Order) => {
    return (
        <div className="list-order-button">
            <button className = "xButton">x</button>
            <button className = "ListButton">{order.id.substring(order.id.length-4)}</button>
            <button className = "xButton">x</button>
        </div>
    )
}
