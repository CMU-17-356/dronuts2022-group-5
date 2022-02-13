import * as React from "react";
import {Link} from "react-router-dom";


export const NavBar: React.FC = () => {
    return (<>
        <nav className={"w-full relative bg-pink-300  shadow-lg px-5 py-3"}>
            <div className="w-full items-center justify-between">
                <div className="flex w-full px-0 mx-5 justify-start">
                    <div className="flex-initial w-1/4 relative justify-between lg:w-auto lg:static lg:block lg:justify-start">
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
                                to="/">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                                <span className="ml-2">shopping cart</span>
                            </Link>
                        </li>
                        <li className={"nav-item items-center"}>
                            <Link
                                className={
                                    "text-gray-800 hover:text-gray-600 px-3 py-0 flex items-center text-center text-sm uppercase font-bold"}
                                to="/">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                                <span className="ml-2">Account</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>);
}