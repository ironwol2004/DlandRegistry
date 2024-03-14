import React,{useEffect} from "react";
import { BrowserRouter as Router, Route,Redirect,Switch} from "react-router-dom";

import AddMyProperty from "./pages/addmyproperty";
import About from "./pages/about";
import AllProperties from "./pages/allproperties";
import GetDetailsofYourProperty from "./pages/getdetailsofyourproperty";
import Home from "./pages/home";
import Header from "./common/elements/header";
import Footer from "./common/elements/footer";
function App(){
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
            <Route path="/getyourpropertydetails" exact><GetDetailsofYourProperty></GetDetailsofYourProperty></Route>
            <Route path="/allproperties" exact><AllProperties></AllProperties></Route>
            <Route path="/about" exact><About></About></Route>
            <Route path="/addmyproperty" exact><AddMyProperty></AddMyProperty></Route>
            <Redirect ></Redirect>
        </Switch></main>
        <Footer></Footer>
    </Router>
}
export default App;