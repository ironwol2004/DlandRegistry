import React from "react";
import o from '../images/about.png';

function About() {
    return (
        <div className="bg-gray-100 py-10">
            <div className="relative h-64 mx-auto shadow-lg card bg-white max-w-4xl">
                <img src={o} alt="About us" className="opacity-80 h-full w-full object-cover" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                    <p className="font-bold text-3xl text-indigo-700 bg-white bg-opacity-75 rounded px-4 bg-transparent">Revolutionizing Land Ownership, Block by Block</p>
                </div>
            </div>
            <div className="flex flex-wrap justify-center gap-10 mt-10 mb-10">
                <div className="card bg-white shadow-xl p-8 w-full md:w-1/2">
                    <h1 className="text-3xl text-indigo-700 font-bold mb-4">Behind the Success!</h1>
                    <p className="text-lg text-gray-700">A decentralized land registry leverages blockchain technology for secure, transparent, and efficient land registration, enhancing accuracy of records. Its success hinges on effective collaborations, institutional dynamics, and governance structures that ensure democratic outcomes.</p>
                </div>
                <div className="card bg-white shadow-xl p-8 w-full md:w-1/2">
                    <h1 className="text-3xl text-indigo-700 font-bold mb-4 text-center">Meet Our Team</h1>
                    <div className="flex flex-col md:flex-row md:items-center text-gray-700 justify-evenly">
                        <div>
                            <p className="text-xl mb-4 md:mb-0 md:mr-6">Deepak</p>
                            <p>Founder</p>
                        </div>
                        <div>
                            <p className="text-xl">Ashish</p>
                            <p>Co-Founder</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
