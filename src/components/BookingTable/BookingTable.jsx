import { useState } from "react";
import useAxios from "../../hooks/useAxios";
import moment from "moment";
import Rating from 'react-rating-stars-component';
import { AuthContext } from "../../provider/AuthProvider";
import { useContext } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import Swal from 'sweetalert2'


const BookingTable = ({ index, items, refetch }) => {
  const axios = useAxios();
  const bookingDate = moment(items.dateFrom, "YYYY-MM-DD");
  const currentDate = moment();

  const [userRating, setUserRating] = useState(0);

  const handleRating = (value) => {
    setUserRating(value);
  };

  const {user} = useContext(AuthContext)
  // const differenceInDays = bookingDate.diff(currentDate, 'days');

  // Create two date objects
const date1 = new Date(currentDate);
const date2 = new Date(bookingDate);

const currentTimestamp = Date.now();

// const date = new Date(currentTimestamp);

// Calculate the difference in milliseconds
const differenceInTime = date2.getTime() - date1.getTime();

// Calculate the number of days
const differenceInDays = differenceInTime / (1000 * 3600 * 24);

console.log('Difference in days:', differenceInDays);
// const [selectedValue, setSelectedValue] = useState(0);

const [review,setReview] = useState("")


  // const handleRating = (value) => {
  //   setSelectedValue(value);
  // };

 

  // console.log(differenceInDays);

  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`/bookings/${id}`).then((res) => {
          console.log(res.data);
    
          if(res.data.deleteCount>0){
            Swal.fire({
              title: "Canceled!",
              text: "Your booking has been canceled.",
              icon: "success"
            });
          }
          refetch();
        });
        
      }
    });

   
  };


  const handleReview = (id) =>{
    console.log(id);
    console.log(review);
    const email = user.email;
    const userName = user.displayName;
    const roomId = id;

    const roomReview = {roomId,review,email,userName,rating:userRating,currentTimestamp};
    console.log(roomReview);

    axios.post("/reviews",roomReview)
    .then(res=>{
      console.log(res.data);
      if(res.data.insertedId){
        toast.success("Thanks for the review")
      }
    })


  }


 
  return (
    <div>
      <div className="card lg:card-side font-great-vibes md:h-[45vh] bg-base-100 shadow-xl rounded-none ">
        <figure>
          <img
            className="  md:w-[30vw] md:h-full"
            src={items.room_img}
            alt="Movie"
          />
        </figure>
        <div className="card-body md:w-full">
          <h2 className="card-title">{items.title}</h2>
          <p className=" text-xl font-bold">Price : {items.price} $</p>
          <p className="text-xl font-bold">Date : {items.dateFrom}</p>
          <p>{items.des}</p>

          <div className="card-actions justify-end">
          <div>
      
    </div>
            {/* <input type="date" /> */}
            <Link className={`${differenceInDays <= 1 && "pointer-events-none  border-red-800 text-red-800"}`} to={`/myBookings/${items._id}`}>
            <button  className={`relative z-30 font-cinzel text-base border-2 border-gray-800 bg-transparent py-2.5 px-5 font-medium uppercase text-gray-800 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-y-0 before:bg-gray-800 before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-y-100  ${
                differenceInDays <= 1 && 
                "pointer-events-none opacity-50 border-red-800 text-red-800" 
              }`}>
              Update
            </button>
            </Link>
            <button
              onClick={() => handleDelete(items._id)}
              className={`relative z-30 font-cinzel text-base  border-2 border-gray-800 bg-transparent py-2.5 px-5 font-medium uppercase text-gray-800 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-y-0 before:bg-gray-800 before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-y-100 ${
                differenceInDays <= 1 && 
                "pointer-events-none opacity-50 border-red-800 text-red-800" 
              }`}
            >
              Delete
            </button>
          </div>
          <div className=" flex gap-3 justify-end">
          <div>
      <h2>User Rating: {userRating}</h2>
      <Rating
      value={userRating}
      edit={true}
      size={24} // Adjust the size as needed
      activeColor="#ffd700" // Set the star color
      isHalf={false}
      onChange={handleRating} // To display only full stars
    />
    </div>
          <textarea onChange={(e)=> setReview(e.target.value) } name="review" cols="20" rows="2" className=" bg-transparent border-2 px-3 border-purple-700 " placeholder="Plase give a review"></textarea>
          <button
              onClick={() => handleReview(items.roomId)}
              className={`relative z-30 font-cinzel text-base border-2 border-gray-800 bg-transparent py-2.5 px-5 font-medium uppercase text-gray-800 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-y-0 before:bg-gray-800 before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-y-100 ${!review && "pointer-events-none opacity-50"} `}
            >
              Review
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingTable;
