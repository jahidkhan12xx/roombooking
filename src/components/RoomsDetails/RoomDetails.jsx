import { useQuery } from "@tanstack/react-query";
import useAxios from "../../hooks/useAxios";
import { useNavigate, useParams } from "react-router-dom";
import Lottie from "lottie-react";
import loader from "../../assets/loader- 1699173093200.json";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import Rating from 'react-rating-stars-component';
import moment from "moment";

const RoomDetails = () => {
  const [dateFrom, setDateFrom] = useState(null);
  const [dateTo, setDateTo] = useState(null);
  const [review, setReview] = useState([]);

  const [error, setError] = useState();

  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const axios = useAxios();

  const { id } = useParams();
  // console.log(id);

  useEffect(() => {
    axios.get(`reviews?roomId=${id}`).then((res) => {
      console.log(res.data);
      setReview(res.data);
    });
  }, [id, axios]);

  const getRoomDetails = async () => {
    const res = await axios.get(`/rooms/${id}`);
    return res;
  };

  const { data, isLoading, isFetching } = useQuery({
    queryKey: ["roomdetails"],
    queryFn: getRoomDetails,
  });
  const roomDetails = data?.data;
  const count = roomDetails?.room_count;
  const [currentSeat, setCurrentSeat] = useState(count);

  useEffect(() => {
    const seat = roomDetails?.room_count;
    setCurrentSeat(seat);
  }, [roomDetails]);

  if (isLoading) {
    return (
      <Lottie
        className=" max-h-screen  bg-transparent"
        animationData={loader}
      ></Lottie>
    );
  }
  if (isFetching) {
    return (
      <Lottie
        className=" max-h-screen  bg-transparent"
        animationData={loader}
      ></Lottie>
    );
  }

  const handleBook = () => {
    if (!user) {
      navigate("/login");
    } else {
      const userEmail = user.email;
      const { _id, title, des, price, size, availability, room_img, offers } =
        roomDetails;

      const roomId = _id;
      const bookData = {
        roomId,
        title,
        des,
        price,
        size,
        availability,
        room_img,
        offers,
        userEmail,
        dateFrom,
        dateTo,
      };
      console.log(bookData);
      Swal.fire({
        title: "Are you sure?",
        text: title,
        html: `<ul class="flex justify-start items-start flex-col"><li>Title : ${title}</li><li>Price : ${price} $</li><li>From : ${dateFrom}</li><li>To : ${dateTo}</li></ul>`,
        icon: "info",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Book it",
      }).then((result) => {
        if (result.isConfirmed) {
          if (currentSeat >= 0) {
            setCurrentSeat(currentSeat - 1);
          }

          axios.post("/bookings", bookData).then((res) => {
            console.log(res.data);
            if (res.data.insertedId) {

              axios.patch(`/rooms/${_id}`,{room : currentSeat-1})
              .then(res=>{
                console.log(res.data);
              })
            }
          });

          Swal.fire("Booked!", "Your booking is added", "success");
        }
      });
    }
  };

  
  return (
    <div>
      <div className="relative md:flex w-full md:h-[90.6vh] justify-center items-center  flex-row  bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative md:w-1/2 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none shrink-0  bg-clip-border">
          <img
            src={roomDetails.room_img}
            alt="image"
            className="object-cover  h-[90.5vh]"
          />
        </div>
        <div className="p-6">
          <h4 className="block mb-2 font-cinzel text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 ">
            {roomDetails.title}
          </h4>
          <p className="block mb-8 font-lora text-base antialiased font-normal leading-relaxed text-gray-700">
            {roomDetails.des}
          </p>
          <div className=" my-7"></div>
          <ul className=" list-disc ml-5 font-lora text-xl font-semibold mb-7">
            <li>Available Seat : {currentSeat}</li>
            <li>Special Offer : {roomDetails.offers}</li>
            <li>Price : {roomDetails.price}$/Night</li>
            <li>Size : {roomDetails.size}</li>
            <li>Special Offer : {roomDetails.offers}</li>

            <li className="">
              Date :
              <input
                onChange={(e) => setDateFrom(e.target.value)}
                className=" input input-bordered ml-2 border-red-500"
                type="date"
                name="dateFrom"
                id=""
              />
            </li>
          </ul>

          <div className="inline-block">
            <button
              onClick={handleBook}
              className={`relative font-cinzel  z-50 -top-1 -left-1 bg-gray-800 py-2.5 px-5 font-bold uppercase text-white transition-all before:absolute before:top-1 before:left-1 before:-z-[1] before:h-full before:w-full before:border-2 before:border-gray-700 before:transition-all before:content-[''] hover:top-0 hover:left-0 before:hover:top-0 before:hover:left-0 ${
                currentSeat === 0  && "pointer-events-none opacity-50"
              } ${
                !dateFrom  && "pointer-events-none opacity-50"
              } `}
              type="button"
            >
              {currentSeat === 0 ? "UnAvailable" : "Book Now"}
            </button>
          </div>
          <div>
          <h2 className=" flex justify-center items-center text-2xl font-bold underline my-5">User Reviews</h2>
         <div className="  ">
          
         {review.length > 0 ? <div className=" grid grid-cols-4 gap-5">
            {
              review.map(items=> <div className=" " key={items._id}>
                <h2 className=" font-great-vibes">{items?.userName}</h2>
                <p className=" font-cinzel ">&#34;{items?.review}&#34;</p>
                <Rating
      value={items?.rating}
      edit={false}
      size={24} // Adjust the size as needed
      activeColor="#ffd700" // Set the star color
      isHalf={false}
       
    />
      <p className=" font-lora">{moment(items.currentTimestamp).format('MMM Do YY')}</p>
              </div>)
            }
          </div> : <h2 className=" flex justify-center items-center font-cinzel font-bold">No review yet</h2>}
         </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;
