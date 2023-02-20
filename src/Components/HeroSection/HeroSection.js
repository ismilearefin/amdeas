import React from 'react';
import vector from '../../assets/Vector3.png'
import vector2 from '../../assets/Vector2.svg'
import mouse from '../../assets/mouse.png'


const HeroSection = () => {
    return (
        <div className=' min-h-[880px] relative flex flex-col justify-center items-center max-w-[1920px]'>
            <img src={vector2} alt='b' className='blur-[100px] absolute bottom-20 w-[600px]'></img>
            <img src={vector} alt='a' className='blur-[100px] absolute top-[250px] w-[500px]'></img>
            <h1 className='text-center relative z-10 text-[64px] text-white font-display font-bold'>Amdeas group of companies<br/> consists of agency services and<br/> software products</h1>
            <img src={mouse} alt='mouse' className='absolute bottom-[100px]'/>
            
        </div>
    );
};

export default HeroSection;