import React, { useState } from "react";
import AllDetailsOfaProperty from "./alldetailsofproperty";

function GetDetailsofYourProperty(props) {
    const [x, setx] = useState(null);
    const [aadhar, setaadhar] = useState("");
    const [id, setId] = useState("");
    const handleAadharChange = (event) => {
        setaadhar(event.target.value);
    };

    const handleIdChange = (event) => {
        setId(event.target.value);
    };
    async function sub(event) {
        console.log(props.ps);
        var y = null;
        console.log(aadhar); console.log(id);
        for (var i = 0; i < props.ps.length; i++) {
            if (props.ps[i].id === id && props.ps[i].aadhar === aadhar) {
                setx(props.ps[i]); y = props.ps[i]; break;
            }
        }
        if (y === null) {
            alert("Property Not Found!");
        }
        event.preventDefault();
    }

    return (
        <>
            <div className="p-6 max-w-xl mx-auto bg-slate-50 rounded-xl shadow-md flex flex-col items-center space-x-4 my-6">
                <div>{!x && (
                    <div className="flex justify-center ">
                        <div className="flex-col justify-center align-middle items-center ">
                            <h1 className="text-2xl font-bold text-center text-gray-700 mb-6 mx-20">Details of Registered Properties</h1>
                            <form className="mb-6">
                                <div className="sm:col-span-4">
                                    <label className="block text-sm font-medium leading-6 text-gray-900">Aadhar Number:</label>
                                    <div className="mt-2">
                                        <input name="aadhar" type="number" onChange={handleAadharChange} className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                    </div>
                                </div>
                                <div className="col-span-full">
                                    <label className="block text-sm font-medium leading-6 text-gray-900">Property Id</label>
                                    <div className="mt-2">
                                        <input type="text" name="id" onChange={handleIdChange} className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                    </div>
                                </div>
                                <div className="mt-6 flex items-center justify-start gap-x-6">
                                    <button type="button" className="text-sm font-semibold leading-6 text-gray-900">Cancel</button>
                                    <button type="submit" onClick={sub} className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get Details</button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
                    {x && <AllDetailsOfaProperty property={x}></AllDetailsOfaProperty>}
                </div>
            </div>
        </>
    );
}

export default GetDetailsofYourProperty;
