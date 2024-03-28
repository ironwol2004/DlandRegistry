import React from "react";
function AllDetailsOfaProperty(props){
    return <div><h1>All details of a property</h1>
        <h2>{props.property.name}</h2>
        <h3>{props.property.aadhar}</h3>
        <h3>{props.property.address}</h3>
        <h3>{props.property.id}</h3>
        <h3>{props.property.city}</h3>
        <h3>{props.property.state}</h3>
    </div>
}
export default AllDetailsOfaProperty;