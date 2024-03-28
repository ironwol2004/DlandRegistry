import React from "react";
import {NavLink} from "react-router-dom";
function Header(){
    return <nav className="bg-purple-900 flex justify-between py-4">
        <h3 className="font-extrabold text-lg px-6 text-white select-none">DLR</h3>
        <ul className="flex space-x-6 px-6">
            <NavLink to="/" className="text-white hover:cursor-pointer hover:text-slate-500 active:bg-white active:border-purple-800 active:border-2 active:text-purple-950" exact>Home</NavLink>
            <NavLink to="/getyourpropertydetails" className="text-white hover:cursor-pointer hover:text-slate-500 active:bg-white active:border-purple-800 active:border-2 active:text-purple-950">Get details of my property</NavLink>
            <NavLink to="/addmyproperty" className="text-white hover:cursor-pointer hover:text-slate-500 active:bg-white active:border-purple-800 active:border-2 active:text-purple-950">Add my property</NavLink>
            <NavLink to="/allproperties" className="text-white hover:cursor-pointer hover:text-slate-500 active:bg-white active:border-purple-800 active:border-2 active:text-purple-950">All Properties</NavLink>
            <NavLink to="/about" className="text-white hover:cursor-pointer hover:text-slate-500 active:bg-white active:border-purple-800 active:border-2 active:text-purple-950">About us</NavLink>
        </ul>
    </nav>
}
export default Header;