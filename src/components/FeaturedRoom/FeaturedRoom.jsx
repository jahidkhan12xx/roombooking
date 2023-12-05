import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const FeaturedRoom = () => {
  return (
    <div className=" min-h-screen mt-36 md:w-[1200px] mx-auto font-cinzel ">
      <h2 className=" text-white border-l-8 pl-5 border-red-800 md:text-6xl font-bold my-36">
        {" "}
        Featured Rooms
      </h2>

      <div data-aos="zoom-in" className="card w-full lg:card-side  text-white rounded-none my-10">
        <figure className=" md:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Album"
          />
        </figure>
        <div className="card-body flex justify-center items-center my-32">
          <h2 className="card-title">The Diamond package</h2>
          <p>Its a luxurious room </p>
          <Link to="/rooms">
          <button className="relative -top-1 -left-1 bg-red-800 py-2.5 px-5 font-bold uppercase text-white transition-all before:absolute before:top-1 before:left-1 before:-z-[1] before:h-full before:w-full before:border-2 before:border-red-800 before:transition-all before:content-[''] hover:top-0 hover:left-0 before:hover:top-0 before:hover:left-0 z-30 ">Book Now</button></Link>
          
        </div>
      </div>
      <div data-aos="zoom-in" className="card my-10 w-full lg:card-side  text-white rounded-none">
      <div className="card-body flex justify-center items-center my-32">
          <h2 className="card-title">The Platinum package </h2>
          <p>Its a luxurious room </p>
          <Link to="/rooms">
          <button className="relative -top-1 -left-1 bg-red-800 py-2.5 px-5 font-bold uppercase text-white transition-all before:absolute before:top-1 before:left-1 before:-z-[1] before:h-full before:w-full before:border-2 before:border-red-800 before:transition-all before:content-[''] hover:top-0 hover:left-0 before:hover:top-0 before:hover:left-0 z-30 ">Book Now</button></Link>
          
        </div>
        <figure className=" md:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Album"
          />
        </figure>
      </div>
      
      
    </div>
  );
};

export default FeaturedRoom;
