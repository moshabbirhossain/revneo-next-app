import React from 'react';
import { FaHtml5 } from "react-icons/fa";

const Integrations = () => {
    const items = 8;

    // Create an array of items to map over
    const itemArray = new Array(items).fill(null);
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
                    <div className='relative mx-auto   w-[500px] h-[500px] rounded-full'>
            <div className='absolute top-1/2 left-1/2  transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center'>
                {itemArray.map((_, index) => (
                    <FaHtml5
                        key={index}
                        className='absolute animate-circle w-24 h-24 border-solid border-2 bg-black rounded-full text-white p-4'
                        // Calculate delay based on item index and total items for even spacing
                        style={{ animationDelay: `${(index * 10) / items}s` }} // Spread evenly across 10s duration
                    />
                ))}
            </div>
            <div className='absolute top-1/2 left-1/2  transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center'>
                {itemArray.map((_, index) => (
                    <FaHtml5
                        key={index}
                        className='absolute animate-circle2 w-24 h-24 border-solid border-2 bg-black rounded-full text-white p-4'
                    />
                ))}
            </div>
            
        </div>
                </div>
            </div>
        </div>
    );
};

export default Integrations;