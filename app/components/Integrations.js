import React from 'react';
import { FaHtml5 } from "react-icons/fa";

const Integrations = () => {
    return (
        <div className="hero min-h-screen mt-12">
            <div className="hero-content text-center">
                <div className="w-full">
                    <h4 className='border-2 border-blue-500  max-w-60 rounded bg-gray-700 text-white mx-auto font-semibold text-3xl my-12 py-1'>Integrations</h4>
                    <h1 className="text-7xl font-semibold">Omnichannel<span className='text-blue-700'> Integrations</span></h1>
                    <p className="text-2xl font-medium py-6 max-w-[900px] mx-auto mt-8 mb-10">
                        We seamlessly integrate software, apps, and digital tools to supercharge your website, product, and campaign performance.
                    </p>
                    {/* react icons */}
                    <div className='relative'>
                        <div className='flex'>
                            <FaHtml5 className='w-24 h-24 border-solid border-2 bg-black rounded-full text-white p-4' />
                            <FaHtml5 className='w-24 h-24 border-solid border-2 bg-black rounded-full text-white p-4' />
                            <FaHtml5 className='w-24 h-24 border-solid border-2 bg-black rounded-full text-white p-4' />
                            <FaHtml5 className='w-24 h-24 border-solid border-2 bg-black rounded-full text-white p-4' />
                            <FaHtml5 className='w-24 h-24 border-solid border-2 bg-black rounded-full text-white p-4' />
                        </div>
                        {/* <div className='flex'>
                            <FaHtml5 className='w-24 h-24 border-solid border-2 bg-black rounded-full text-white p-4' />
                            <FaHtml5 className='w-24 h-24 border-solid border-2 bg-black rounded-full text-white p-4' />
                            <FaHtml5 className='w-24 h-24 border-solid border-2 bg-black rounded-full text-white p-4' />
                            <FaHtml5 className='w-24 h-24 border-solid border-2 bg-black rounded-full text-white p-4' />
                            <FaHtml5 className='w-24 h-24 border-solid border-2 bg-black rounded-full text-white p-4' />
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Integrations;