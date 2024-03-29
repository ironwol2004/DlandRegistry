import React from "react";
function AllDetailsOfaProperty(props){
    var x=props.property===null?<h1>Not found</h1>:<div><h2>{props.property.name}</h2>
    <h3>{props.property.aadhar}</h3>
    <h3>{props.property.address}</h3>
    <h3>{props.property.id}</h3>
    <h3>{props.property.city}</h3>
    <h3>{props.property.state}</h3></div>;
    return <div><h1>All details of a property</h1>
        {x}
    </div>
}
export default AllDetailsOfaProperty;