import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import Lottie from "lottie-react";
import loader from "../../assets/loader- 1699173093200.json";
import { useState } from "react";
import toast from "react-hot-toast";

const UpdateForm = () => {
  const axios = useAxios();
  const { id } = useParams();
  const  [date,setDate] = useState();
  console.log(id);

  const navigate = useNavigate();

  const getBooking = async () => {
    const res = await axios.get(`/bookings/${id}`);
    return res;
  };

  const { data, isLoading } = useQuery({
    queryKey: ["updateDate"],
    queryFn: getBooking,
  });

  if (isLoading) {
    return (
      <Lottie
        className=" max-h-screen  bg-transparent"
        animationData={loader}
      ></Lottie>
    );
  }

  console.log(data.data);
  const handleUpdate = () =>{
    
    const bDate = {date};
    
    console.log(bDate);

    axios.patch(`/bookings/${id}`,bDate)
    .then(res=>{
        console.log(res.data);
        if(res.data.modifiedCount>0){
            toast.success("Date Updated");
            navigate("/myBookings")
        }
    })
  }

  return (
    <div>
      
      <div className=" flex justify-center items-center min-h-[80vh] ">
        <div  className="card-body  mx-[30%] font-lora">
        <h2 className=" font-great-vibes text-2xl font-bold">Room : {data.data.title}</h2>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
              defaultValue={data.data.userEmail}
              readOnly
              
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="number"
              placeholder="price"
              className="input input-bordered"
              defaultValue={data.data.price}
              readOnly
              
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <input
              type="date"
              name="date"
              placeholder="date"
              className="input input-bordered"
              onChange={(e)=>setDate(e.target.value)}
              required
            />
            
          </div>
          <div className="form-control mt-6">
            <button onClick={handleUpdate}  className=" relative font-cinzel  z-50 -top-1 -left-1 bg-gray-800 py-2.5 px-5 font-bold uppercase text-white transition-all before:absolute before:top-1 before:left-1 before:-z-[1] before:h-full before:w-full before:border-2 before:border-gray-700 before:transition-all before:content-[''] hover:top-0 hover:left-0 before:hover:top-0 before:hover:left-0 ">Update</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateForm;
