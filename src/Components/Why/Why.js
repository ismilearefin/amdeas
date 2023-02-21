import React from 'react';
import Design from '../../assets/Design.png';

const Why = () => {
    return (
        <div className='w-full mb-[295px] mt-[213px]'>
            <div className='bg-[#F9F9F9] max-w-[1600px] mx-auto rounded-[2.5rem] py-[10rem]'>
                <div className='pb-[7.12rem]'>
                <h2 className='font-poppins font-semibold text-[3rem] text-[#6444DF] text-center pb-6'>Why Businesses Choose Outstaffing</h2>
                <p className='text-[#494F7A] font-poppins text-[1.25rem] font-medium text-center'>A software-first solution to any engineering problem. Use our AI-powered deep-vetting platform to hire<br/> and manage the right remote developers, tech leads, and others for your resource needs.</p>
                </div>
                <div className='flex justify-center'>
                    <div className='font-poppins'>
                        <div className='text-right pb-[4.875rem] mr-[-60px]'>
                            <h4 className='text-2xl text-[#D49DFF] pb-4'>Flexible</h4>
                            <p className='text-[#2D3047] font-normal text-base'>We help you build dedicated teams of software,<br/> web and front-end developers.</p>
                        </div>
                        <div className='text-right pb-[4.875rem]'>
                            <h4 className='text-2xl text-[#B454FF] pb-4'>Quality Work Done Quickly</h4>
                            <p className='text-[#2D3047] font-normal text-base'>We help you build dedicated teams of software,<br/> web and front-end developers.</p>
                        </div>
                        <div className='text-right  mr-[-60px]'>
                            <h4 className='text-2xl text-[#9E38ED] pb-4'>The Best for Every Budget</h4>
                            <p className='text-[#2D3047] font-normal text-base'>We help you build dedicated teams of software,<br/> web and front-end developers.</p>
                        </div>
                    </div>
                    <div>
                        <img src={Design} alt=''/>
                    </div>
                    <div className='font-poppins'>
                        <div className='text-start pb-[4.875rem] ml-[-45px]'>
                            <h4 className='text-2xl text-[#6444DF] pb-4'>Project-Based Cooperation</h4>
                            <p className='text-[#2D3047] font-normal text-base'>We help you build dedicated teams of software,<br/> web and front-end developers.</p>
                        </div>
                        <div className='text-start pb-[4.875rem]'>
                            <h4 className='text-2xl text-[#7958FC] pb-4'>Project-Supporting Services</h4>
                            <p className='text-[#2D3047] font-normal text-base'>We help you build dedicated teams of software,<br/> web and front-end developers in-house team.</p>
                        </div>
                        <div className='text-start ml-[-45px]'>
                            <h4 className='text-2xl text-[#AB97FC] pb-4'>Staff Augmentation</h4>
                            <p className='text-[#2D3047] font-normal text-base'>We help you build dedicated teams of software,<br/> web and front-end developers.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Why;