import React from 'react';
import bg_image from '../../assets/bg-shadow.png';
const Banner = () => {
    return (
        <div className='relative backdrop-blur-md' style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' }}>
            {/* <img src={bg_image} alt="Banner Background" className='w-full rounded-md bg-cover h-64 object-cover' /> */}
            <div className='absolute backdrop-blur-2xl inset-0 flex items-center justify-center'>
                <h1 className='text-white text-2xl font-bold'>Welcome to Dream 11</h1>
            </div>
        </div>
    );
};

export default Banner;