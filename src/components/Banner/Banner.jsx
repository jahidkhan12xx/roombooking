import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import AnimationStyles from 'react-awesome-slider/src/styled/fold-out-animation/fold-out-animation.scss';
import { Link } from 'react-router-dom';
const AutoplaySlider = withAutoplay(AwesomeSlider);



const Banner = () => {
    return (
        <div className=' bg-black' >
             <AutoplaySlider
             animation="foldOutAnimation"
             cssModule={[ AnimationStyles]}
    play={true}
    cancelOnInteraction={false} // should stop playing on user interaction
    interval={1000}
    
  >
   
   <div className='relative md:text-8xl text-4xl font-black text-white w-full h-full bg-bg-2 bg-cover'>
  <div className='absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center'>
    <div className=' font-great-vibes flex-col justify-center items-center text-center'>
    <h2 className='z-10 text-yellow-500'>Welcome to Royal Taj</h2>
    <p className=' text-gray-200'>Home sweet home</p>
    <Link to="/rooms">
    <button className="relative z-30 font-cinzel text-base border-2 border-gray-800 bg-transparent py-2.5 px-5 font-medium uppercase text-gray-200 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-y-0 before:bg-gray-800 before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-y-100">Book Now</button></Link>
    </div>
  </div>
</div>
<div className='relative md:text-6xl font-black text-white w-full h-full bg-bg-3 bg-cover'>
  <div className='absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center'>
    <div className=' font-cinzel flex-col justify-center items-center text-center'>
    <h2 className='z-10 '>All premium suite is now </h2>
    <p className=' text-yellow-400 text-4xl'>60% OFF</p>
    <Link to="/rooms">
    <button className="relative z-30 font-cinzel text-base border-2 border-gray-800 bg-transparent py-2.5 px-5 font-medium uppercase text-gray-200 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-y-0 before:bg-gray-800 before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-y-100">Book Now</button></Link>
    </div>
  </div>
</div>
<div className='relative md:text-6xl font-black text-white w-full h-full bg-bg-4 bg-cover'>
  <div className='absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center'>
    <div className=' font-cinzel flex-col justify-center items-center text-center'>
    <h2 className='z-10 '>The most premium rooms </h2>
    <p className=' text-green-400 text-4xl'>just at 5000/=</p>
    <Link to="/rooms">
    <button className="relative z-30 font-cinzel text-base border-2 border-gray-800 bg-transparent py-2.5 px-5 font-medium uppercase text-gray-200 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-y-0 before:bg-gray-800 before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-y-100">Book Now</button></Link>
    </div>
  </div>
</div>

    
  </AutoplaySlider>
        </div>
    );
};

export default Banner;