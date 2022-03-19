import * as React from "react";
import {Link} from "react-router-dom";
import {useState} from "react";
import {ShoppingCart} from "../components/ShoppingCart";

export const NavBar: React.FC = () => {
    const [toggle, setToggle] = useState(false);

    return (<>
        <nav className={"sticky top-0 w-full bg-pink-300 shadow-lg px-5 py-3"}>
            <div className="w-full items-center justify-between">
                <div className="flex w-full px-0 mx-5 justify-start">
                    <div
                        className="flex-initial w-1/4 relative justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <Link
                            className={"text-gray-600 text-xl font-bold leading-relaxed inline-block py-0 whitespace-nowrap uppercase"
                            } to="/">
                            Dronut
                        </Link>
                    </div>
                    <ul className="flex-initial inline-flex pt-1.5 list-none ml-auto justify-end">
                        <li className={"nav-item content-center"}>
                            <Link
                                className={
                                    "text-gray-800 hover:text-gray-600 px-3 py-0 flex items-center text-center text-sm uppercase font-bold"}
                                to="/menu">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                                     viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z"/>
                                </svg>
                                <span className="ml-2">menu</span>
                            </Link>
                        </li>
                        <li className={"nav-item items-center"}>
                            <Link
                                className={
                                    "text-gray-800 hover:text-gray-600 px-3 py-0 flex items-center text-center text-sm uppercase font-bold"}
                                onClick={() => setToggle(!toggle)}
                                to={""}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                                     viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
                                </svg>
                                <span className="ml-2">shopping cart</span>
                            </Link>
                        </li>
                        <li className={"nav-item items-center"}>
                            <Link
                                className={
                                    "text-gray-800 hover:text-gray-600 px-3 py-0 flex items-center text-center text-sm uppercase font-bold"}
                                to="/">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                                     viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                                </svg>
                                <span className="ml-2">Account</span>
                            </Link>
                        </li>
                        <li className={"nav-item items-center"}>
                            <Link
                                className={
                                    "text-gray-800 hover:text-gray-600 px-3 py-0 flex items-center text-center text-sm uppercase font-bold"}
                                to="/employee">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                                </svg>
                                <span className="ml-2">Employee</span>
                            </Link>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </nav>
        {
            toggle ? <ShoppingCart/>: <div></div> 
        }
    </>);
}