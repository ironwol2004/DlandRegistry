import React from "react";
import pic from "../images/landingLogo.jpg";
import Typewriter from 'typewriter-effect';

function Home(props) {
  return (
    <div className="flex flex-col items-center bg-blue-50 min-h-screen my-10">
      <div className="flex flex-col justify-center items-center bg-white shadow-md rounded-lg p-10 m-10">

        

        <h1 className="text-4xl font-bold text-purple-950 text-center">
          
        <div className="text-4xl font-bold text-purple-950 text-center">
          <Typewriter
            options={{
              strings: ['Your Land', 'Your Legacy'],
              autoStart: true,
              loop: true,
              delay: 50,
            }}
          />
        </div>Immutable, Indelible, In the Chain.</h1>
        <p className="mt-4 text-blue-900 text-center">
          Securing your legacy in the ledger is about preserving and protecting your digital assets, including land records, digital currencies, and online businesses.
        </p>
      </div>
      <div className="flex justify-center items-center">
        <img className="h-60" src={pic} alt="Home Image" />
      </div>
      <div className="flex flex-col justify-center items-center bg-white shadow-md rounded-lg p-10 m-5 my-10">
        <h2 className="text-3xl font-bold text-purple-950 text-center">Why Choose Us?</h2>
        <p className="mt-4 text-blue-900 text-center ">
          We provide the best services for securing your digital assets. Our platform is reliable, secure, and trusted by lot of users.
        </p>
      </div>
    </div>
  );
}

export default Home;
