import React from 'react';
import logo from '../../assets/Logo.png';

const Navbar = () => {
    return (
        <div className='w-full bg-transparent lg:flex justify-between items-center min-h-[6.25rem] lg:px-[18.75rem]'>
                    <img src={logo} alt='logo'/>
                    <div>
                        <ul className='lg:flex gap-8 text-white'>
                            <li className='hover:text-[#7C5CFF] '>Menu 01</li>
                            <li className='hover:text-[#7C5CFF]'>Menu 02</li>
                            <li className='hover:text-[#7C5CFF]'>Menu 03</li>
                            <li className='hover:text-[#7C5CFF]'>Menu 04</li>
                            <li className='hover:text-[#7C5CFF]'>Menu 05</li>
                        </ul>
                    </div>
        </div>
    );
};

export default Navbar;