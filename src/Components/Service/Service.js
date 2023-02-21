import React from 'react';
import { GoPrimitiveDot } from 'react-icons/go';

const Service = () => {
    return (
        <div className='max-w-[75.4375rem] mx-auto lg:flex mt-[7.5em] mb-[11.93em]'>
            <div className='w-[33.12em]'>
                <div className='min-w-[33rem] min-h-[33rem] rounded-[1.5rem] bg-[#1C0C5B] flex'>
                    <div className='w-[4rem] min-h-[33rem] relative bg-[#7C5CFF]  rounded-tl-[1.5rem] rounded-bl-[1.5rem]'>
                        <p className='absolute  rotate-[-90deg] bottom-[6.25rem] right-[-3.87rem] text-white font-display text-base w-[11.25rem] font-bold text-center'>LEMONBIVE SERVICES</p>
                        <hr className='w-[17.31rem] rotate-[-90deg] opacity-20 absolute top-[10.62rem] right-[-6.93rem]'/>
                    </div>
                    <div className='font-display text-white text-lg py-[4.06rem] leading-9 w-full relative'> 
                            <div className='flex justify-start w-full'>
                                <div className='absolute w-[23.75rem] h-[20.5rem] flex flex-col justify-between '>
                                    <div className='h-[3rem] bg-[#32226B] flex justify-between items-center rounded-tr-[1.56rem] rounded-br-[1.56rem] px-5'>
                                        <p>Headless CMS Websites</p>
                                        <GoPrimitiveDot className='text-[#7C5CFF] w-3'></GoPrimitiveDot>
                                    </div>
                                    <div className='h-[3rem] bg-[#32226B] flex justify-between items-center rounded-tr-[1.56rem] rounded-br-[1.56rem] px-5'>
                                        <p>Headless CMS Websites</p>
                                        <GoPrimitiveDot className='text-[#7C5CFF] w-3'></GoPrimitiveDot>
                                    </div>
                                    <div className='h-[3rem] bg-[#32226B] flex justify-between items-center rounded-tr-[1.56rem] rounded-br-[1.56rem] px-5'>
                                        <p>Headless CMS Websites</p>
                                        <GoPrimitiveDot className='text-[#7C5CFF] w-3'></GoPrimitiveDot>
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-end w-full'>
                                <div className='absolute w-[23.75rem] h-[20.5rem] bottom-16 flex flex-col justify-between text-start'>
                                    <div className='h-[3rem] relative bg-[#32226B] flex gap-3 items-center rounded-tl-[1.56rem] rounded-bl-[1.56rem] px-5'>
                                        <GoPrimitiveDot className='text-[#EB70C8] w-3'></GoPrimitiveDot>
                                        <p>Headless CMS Websites</p>
                                    </div>
                                    <div className='h-[3rem] bg-[#32226B] flex gap-3 items-center rounded-tl-[1.56rem] rounded-bl-[1.56rem] px-5'>
                                        <GoPrimitiveDot className='text-[#EB70C8]  w-3'></GoPrimitiveDot>
                                        <p>Headless CMS Websites</p>
                                    </div>
                                    <div className='h-[3rem] bg-[#32226B] flex gap-3 items-center rounded-tl-[1.56rem] rounded-bl-[1.56rem] px-5'>
                                        <GoPrimitiveDot className='text-[#EB70C8] w-3'></GoPrimitiveDot>
                                        <p>Headless CMS Websites</p>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
            <div className='w-1/2 pl-[7rem] flex items-center'>
                <div>
                <h1 className='font-display text-[#111324] font-bold text-5xl pb-4'>Lemon Hive</h1>
                <p className='text-[#585A66] text-[0.93rem] leading-6 font-normal pb-8'>Lemon Hive is a global web solutions company specialising in headless architectures. Our services include Headless Web Development, Software Development, Enterprise WordPress, and Outsourced Development<br/> Services.</p>
                <p className='text-[#585A66] text-[0.93rem] leading-6 font-normal pb-8'>Our certified experts are highly experienced in headless technology and<br/> can help build personalised, future-proof solutions geared to scale<br/> businesses of all sizes</p>
                <button className='font-display font-medium text-base text-white px-6 py-2 bg-[#7C5CFF] rounded-[1.87rem]'>Visit Now</button>
                </div>
            </div>
        </div>
    );
};

export default Service;