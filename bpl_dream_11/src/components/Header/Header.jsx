import React from 'react';
import headerLogo from '../../assets/logo.png';
import { MdStars } from "react-icons/md";
const Header = ({ totalCoins }) => {
    return (
       <header className='bg-white border-b-gray-100 shadow-2xs p-4 flex justify-between items-center'>
        <div className="logo">
          <img src={headerLogo} alt="Dream 11 Logo" className='w-18 h-18' />
        </div>
        <div className="menu">
          <ul className='flex space-x-4 text-black font-semibold'>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">Fixture</a></li>
            <li><a href="#contact">Teams</a></li>
            <li><a href="#contact">Schedules</a></li>
            <li>
              <div className="flex items-center "><span>{totalCoins} Coin</span> <MdStars className='text-yellow-500 font-bold text-2xl' /></div>
            </li>
          </ul>
        </div>
      </header>
    );
};

export default Header;