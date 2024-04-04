import React from "react";
function AllProperties(props){
    console.log(props.properties);
    return <div><h1>All Properties</h1>
    {props.properties.map((property)=>{return <div><h1>All details of a property</h1>
        <h2>{property.name}</h2>
        <h3>{property.aadhar}</h3>
        <h3>{property.address}</h3>
        <h3>{property.id}</h3>
        <h3>{property.city}</h3>
        <h3>{property.state}</h3>
        <h3>{property.code}</h3>
        <hr></hr>
    </div>})}
    </div>
}
export default AllProperties;