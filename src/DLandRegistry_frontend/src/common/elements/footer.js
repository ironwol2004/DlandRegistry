import React from "react";
import logo from "../../images/logo.jpg";
function Footer(){
    return <footer className="bg-slate-800 flex fixed inset-x-0 bottom-0 h-12 space-x-3 justify-center py-4">
        <div style={{ display: 'flex', justifyContent: 'flex-start'}}>
            <img class= "h-7 w-7 rounded-full" src= {logo} alt="Web Logo" />
        </div>
        <h4 className="text-white">© Decentralised Land Registry 2024</h4>
    </footer>
}
export default Footer;
