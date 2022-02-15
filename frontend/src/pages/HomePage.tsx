import * as React from "react";
import {Link} from "react-router-dom";
import {NavBar} from "../components/NavBar";


export const HomePage: React.FC = () => {
    return (
        <>
        <NavBar/>
        <div className={" w-full h-screen bg-center bg-cover bg-gradient-to-t"}
             style={{
                 backgroundImage: `linear-gradient(rgba(200, 200, 200, 0.9), rgba(200, 200, 200, 0.9)), url('image/donut_lead.jpeg')`
             }}>

            <div className="pt-2 relative mx-auto my-auto text-gray-600 justify-self-center">
                <input
                    className="border-2 border-gray-300 bg-white h-16 px-5 pr-16 rounded-lg text-lg focus:outline-none"
                    type="search" name="search" placeholder="add new pickup point"/>
                    <button type="submit" className=" right-0 top-0 mt-auto mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </button>
            </div>
        </div>
        </>)
}
