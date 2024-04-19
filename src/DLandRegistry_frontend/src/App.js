import React,{useEffect,useState} from "react";
import { BrowserRouter as Router, Route,Redirect,Switch} from "react-router-dom";
import { DLandRegistry_backend } from "../../declarations/DLandRegistry_backend";
import AddMyProperty from "./pages/addmyproperty";
import About from "./pages/about";
import AllProperties from "./pages/allproperties";
import GetDetailsofYourProperty from "./pages/getdetailsofyourproperty";
import Home from "./pages/home";
import Header from "./common/elements/header";
import Footer from "./common/elements/footer";


function App(){ 
const [ps,setps]=useState([]);
async function addProperty(p){
    // await DLandRegistry_backend.add(p);
    // const x=await DLandRegistry_backend.get(); 
    // setps(x);
    setps([...ps,p]);
}
    useEffect(()=>{
        async function t(){
        //get data from backend for the first time
        // const x= await DLandRegistry_backend.get();
        // setps(x);
        }
        t();
    }, []);
    return <Router>
        <Header></Header>
        <main>
        <Switch>
            <Route path="/" exact ><Home></Home></Route>
            <Route path="/getyourpropertydetails" exact><GetDetailsofYourProperty ps={ps} ></GetDetailsofYourProperty></Route>
            <Route path="/allproperties" exact><AllProperties properties={ps}></AllProperties></Route>
            <Route path="/about" exact><About></About></Route>
            <Route path="/addmyproperty" exact><AddMyProperty add={addProperty}></AddMyProperty></Route>
            <Redirect ></Redirect>
        </Switch></main>
        <Footer></Footer>
    </Router>
}
export default App;