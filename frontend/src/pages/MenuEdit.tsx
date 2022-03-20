import * as React from "react";
import { useEffect, useState } from "react";
import "../styles/MenuEdit.css"
import { NavBar } from "../components/NavBar";
import { DonutInterface } from "../types/api";
import { getRequest } from "../utils/requests";
import { DonutEdit } from "../components/DonutEdit";

export const MenuEdit: React.FC = () => {
    const [menu, setMenu] = useState<Array<DonutInterface>>([]);
    const headers = new Headers();

    headers.append("Access-Control-Allow-Origin", "*");
    headers.append("Access-Control-Allow-Credentials", "true");
    headers.append("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    headers.append("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");

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
                {menu.map((donut: DonutInterface, index: number) => (
                    <DonutEdit key={index} id={donut.id} name={donut.name} image={donut.picture} description={donut.description}
                            price={donut.price}/>
                ))}
            </table>
        </div>
    </>);
}