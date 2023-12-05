import { useQuery } from "@tanstack/react-query";
import useAxios from "../../hooks/useAxios";
import Marquee from "react-fast-marquee";
import ReviewCars from "../ReviewCard/ReviewCars";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Lottie from "lottie-react";

import loader from '../../assets/loader- 1699173093200.json'
// ..
AOS.init();


const Testimonials = () => {

    const axios = useAxios();

    const getReviews = async () =>{
        const res = axios.get("/reviews")
        return res;
    }
    const {data,isLoading,isFetching}= useQuery({
        queryKey: ["testimonial"],
        queryFn: getReviews
    })

    if(isLoading){
        return <Lottie className=" max-h-screen  bg-transparent" animationData={loader}></Lottie>;
    }
    if (isFetching) {
             return <Lottie className=" max-h-screen  bg-transparent" animationData={loader}></Lottie>;
          }



    console.log(data.data);
    return (
        <div data-aos="zoom-out-up" className=" h-[60vh] md:w-[1200px] mx-auto font-cinzel  ">
             <h2 className=" text-center text-white border-l-8 pl-5 border-red-800 md:text-6xl font-bold my-36">
        {" "}
        User Reviews
      </h2>
      <Marquee autoFill>
  {
    data.data.map(items=> <ReviewCars key={items._id} items={items}></ReviewCars>)
  }
</Marquee>
        </div>
    );
};

export default Testimonials;