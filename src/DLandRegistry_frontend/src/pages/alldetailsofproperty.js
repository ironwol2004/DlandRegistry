import React from "react";
function AllDetailsOfaProperty(props){
    var x=props.property===null?<h1>Not found</h1>:<div><h2 className="text-base font-semibold mb-1">{props.property.name}</h2>
    <h3 className="text-sm font-light mb-1"><span className="font-semibold">Aadhar: </span>{props.property.aadhar}</h3>
    <h3 className="text-sm font-light mb-1"><span className="font-semibold">Address: </span>{props.property.address}</h3>
    <h3 className="text-sm font-light mb-1"><span className="font-semibold">Property id: </span>{props.property.id}</h3>
    <h3 className="text-sm font-light mb-1"><span className="font-semibold">City: </span>{props.property.city}</h3>
    <h3 className="text-sm font-light mb-1"><span className="font-semibold">State: </span>{props.property.state}</h3>
    <h3 className="text-sm font-light mb-1"><span className="font-semibold">Pincode: </span>{props.property.code}</h3></div>;
    return <div ><h1 className="text-2xl font-bold text-center text-gray-700 mb-6">All details of a property</h1>
        {x}
    </div>
}
export default AllDetailsOfaProperty;