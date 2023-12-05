import { useQuery } from "@tanstack/react-query";
import useAxios from "../../hooks/useAxios";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Lottie from "lottie-react";
import loader from '../../assets/loader- 1699173093200.json'
import BookingTable from "../../components/BookingTable/BookingTable";
import { Link } from "react-router-dom";
import booking from "../../assets/booking.json"
import { Helmet } from "react-helmet";


const MyBookings = () => {

    const {user} = useContext(AuthContext);

    const axios = useAxios();

    const getBooking = async () =>{
        const res = await axios.get(`/bookings?userEmail=${user.email}`);
        return res;
    }

    const {data,isLoading,isFetching,refetch} = useQuery({
        queryKey : ['booking'],
        queryFn : getBooking,
    })

    if (isLoading) {
        return <Lottie className=" max-h-screen  bg-transparent" animationData={loader}></Lottie>;
      }
    


    
    return (
        <div className=" bg-bg-7 min-h-screen bg-contain ">
            <Helmet>
        <title>My Bookings</title>
        <meta name="description" content="Default description for your pages" />
        
      </Helmet>
            {
                data.data.length>0 ? <div className=" py-4">
                <div className=" p-2 md:w-[1800px] h-full mx-auto">
                <h2>My Bookings {data.data.length}</h2>
               
        
               <div className=" grid grid-cols-1  md:grid-cols-2 gap-7">
               {
                    data.data.map((items,index)=> <BookingTable key={items._id} index={index} items={items} refetch={refetch}></BookingTable>)
                }
               </div>
                </div>
              
                
            </div> : 
            <main className="grid h-[50vh]  place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
            <div className="text-center">
              <Lottie animationData={booking}></Lottie>
              <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">No Booking Found</h1>
              <p className="mt-6 text-base leading-7 text-gray-600">Sorry, you didn't book any room yet .</p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                  to="/rooms"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Book Now
                </Link>
                
              </div>
            </div>
          </main>
            }
        </div>
    );
};

export default MyBookings;