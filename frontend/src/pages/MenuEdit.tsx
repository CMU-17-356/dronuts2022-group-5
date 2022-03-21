import * as React from "react";
import { useEffect, useState } from "react";
import "../styles/MenuEdit.css"
import { NavBar } from "../components/NavBar";
import { DonutInterface } from "../types/api";
import { getRequest, postRequest } from "../utils/requests";
import { DonutModel, DonutEdit } from "../components/DonutEdit";

export const MenuEdit: React.FC = () => {
    const [menu, setMenu] = useState<Array<DonutInterface>>([]);
    const headers = new Headers();

    headers.append("Access-Control-Allow-Origin", "*");
    headers.append("Access-Control-Allow-Credentials", "true");
    headers.append("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    headers.append("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");

    // Retrieves the menu from backend
    async function getMenu() {
        try {
            const res = await getRequest<Array<DonutInterface>>("donut/donuts", headers);
            if (res.status === 200) {
                setMenu(res.data);
            }
            console.log(res.data)
        } catch (error) {
            console.log(error);
        }
    }

    // Submits the update POST request to backend
    async function submitUpdate(donutId: string, donutInfo: DonutModel) {
        try {
            const res = await postRequest<null>(donutInfo, `donut/update?donutId=${donutId}`, null);
            if (res.status != 200) {
                console.log(res);
                alert("A server error occured, please check the fields.")
                return;
            }
            alert("Update successful!");
        } catch (err) {
            console.log(err);
            alert("An error occurred, please check the fields.");
        }
    }

    useEffect(() => {
        getMenu();
    }, [])

    return (<>
        <NavBar/>
        <div className="main-Div">
            <h1 className="main-Title">Edit Menu</h1>
            <table className="donuts-Table">
                <tr>
                    <th className="donuts-Header">Image</th>
                    <th className="donuts-Header">Image URL</th>
                    <th className="donuts-Header">Name</th>
                    <th className="donuts-Header">Description</th>
                    <th className="donuts-Header">Price</th>
                </tr>
                {menu.map((donut: DonutInterface, index: number) => {
                    const donutModel = new DonutModel(donut.id, donut.name, donut.picture, donut.description, donut.price);
                    return <DonutEdit key={index} donutModel={donutModel} submitCb={submitUpdate}/>
                })}
            </table>
        </div>
    </>);
}