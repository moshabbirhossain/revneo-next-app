import React from 'react';

const Hero = () => {
    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content text-center">
                    <div className="w-full">
                        <h1 className="text-9xl font-semibold">Turning Digital Dreams to Reality</h1>
                        <p className="text-2xl font-medium py-6 max-w-[620px] mx-auto">
                            We build websites, drive traffic, and fuel conversions for industry leaders & startups.
                        </p>
                        <button className="btn btn-primary w-72 text-xl font-semibold">Get Started</button>
                    </div>
                </div>
            </div>
            <div>
                <video src="/vidoes/Revneo.mp4" type="video/mp4" autoPlay muted loop className='mx-auto w-3/4 rounded-lg'>See video</video>
            </div>
        </div>
    );
};

export default Hero;