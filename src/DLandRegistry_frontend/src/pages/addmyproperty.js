import React,{useState} from "react";
function AddMyProperty(props){
    const [property,setProperty]=useState({
    name:"",
    aadhar:"",
    address:"",
    id:"",
    city:"",
    state:"",
    code:""
});
function eventHandler(event) {
    setProperty({
      ...property,
      [event.target.name]: event.target.value,
    });
  }
    async function sub(event){
        const newp=property;
        props.add(newp);
        console.log(newp);
        event.preventDefault();
    }
    return <div>
        <h1 className="text-center font-bold underline my-4 text-3xl italic">Add my property</h1>

        <div className="border-b border-gray-900/10 pb-12 mx-7 my-8">
            <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">Use correct details of your property according to registry documents.</p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                    <label className="block text-sm font-medium leading-6 text-gray-900">Name</label>
                    <div className="mt-2">
                        <input type="text" name="name"  value={property.name} onChange={eventHandler} className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                </div>
                <div className="sm:col-span-4">
                    <label  className="block text-sm font-medium leading-6 text-gray-900">Aadhar Number:</label>
                    <div className="mt-2">
                        <input  name="aadhar" value={property.aadhar} onChange={eventHandler} type="number" className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>

                </div>
                <div className="col-span-full">
                    <label  className="block text-sm font-medium leading-6 text-gray-900">Property address (as per docs.)</label>
                    <div className="mt-2">
                        <input type="text" name="address"  value={property.address} onChange={eventHandler}  className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                </div>

                <div className="col-span-full">
                    <label className="block text-sm font-medium leading-6 text-gray-900">Property Id</label>
                    <div className="mt-2">
                        <input type="text" name="id" value={property.id} onChange={eventHandler} className="px-2 block w-96 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                </div>

                <div className="sm:col-span-2 sm:col-start-1">
                    <label  className="block text-sm font-medium leading-6 text-gray-900">City</label>
                    <div className="mt-2">
                        <input type="text" name="city" value={property.city} onChange={eventHandler}  className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                </div>

                <div className="sm:col-span-2">
                    <label  className="block text-sm font-medium leading-6 text-gray-900">State / Province</label>
                    <div className="mt-2">
                        <input type="text" name="state" value={property.state} onChange={eventHandler}  className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                </div>

                <div className="sm:col-span-2">
                    <label  className="block text-sm font-medium leading-6 text-gray-900">ZIP / Postal code</label>
                    <div className="mt-2">
                        <input type="text" name="code"  value={property.code} onChange={eventHandler}  className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                </div>
                <div className="mt-6 flex items-center justify-end gap-x-6">
                    <button type="button" className="text-sm font-semibold leading-6 text-gray-900">Cancel</button>
                    <button type="submit" onClick={sub} className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
                </div>
            </div>
        </div>
    </div>
}
export default AddMyProperty;
