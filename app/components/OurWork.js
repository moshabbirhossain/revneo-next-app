import React from 'react';

const OurWork = () => {
    return (
        <div className="hero min-h-screen mt-12">
            <div className="hero-content text-center">
                <div className="w-full">
                    <h4 className='border-2 border-blue-500  max-w-60 rounded bg-gray-700 text-white mx-auto font-semibold text-3xl my-12 py-1'>Our Work</h4>
                    <h1 className="text-7xl font-semibold">Transforming Ideas <br /> <span className='text-blue-700'>into Digital Excellence</span></h1>
                    <p className="text-2xl font-medium py-6 max-w-[900px] mx-auto mt-8 mb-10">
                        From Concept to Launch: The Journey of Our Recent Endeavors
                    </p>
                    {/* card start */}
                    <div className='w-full grid grid-cols-2 gap-12'>
                        <div className="card glass w-full">

                            <figure className='cursor-pointer hover:scale-105'>
                                <img
                                    src="https://i.ibb.co/cFCzLjw/LLOWx6b-DBZ2x-OFWg5-Kz-ZOm-TMU.jpg"
                                    alt="car!" />
                            </figure>


                            <div className="flex justify-between items-center">
                                <div className='text-start p-4'>
                                    <h2 className='card-title'>Life hack</h2>
                                    <p>How to park your car at your garage?</p>
                                </div>

                                <div className='pr-4 text-nowrap'>
                                    <button className="btn btn-primary">Learn now!</button>
                                </div>

                            </div>
                        </div>
                        <div className="card glass w-full">
                            <figure className='cursor-pointer'>
                                <img
                                    src="https://i.ibb.co/DRJ68yv/Sa-JAX2i-D0yn0-TVek-XN6-GHJq-Bi-Vo.jpg"
                                    alt="car!" />
                            </figure>
                            <div className="flex justify-between items-center">
                                <div className='text-start p-4'>
                                    <h2 className='card-title'>Life hack</h2>
                                    <p>How to park your car at your garage?</p>
                                </div>

                                <div className='pr-4 text-nowrap'>
                                    <button className="btn btn-primary">Learn now!</button>
                                </div>

                            </div>
                        </div>
                        <div className="card glass w-full">
                            <figure className='cursor-pointer'>
                                <img
                                    src="https://i.ibb.co/d0qnXbM/m-CI26-Hk-Qwm6-P41vxs-Mhfw-JJb6i-I.jpg"
                                    alt="car!" />
                            </figure>
                            <div className="flex justify-between items-center">
                                <div className='text-start p-4'>
                                    <h2 className='card-title'>Life hack</h2>
                                    <p>How to park your car at your garage?</p>
                                </div>

                                <div className='pr-4 text-nowrap'>
                                    <button className="btn btn-primary">Learn now!</button>
                                </div>

                            </div>
                        </div>
                        <div className="card glass w-full">
                            <figure className='cursor-pointer'>
                                <img
                                    src="https://i.ibb.co/cQP18ny/SEvdc22thk-JWyqr0-JNr-OLy-HN4-A.jpg"
                                    alt="car!" />
                            </figure>
                            <div className="flex justify-between items-center">
                                <div className='text-start p-4'>
                                    <h2 className='card-title'>Life hack</h2>
                                    <p>How to park your car at your garage?</p>
                                </div>

                                <div className='pr-4 text-nowrap'>
                                    <button className="btn btn-primary">Learn now!</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurWork;