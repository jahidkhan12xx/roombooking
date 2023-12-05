import Lottie from "lottie-react";
import { FaGoogle } from "react-icons/fa";

import loginAnimation from "../../assets/Animation - 1699109193294.json";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import toast from "react-hot-toast";

const Login = () => {


  const {loginUser,googleLogin} = useContext(AuthContext);
  const [error,setError] = useState();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    loginUser(email,password)
    .then(res=>{
      console.log(res.user);
      
      navigate(location.state? location.state : "/")
        toast.success("Successfully Logged In")
        
      
    })
    .catch(err=>{
      // console.log(err.code);
      setError(err.code)
    })
  };

  const handleGoogle = () =>{
    googleLogin()
    .then(res=>{
      console.log(res.user);
      navigate(location.state? location.state : "/")
        toast.success("Successfully Logged In")
    })
    .catch(err=>{
      console.log(err);
      setError(err.code)
    })
  }
  return (
    <div className=" bg-bg-1 min-h-screen w-full bg-cover md:flex md:flex-col lg:flex-row justify-center  items-center font-lora ">
      <div className=" lg:w-1/2 md:w-full">
        <Lottie
          animationData={loginAnimation}
          className=" md:h-[50vh] lg:h-[80vh] h-[50vh]"
        ></Lottie>
      </div>
      <div className=" lg:w-1/3 md:w-full  ">
        <form onSubmit={handleSubmit} className="card-body">
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
              <div className=" text-white ">
                Don&apos;t have an account ? <Link to="/register" className=" text-white hover:text-yellow-500 hover:underline">Register</Link>
              </div>
            </label>
            {
              error && <p className=" text-red-800 font-bold">{error}</p>
            }
          </div>

          <div className="form-control mt-6">
            <button className="relative -top-1 -left-1 bg-purple-400 py-2.5 px-5 font-bold uppercase text-black transition-all before:absolute before:top-1 before:left-1 before:-z-[1] before:h-full before:w-full before:border-2 before:border-purple-800 before:transition-all before:content-[''] hover:top-0 hover:left-0 before:hover:top-0 before:hover:left-0 z-30 ">
              Login
            </button>
          </div>
          <hr className="border-t border-gray-200 bg-white my-3"></hr>
        </form>

        <div className="form-control  lg:w-[30vw] w-[80vw] md:w-[90vw] pb-20  mx-auto ">
          <button onClick={handleGoogle} className="relative -top-1 -left-1 bg-purple-400 py-2.5 px-5 font-medium uppercase text-black transition-all before:absolute before:top-1 before:left-1 before:-z-[1] before:h-full before:w-full before:border-2 before:border-purple-800 before:transition-all before:content-[''] hover:top-0 hover:left-0 before:hover:top-0 before:hover:left-0 z-30  ">
            
            <div className=" flex justify-center items-center gap-3">
              <FaGoogle /> <span className=" font-bold">Login With google</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
