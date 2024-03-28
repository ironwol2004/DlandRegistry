import React from "react";
function AllProperties(props){
    return <div><h1>All Properties</h1>
    {props.properties.map(property=><div><h1>All details of a property</h1>
        <h2>{props.property.name}</h2>
        <h3>{props.property.aadhar}</h3>
        <h3>{props.property.address}</h3>
        <h3>{props.property.id}</h3>
        <h3>{props.property.city}</h3>
        <h3>{props.property.state}</h3>
        <hr></hr>
    </div>)}
    </div>
}
export default AllProperties;