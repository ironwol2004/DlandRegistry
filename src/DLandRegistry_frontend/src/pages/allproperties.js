import React from "react";

function AllProperties(props) {
    console.log(props.properties);
    return (
        <>  
            <div className="p-6 max-w-sm mx-auto bg-slate-50 rounded-xl shadow-md flex items-center space-x-4 my-6">
            <h1 className="text-2xl font-bold text-center text-gray-700 mb-6 mt-4">Details of registered Properties</h1>
                {props.properties.map((property) => {
                    return (
                        <div className="p-4 bg-white shadow-lg rounded-lg">
                            {/* <h1 className="text-lg font-bold mb-2">All details of a property</h1> */}
                            <h2 className="text-base font-medium mb-1">{property.name}</h2>
                            {/* <h3 className="text-sm font-light mb-1">{property.aadhar}</h3>
                            <h3 className="text-sm font-light mb-1">{property.address}</h3>
                            <h3 className="text-sm font-light mb-1">{property.id}</h3> */}
                            <h3 className="text-sm font-light mb-1">{property.city}</h3>
                            <h3 className="text-sm font-light mb-1">{property.state}</h3>
                            <h3 className="text-sm font-light mb-1">{property.code}</h3>
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default AllProperties;
