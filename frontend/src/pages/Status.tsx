import * as React from "react";
import {NavBar} from "../components/NavBar";
import "../styles/Status.css";

export const Status: React.FC = () => {
    return (<>
        <NavBar/>
        <div className="status-Main-Div">
            <div className="map-Div">
            </div>

            <div className="status-Div">
                <div className="status">
                    <h1 className = "status-H1">Delivery In Progress</h1>
                </div>
                <h1 className="status-text">Time of Arrival: 30 minutes</h1>
                <h1 className="status-text">Real Time Distance: 1 mile(s)</h1>
                <h1 className="status-text">Estimated Time Remaining: 10 minutes</h1>
                <div className="numItems">
                    <h1 className="status-text">Number Of Items: 5 </h1>
                    <button className="numItems-Button">?</button>
                </div>
                <button className="status-Button">Request Assistance</button>
            </div>
        </div>
    </>);
}
