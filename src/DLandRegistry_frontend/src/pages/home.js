import React from "react";
import pic from "../images/landingLogo.jpg";

function Home(props) {
    return (
        <div className="flex px-10 py-12 w-3/5">
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl font-bold">Your Land, Your Legacy: Immutable, Indelible, <br />In the Chain.</h1>
            <p className="px-11 w-96 py-4">
              Securing your legacy in the ledger is about preserving and protecting your digital assets, including land records, digital currencies, and online businesses.
            </p>
          </div>
          <div className="flex justify-center items-center ml-auto">
            <img className="h-60 w-60" src={pic} alt="Home Image" />
          </div>
        </div>
      );
}
export default Home;