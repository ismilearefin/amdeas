import React from 'react';
import vector from '../../assets/Vector3.png'
import vector2 from '../../assets/Vector2.svg'
// import mouse from '../../assets/mouse.png'
import { BsDot } from 'react-icons/bs';


const HeroSection = () => {
    return (
        <div className=' min-h-[55rem] relative flex flex-col justify-center items-center max-w-[120rem]'>
            <img src={vector2} alt='b' className='blur-[6.25rem] absolute bottom-20 w-[37.5rem]'></img>
            <img src={vector} alt='a' className='blur-[6.25rem] absolute top-[15.625rem] w-[31.25rem]'></img>
            <h1 className='text-center relative z-10 text-[4rem] text-white font-display font-bold'>Amdeas group of companies<br/> consists of agency services and<br/> software products</h1>
            <div className='absolute bottom-[6.25rem]'>
                <div className='bg-[#ffffff1a] rounded-[50px] w-6 h-[40px] flex justify-center border-[#ffffff33] border-[1.5px]'>
                    <BsDot className='text-[#CFC3FF] animate-bounce'></BsDot>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;