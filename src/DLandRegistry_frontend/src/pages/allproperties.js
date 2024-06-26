import React from "react";

function AllProperties(props) {
    return (
            <div className="p-6 w-2/3 mx-auto bg-slate-50  rounded-xl shadow-md flex-col items-center space-x-4 my-6">
           <div><h1 className="text-2xl font-bold text-center text-gray-700 mb-6 mt-4 w-88">Details of registered Properties</h1></div> 
               <div className="grid grid-cols-2  gap-10 mx-5 px-5 my-2 py-2"> {props.properties.map((property) => {
                    return (
                        <div key={property.id} className="p-4 bg-white shadow-lg rounded-lg w-50 hover:bg-slate-200">
                            <h3 className="text-sm mb-1 font-semibold">{property.address}</h3>
                            <h3 className="text-sm font-light mb-1"><span className="font-semibold">City: </span>{property.city}</h3>
                            <h3 className="text-sm font-light mb-1"><span className="font-semibold">State: </span>{property.state}</h3>
                            <h3 className="text-sm font-light mb-1"><span className="font-semibold">Pincode: </span>{property.code}</h3>
                        </div>
                    );
                })}</div>
            </div>
    );
}

export default AllProperties;
