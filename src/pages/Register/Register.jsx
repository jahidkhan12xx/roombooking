
import Swal from 'sweetalert2'
import Lottie from "lottie-react";


import loginAnimation from "../../assets/regAnimation - 1699118605312.json";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import toast from 'react-hot-toast';






const Register = () => {

    const {createUser,updateUser} = useContext(AuthContext);
    const navigate = useNavigate();
    

    const [error,setError] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    setError("")


    if(password.length<6){
        return setError("Password must be six characters")
    }
    if(!/^(?=.*[A-Z])(?=.*[\W_]).{8,}$/.test(password)){
      return setError("Please include capital letter & special character")
    }

    createUser(email,password)
    .then((result) => {
      // After successful user creation, update the user's profile
      if (result.user) {
        updateUser(name,photoURL).then().catch();
      }
      
    })
    .then(() => {
      console.log("User profile updated successfully");
      form.reset();
      
      toast.success("Successfully Registered")
      
      navigate("/login");
      // location.reload();
      
    })
    .catch((error) => {
      setError(error.message);
    });


    
  };
  return (
    <div className=" bg-bg-1 min-h-screen w-full bg-cover md:flex md:flex-col lg:flex-row justify-center  items-center font-lora ">
      <div className=" lg:w-1/2 md:w-full">
        <Lottie
          animationData={loginAnimation}
          className=" md:h-[50vh] lg:h-[70vh] h-[50vh]"
        ></Lottie>
      </div>
      <div className=" lg:w-1/3 md:w-full  ">
        <form onSubmit={handleSubmit} className="card-body">
        <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Name</span>
            </label>
            <input
              name="name"
              type="text"
              placeholder="name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Photo URL</span>
            </label>
            <input
              name="photoURL"
              type="text"
              placeholder="url"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Password</span>
            </label>
            <input
              name="password"
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="">
              <div className=" text-white">
                Already have an account ? <Link to="/login" className=" text-white hover:text-yellow-500 hover:underline">Login</Link> 
              </div>
            </label>
          </div>
          {
            error && <p className=" text-red-700 font-bold">{error}</p>
          }

          <div className="form-control mt-6">
            <button className="relative -top-1 -left-1 bg-purple-400 py-2.5 px-5 font-bold uppercase text-black transition-all before:absolute before:top-1 before:left-1 before:-z-[1] before:h-full before:w-full before:border-2 before:border-purple-800 before:transition-all before:content-[''] hover:top-0 hover:left-0 before:hover:top-0 before:hover:left-0 z-30 ">
              Register
            </button>
          </div>
          
        </form>

       
      </div>
    </div>
  );
};

export default Register;
