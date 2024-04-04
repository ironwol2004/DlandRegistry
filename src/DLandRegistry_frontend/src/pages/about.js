import React from "react";
import about from '../../src/images/about.png';

function About() {
    return (
        <>
            <div className="relative h-48">
                <img src={about} alt="About us Image" className="opacity-70 h-full w-full border-solid border-2 border-gray-400" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                    <p className="font-semibold text-2xl mx-0 text-purple-950">Revolutionizing Land Ownership, Block by Block</p>
                </div>
            </div>
            <div className="flex">
                <div className="w-1/2">
                    <h1 className="w-32 mx-20 my-12 mb-3 text-2xl text-purple-950 font-bold">Behind the success!</h1>
                    <p className="w-60 mx-20 mb-6 text-blue-900">A decentralized land registry leverages blockchain technology for secure, transparent, and efficient land registration, enhancing accuracy of records. Its success hinges on effective collaborations, institutional dynamics, and governance structures that ensure democratic outcomes.</p>
                </div>
                <div className="w-1/2 my-16 mx-16">
                    <h1 className="text-2xl font-bold text-purple-950">Meet Our Team</h1>
                    <div className="flex text-blue-900">
                        <p className="inline-block my-12 text-xl">Deepak</p>
                        <p className="inline-block px-12 my-12 text-xl">Ashish</p>
                    </div>
                </div>
            </div>
        </>
    );
    

}
export default About;