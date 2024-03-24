import React from "react";
import {Link} from "react-router-dom";
function Header(){
    return <nav className="bg-purple-900 flex justify-between py-4">
        <h3 className="font-extrabold text-lg px-6 text-white select-none">DLR</h3>
        <ul className="flex space-x-6 px-6">
            <Link to="/" className="text-cyan-300 hover:cursor-pointer hover:text-white hover:opacity-85 hover:underline">Home</Link>
            <Link to="/getyourpropertydetails" className="text-cyan-300 hover:cursor-pointer hover:text-white hover:opacity-85 hover:underline">Get details of my property</Link>
            <Link to="/addmyproperty" className="text-cyan-300 hover:cursor-pointer hover:text-white hover:opacity-85 hover:underline">Add my property</Link>
            <Link to="/allproperties" className="text-cyan-300 hover:cursor-pointer hover:text-white hover:opacity-85 hover:underline">All Properties</Link>
            <Link to="/about" className="text-cyan-300 hover:cursor-pointer hover:text-white hover:opacity-85 hover:underline">About us</Link>
        </ul>
    </nav>
}
export default Header;