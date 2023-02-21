
import HeroSection from '../HeroSection/HeroSection';
import Navbar from '../Navbar/Navbar';
import rightSide from '../../assets/vector4.png'
import leftSide from '../../assets/vector5.png'
import Service from '../Service/Service';
import Process from '../Process/Process';

const Home = () => {
    return (
        <div>
            <div className='bg-[#1C0C5B] relative'>
            <img src={rightSide} alt='mouse' className='absolute right-0 bottom-0'/>
            <Navbar></Navbar>
            <HeroSection></HeroSection>
            <img src={leftSide} alt='mouse' className='absolute top-0'/>
            </div>
            <Service></Service>
            <Process></Process>
        </div>
    );
};

export default Home;