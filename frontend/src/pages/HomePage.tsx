import * as React from "react";
import {Link} from "react-router-dom";
import {NavBar} from "../components/NavBar";

export const HomePage: React.FC = () => {
    return (
        <>
        <NavBar/>
        <div className="bg-white mt-10 bg-cover"
             style={{
                 backgroundImage: `url('image/donut_lead.jpeg')`
             }}>
        </div>
        </>)
}
