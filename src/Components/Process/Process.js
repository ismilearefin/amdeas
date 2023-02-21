import React from 'react';
import one from '../../assets/1.png';
import two from '../../assets/2.png';
import three from '../../assets/3.png';
import four from '../../assets/4.png';
import five from '../../assets/5.png';
import six from '../../assets/6.png';
import discoverIdea from '../../assets/eco1.png';
import BusinessAnalysis from '../../assets/eco6.png';
import UiDesign from '../../assets/eco5.png';
import Development from '../../assets/eco4.png';
import Testing from '../../assets/eco3.png';
import Support from '../../assets/eco2.png';


const Process = () => {
    let shadow = {
        boxShadow: "0px 100px 167px rgba(51, 51, 51, 0.03), 0px 12.5216px 20.911px rgba(51, 51, 51, 0.015)"
    }
    return (
        <div className='w-full mx-auto '>
            <div className='max-w-[100rem] mx-auto bg-[#F6F6FC] rounded-[2.5rem] px-[10rem] pb-[10rem] pt-[8.62rem]'>
                <div className='pb-[5rem]'>
                    <h2 className='text-center font-poppins font-semibold text-[3rem] leading-[3.9rem] text-[#7958FC]'>Our Custom Development Process<br/> Step by Step</h2>
                </div>
                <div className='flex pb-[5rem]'>
                    <div style={shadow} className='relative z-10 w-[45.25rem] rounded-[1.25rem] p-[2.5rem] bg-[#FDFDFD] flex gap-6 items-center'>
                        <img src={discoverIdea} alt='discoverIdea' className='w-[5rem] h-[5rem]'/>
                        <div>
                            <h3 className='font-poppins text-[2rem] font-medium text-[#060607]'>Discover Idea</h3>
                            <p>Lorem ipsum dolor sit amet consectetur. Sed nunc risus nisl nulla honcus at eleifend.</p>
                        </div>
                    </div>
                    <img src={one} alt="1" className='ml-[-0.625rem]'/>
                </div>
                <div className='flex justify-end pb-[5rem]'>
                    <img src={two} alt="2" className='mr-[-1.875rem]'/>
                    <div style={shadow} className='relative z-10 w-[45.25rem] rounded-[1.25rem] p-[2.5rem] bg-[#FDFDFD] flex gap-6 items-center'>
                        <img src={BusinessAnalysis} alt='Business' className='w-[5rem] h-[5rem]'/>
                        <div>
                            <h3 className='font-poppins text-[2rem] font-medium text-[#7958FC]'>Business Analysis</h3>
                            <p>Lorem ipsum dolor sit amet consectetur. Sed nunc risus nisl nulla honcus at eleifend.</p>
                        </div>
                    </div>
                </div>
                <div className='flex pb-[5rem]'>
                    <div style={shadow} className='relative z-10 w-[45.25rem] rounded-[1.25rem] p-[2.5rem] bg-[#FDFDFD] flex gap-6 items-center'>
                        <img src={UiDesign} alt='UiDesign' className='w-[5rem] h-[5rem]'/>
                        <div>
                            <h3 className='font-poppins text-[2rem] font-medium text-[#7958FC]'>Discover Idea</h3>
                            <p>Lorem ipsum dolor sit amet consectetur. Sed nunc risus nisl nulla honcus at eleifend.</p>
                        </div>
                    </div>
                    <img src={three} alt="3" className='ml-[-2.5rem]'/>
                </div>
                <div className='flex justify-end pb-[5rem]'>
                    <img src={four} alt="4" className='mr-[-2.5rem]'/>
                    <div style={shadow} className='relative z-10 w-[45.25rem] rounded-[1.25rem] p-[2.5rem] bg-[#FDFDFD] flex gap-6 items-center'>
                        <img src={Development} alt='Development' className='w-[5rem] h-[5rem]'/>
                        <div>
                            <h3 className='font-poppins text-[2rem] font-medium text-[#7958FC]'>Development</h3>
                            <p>Lorem ipsum dolor sit amet consectetur. Sed nunc risus nisl nulla honcus at eleifend.</p>
                        </div>
                    </div>
                </div>
                <div className='flex pb-[5rem]'>
                    <div style={shadow} className='relative z-10 w-[45.25rem] rounded-[1.25rem] p-[2.5rem] bg-[#FDFDFD] flex gap-6 items-center'>
                        <img src={Testing} alt='UiDesign' className='w-[5rem] h-[5rem]'/>
                        <div>
                            <h3 className='font-poppins text-[2rem] font-medium text-[#7958FC]'>Testing & Deployment</h3>
                            <p>Lorem ipsum dolor sit amet consectetur. Sed nunc risus nisl nulla honcus at eleifend.</p>
                        </div>
                    </div>
                    <img src={five} alt="5" className='ml-[-2.18rem]'/>
                </div>
                <div className='flex justify-end pb-[5rem]'>
                    <img src={six} alt="6" className='mr-[-1.875rem]'/>
                    <div style={shadow} className='relative z-10 w-[45.25rem] rounded-[1.25rem] p-[2.5rem] bg-[#FDFDFD] flex gap-6 items-center'>
                        <img src={Support} alt='Support' className='w-[5rem] h-[5rem]'/>
                        <div>
                            <h3 className='font-poppins text-[2rem] font-medium text-[#7958FC]'>Maintenance & Support</h3>
                            <p>Lorem ipsum dolor sit amet consectetur. Sed nunc risus nisl nulla honcus at eleifend.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Process;