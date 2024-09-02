import React from 'react';

const AboutUs = () => {
    return (
        <div className="hero min-h-screen mt-12">
            <div className="hero-content text-center">
                <div className="w-full">
                    <h4 className='border-2 border-blue-500  max-w-60 rounded bg-gray-700 text-white mx-auto font-semibold text-3xl my-12 py-1'>About Us</h4>
                    <h1 className="text-7xl font-semibold">Driving Digital Evolution and <br /> <span className='text-blue-700'>Strategic Excellence</span></h1>
                    <p className="text-2xl font-medium py-6 max-w-[900px] mx-auto mt-8 mb-10">
                        We create digital solutions that push boundaries, elevate user experiences, and drive business growth.
                    </p>
                    {/* stat start */}
                    <div className=" flex space-x-20">
                        <div className="stat border-2 py-6 rounded-lg bg-gray-700 ">
                            <div className="stat-value text-7xl font-semibold text-white">+100</div>
                            <div className="stat-title text-xl font-medium text-white">Clients</div>
                        </div>

                        <div className="stat border-2 py-6 rounded-lg bg-gray-700 ">
                            <div className="stat-value text-7xl font-semibold text-white">+10</div>
                            <div className="stat-title text-xl font-medium text-white">Team Members</div>
                        </div>

                        <div className="stat border-2 py-6 rounded-lg bg-gray-700 ">
                            <div className="stat-value text-7xl font-semibold text-white">+50</div>
                            <div className="stat-title text-xl font-medium text-white">New Projects</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default AboutUs;