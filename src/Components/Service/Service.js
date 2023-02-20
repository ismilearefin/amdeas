import React from 'react';
import { GoPrimitiveDot } from 'react-icons/go';

const Service = () => {
    return (
        <div className='lg:px-[18.75rem] lg:flex py-10'>
            <div className='w-[530px]'>
                <div className='min-w-[33rem] min-h-[33rem] rounded-[1.5rem] bg-[#1C0C5B] flex'>
                    <div className='w-[4rem] min-h-[33rem] relative bg-[#7C5CFF]  rounded-tl-[1.5rem] rounded-bl-[1.5rem]'>
                        <p className='absolute  rotate-[-90deg] bottom-[100px] right-[-62px] text-white font-display text-base w-[180px] font-bold text-center'>LEMONBIVE SERVICES</p>
                        <hr className='w-[277px] rotate-[-90deg] absolute top-[170px] right-[-111px]'/>
                    </div>
                    <div className='font-display text-white text-lg py-[65px] leading-9 w-full relative'> 
                            <div className='flex justify-start w-full'>
                                <div className='absolute w-[380px] h-[328px] flex flex-col justify-between '>
                                    <div className='h-[48px] bg-[#32226B] flex justify-between items-center rounded-tr-[20px] rounded-br-[20px] px-5'>
                                        <p>Headless CMS Websites</p>
                                        <GoPrimitiveDot className='text-[#7C5CFF] w-3'></GoPrimitiveDot>
                                    </div>
                                    <div className='h-[48px] bg-[#32226B] flex justify-between items-center rounded-tr-[20px] rounded-br-[20px] px-5'>
                                        <p>Headless CMS Websites</p>
                                        <GoPrimitiveDot className='text-[#7C5CFF] w-3'></GoPrimitiveDot>
                                    </div>
                                    <div className='h-[48px] bg-[#32226B] flex justify-between items-center rounded-tr-[20px] rounded-br-[20px] px-5'>
                                        <p>Headless CMS Websites</p>
                                        <GoPrimitiveDot className='text-[#7C5CFF] w-3'></GoPrimitiveDot>
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-end w-full'>
                                <div className='absolute w-[380px] h-[328px] bottom-16 flex flex-col justify-between text-start'>
                                    <div className='h-[48px] relative bg-[#32226B] flex gap-3 items-center rounded-tl-[20px] rounded-bl-[20px] px-5'>
                                        <GoPrimitiveDot className='text-[#EB70C8] w-3'></GoPrimitiveDot>
                                        <p>Headless CMS Websites</p>
                                    </div>
                                    <div className='h-[48px] bg-[#32226B] flex gap-3 items-center rounded-tl-[20px] rounded-bl-[20px] px-5'>
                                        <GoPrimitiveDot className='text-[#EB70C8] w-3'></GoPrimitiveDot>
                                        <p>Headless CMS Websites</p>
                                    </div>
                                    <div className='h-[48px] bg-[#32226B] flex gap-3 items-center rounded-tl-[20px] rounded-bl-[20px] px-5'>
                                        <GoPrimitiveDot className='text-[#EB70C8] w-3'></GoPrimitiveDot>
                                        <p>Headless CMS Websites</p>
                                    </div>
                                </div>
                            </div>
                            
                    </div>
                </div>
            </div>
            <div className='w-1/2'>

            </div>
            
        </div>
    );
};

export default Service;