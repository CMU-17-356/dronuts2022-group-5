import * as React from "react";
import {useEffect, useState} from "react";
import {DonutCard} from "../components/DonutCard";
import {NavBar} from "../components/NavBar";
import "../styles/Menu.css";
import {getRequest} from "../utils/requests";
import {DonutInterface} from "../types/api";


export const Menu: React.FC = () => {
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
        },
        [])

    return (<>
        <NavBar/>
        <div className="main-Div">

            <div className="menu-Div">
                <h1 className="menu-Title">Top Sellers</h1>
                <div className="options-Div">
                    {menu.map((donut: DonutInterface, index: number) => (
                        <DonutCard key={index} id={donut.id} name={donut.name} image={donut.picture} description={donut.description}
                                   price={donut.price} quantity={0} menuView={true}/>
                    ))}
                </div>
            </div>

            <div className="menu-Div">
                <h1 className="menu-Title">Freshly Baked</h1>
                <div className="options-Div">
                    {menu.map((donut: DonutInterface, index: number) => (
                        <DonutCard key={index} id={donut.id} name={donut.name} image={donut.picture} description={donut.description}
                                   price={donut.price} quantity={0} menuView={true}/>
                    ))}
                </div>
            </div>

            <div className="menu-Div">
                <h1 className="menu-Title">Top Sellers</h1>
                <div className="options-Div">
                    {menu.map((donut: DonutInterface, index: number) => (
                        <DonutCard key={index} id={donut.id} name={donut.name} image={donut.picture} description={donut.description}
                                   price={donut.price} quantity={0} menuView={true}/>
                    ))}
                </div>
            </div>
        </div>
    </>);
}
