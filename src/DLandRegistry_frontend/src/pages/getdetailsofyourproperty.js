import React,{useState} from "react";
import AllDetailsOfaProperty from "./alldetailsofproperty";
function GetDetailsofYourProperty(props){
    const [content,setcontent]=useState(<div className="flex justify-center"><div className="mx-32 flex-col justify-center align-middle items-center my-10">
    <h1 className="text-center font-bold underline my-4 text-3xl italic">Get my property details:</h1>
   <div className="sm:col-span-4">
       <label className="block text-sm font-medium leading-6 text-gray-900">Aadhar Number:</label>
       <div className="mt-2">
           <input  name="aadhar" type="number"  className="px-2 block w-96 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
       </div>      
   </div>
   <div className="col-span-full">
               <label  className="block text-sm font-medium leading-6 text-gray-900">Property Id</label>
               <div className="mt-2">
                   <input type="text" name="id"  className="px-2 block w-96 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
               </div>
           </div>   
   <div className="mt-6 flex items-center justify-start gap-x-6">
       <button type="button" className="text-sm font-semibold leading-6 text-gray-900">Cancel</button>
       <button type="submit" onClick={sub} className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get Details</button>
   </div>
</div>
</div>);
    const [aadhar,setaadhar]=useState("");
    const [id,setId]=useState("");
    function eventHandler(event){
        if(event.target.name==="aadhar"){
            aadhar=setaadhar(event.target.value);
        }
        else{
            id=setId(event.target.value);
        }
    }
    async function sub(event){
        setcontent(<AllDetailsOfaProperty property={props.getmyproperty()}></AllDetailsOfaProperty>)
        event.preventDefault();
    }
    return content;
    
}
export default GetDetailsofYourProperty;