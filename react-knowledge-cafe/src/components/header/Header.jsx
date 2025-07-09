import React from 'react';
import profile from '../../assets/images/profile.png';
const Header = () => {
    return (
        <div className='flex justify-between items-center p-4 bg-white text-black border-b-2'>
            <h1 className='text-3xl font-bold'>Knowledge Cafe</h1>
            <img src={profile} alt="Profile" className="rounded-full w-12 h-12" />
        </div>
    );
};

export default Header;