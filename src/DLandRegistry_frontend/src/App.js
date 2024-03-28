import React,{useEffect,useState} from "react";
import { BrowserRouter as Router, Route,Redirect,Switch} from "react-router-dom";

import AddMyProperty from "./pages/addmyproperty";
import About from "./pages/about";
import AllProperties from "./pages/allproperties";
import GetDetailsofYourProperty from "./pages/getdetailsofyourproperty";
import Home from "./pages/home";
import Header from "./common/elements/header";
import Footer from "./common/elements/footer";
import AllDetailsOfaProperty from "./pages/alldetailsofproperty";

function App(){
    
const [properties,setProperties]=useState([]);
function addProperty(p){
    setProperties(prevgoals=>prevgoals.concat(p));
    console.log(properties);
}
async function getmyproperty(aadhar,id){
    properties.forEach(element => {
        if (element.id===id && element.aadhar===aadhar){
            console.log(element);
            return element;
        }
    });
    return null;
}
    useEffect(()=>{
        async function t(){
        //get data from backend for the first time
        }
        t();
    }, []);
    return <Router>
        <Header></Header>
        <main>
        <Switch>
            <Route path="/" exact ><Home></Home></Route>
            <Route path="/getyourpropertydetails" exact><GetDetailsofYourProperty getmyproperty={getmyproperty}></GetDetailsofYourProperty></Route>
            <Route path="/allproperties" exact><AllProperties properties={properties}></AllProperties></Route>
            <Route path="/about" exact><About></About></Route>
            <Route path="/addmyproperty" exact><AddMyProperty add={addProperty}></AddMyProperty></Route>
            <Redirect ></Redirect>
        </Switch></main>
        <Footer></Footer>
    </Router>
}
export default App;