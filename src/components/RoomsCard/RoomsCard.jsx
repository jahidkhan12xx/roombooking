import { Link } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import { useState } from "react";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();


const RoomsCard = ({items}) => {

  const axios = useAxios();

  
  const [reviewCount,setReviewCount] = useState(0);


  useEffect(()=>{

    axios.get(`reviews?roomId=${items._id}`)
    .then(res=>{
      setReviewCount(res.data.length);
    })
    
  },[items._id,axios])


    console.log(items);
    return (
        <Link to={`/rooms/${items._id}`}>
          <div data-aos="zoom-in" className="relative grid h-[40vh] font-great-vibes  w-full  flex-col items-end justify-center overflow-hidden  bg-white bg-clip-border text-center text-gray-700">
  <div style={{
        backgroundImage: `url(${items.room_img})`,
      }} className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent  bg-cover bg-clip-border bg-center text-gray-700 shadow-none">
    <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
  </div>
  <div className="relative p-6 px-6 py-14 md:px-12">
    <h2 className="mb-6 block font-great-vibes text-4xl font-medium leading-[1.5] tracking-normal text-white antialiased">
      {items.title}
    </h2>
    <h5 className="block mb-4  text-xl antialiased font-semibold leading-snug tracking-normal text-gray-400">
      Price : {items.price} $
    </h5>
    <h5 className="block mb-4  text-xl antialiased font-semibold leading-snug tracking-normal text-gray-400">
      {
        reviewCount ? <div>Reviews : {reviewCount}</div> : <div>Reviews : No review</div>
      }
    </h5>
    
  </div>
</div>
           
        </Link>
    );
};

export default RoomsCard;