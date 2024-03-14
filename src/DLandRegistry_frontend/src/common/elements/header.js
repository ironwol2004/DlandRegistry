import React from "react";
import {Link} from "react-router-dom";
function Header(){
    return <nav className="bg-purple-900 flex justify-between py-4">
        <h3 className="font-extrabold text-lg px-6 text-white">DLR</h3>
        <ul className="flex space-x-6 px-6">
            <Link to="/" className="text-white hover:cursor-pointer hover:text-slate-500">Home</Link>
            <Link to="/getyourpropertydetails" className="text-white hover:cursor-pointer hover:text-slate-500">Get details of my property</Link>
            <Link to="/addmyproperty" className="text-white hover:cursor-pointer hover:text-slate-500">Add my property</Link>
            <Link to="/allproperties" className="text-white hover:cursor-pointer hover:text-slate-500">All Properties</Link>
            <Link to="/about" className="text-white hover:cursor-pointer hover:text-slate-500">About us</Link>
        </ul>
    </nav>
}
export default Header;