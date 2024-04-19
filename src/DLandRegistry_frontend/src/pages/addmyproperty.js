import React, { useState } from "react";
function AddMyProperty(props) {
    const [property, setProperty] = useState({
        name: "",
        aadhar: "",
        address: "",
        id: "",
        city: "",
        state: "",
        code: ""
    });
    function eventHandler(event) {
        setProperty({
            ...property,
            [event.target.name]: event.target.value,
        });
    }
    async function sub(event) {
        const newp = property;
        if (newp.aadhar.length == 12 && newp.address.length != 0 && newp.city.length != 0 && newp.state.length != 0 && newp.id.length != 0 && newp.code.length == 6) {
            props.add(newp);
            setProperty({
                name: "",
                aadhar: "",
                address: "",
                id: "",
                city: "",
                state: "",
                code: ""
            });
            alert("Property Added Successfully");
            event.preventDefault();
        }
        else {
            alert("Invalid credentails!");
            return;
        }
    }
    return (
        <div className="min-h-screen bg-gray-100 flex justify-center items-center mt-10 mb-10">
            <div className="bg-white p-8 rounded-lg shadow-md w-full md:w-2/3 lg:w-1/2 mb-10">
                <h1 className="text-2xl font-bold text-center text-gray-700 mb-6">Add My Property</h1>

                <form onSubmit={sub} className="space-y-4 ">
                    <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
                    <p className="mt-1 text-sm leading-6 text-gray-600">Use correct details of your property according to registry documents.</p>
                    <div>
                        <label className="text-sm font-semibold text-gray-600 block">Name</label>
                        <input type="text" name="name" value={property.name} onChange={eventHandler} required className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                    </div>
                    <div>
                        <label className="text-sm font-semibold text-gray-600 block">Aadhar Number</label>
                        <input type="number" name="aadhar" value={property.aadhar} onChange={eventHandler} required className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                    </div>
                    <div>
                        <label className="text-sm font-semibold text-gray-600 block">Property Address</label>
                        <input type="text" name="address" value={property.address} onChange={eventHandler} required className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                    </div>
                    <div>
                        <label className="text-sm font-semibold text-gray-600 block">Property Id</label>
                        <input type="text" name="id" value={property.id} onChange={eventHandler} required className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                    </div>
                    <div className="flex justify-between space-x-4">
                        <div className="w-1/2">
                            <label className="text-sm font-semibold text-gray-600 block sm:col-span-2">City</label>
                            <input type="text" name="city" value={property.city} onChange={eventHandler} required className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                        </div>
                        <div className="w-1/2">
                            <label className="text-sm font-semibold text-gray-600 block sm:col-span-2">State</label>
                            <input type="text" name="state" value={property.state} onChange={eventHandler} required className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                        </div>
                    </div>

                    <div>
                        <label className="text-sm font-semibold text-gray-600 block">Pincode</label>
                        <input type="text" name="pincode" value={property.pincode} onChange={eventHandler} required className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                    </div>
                    <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                        Add Property
                    </button>
                </form>
            </div>
        </div>
    );
}

export default AddMyProperty;
