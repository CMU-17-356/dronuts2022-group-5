import * as React from "react";

interface Order {
    id: string
    index: number
    selectCb: React.Dispatch<number>  // State dispatch to select order
    dismissCb: () => Promise<void>    // Function to dismiss order
}

export const OrderButton: React.FC<Order> = (order: Order) => {
    return (
        <div className="list-order-button">
            <button className = "xButton" onClick={order.dismissCb}>x</button>
            <button className = "ListButton" onClick={() => order.selectCb(order.index)}>
                {order.id.substring(order.id.length-4)}
            </button>
            <button className = "xButton" onClick={order.dismissCb}>x</button>
        </div>
    )
}
