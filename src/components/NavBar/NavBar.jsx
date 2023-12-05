import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const NavBar = () => {
  const { user,logOut } = useContext(AuthContext);

  const handleOut = () =>{
    logOut()
    .then()
    .catch()
  }
  return (
    <div className="w-full navbar bg-purple-500  py-5 ">
      <div className=" md:w-[80vw] mx-auto">
        <div className="flex-none lg:hidden">
          <label
            htmlFor="my-drawer-3"
            aria-label="open sidebar"
            className="btn btn-square btn-ghost"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-6 h-6 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
        </div>
        <div className="flex-1 px-2 mx-2 font-cinzel font-extrabold md:text-5xl">
          The Royal Taj
        </div>
        <div className="flex-none hidden lg:block">
          <div className=" flex gap-2">
            {/* Navbar menu content here */}
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "z-40 relative border-2 border-gray-800  py-2.5 px-5 font-medium uppercase  transition-colors before:absolute before:left-0 before:top-0 bg-black text-white"
                  : "z-40 relative border-2 border-gray-800 bg-transparent py-2.5 px-5 font-medium uppercase text-gray-800 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-gray-800 before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/rooms"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "z-30 relative border-2 border-gray-800  py-2.5 px-5 font-medium uppercase  transition-colors before:absolute before:left-0 before:top-0 bg-black text-white"
                  : "z-30 relative border-2 border-gray-800 bg-transparent py-2.5 px-5 font-medium uppercase text-gray-800 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-gray-800 before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100"
              }
            >
              Rooms
            </NavLink>
            <NavLink
              to="/myBookings"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "z-30 relative border-2 border-gray-800  py-2.5 px-5 font-medium uppercase  transition-colors before:absolute before:left-0 before:top-0 bg-black text-white"
                  : "z-30 relative border-2 border-gray-800 bg-transparent py-2.5 px-5 font-medium uppercase text-gray-800 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-gray-800 before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100"
              }
            >
              My Bookings
            </NavLink>
            <NavLink
              to="/aboutUs"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "z-30 relative border-2 border-gray-800  py-2.5 px-5 font-medium uppercase  transition-colors before:absolute before:left-0 before:top-0 bg-black text-white"
                  : "z-30 relative border-2 border-gray-800 bg-transparent py-2.5 px-5 font-medium uppercase text-gray-800 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-gray-800 before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100"
              }
            >
              About Us
            </NavLink>

            {!user ? (
              <NavLink
                to="/login"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "z-30 relative ml-36 border-2 border-gray-800  py-2.5 px-5 font-medium uppercase  transition-colors before:absolute before:left-0 before:top-0 bg-black text-white"
                    : "z-30 relative ml-36 border-2 border-gray-800 bg-transparent py-2.5 px-5 font-medium uppercase text-gray-800 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-gray-800 before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100"
                }
              >
                Login
              </NavLink>
            ) : (
              <div className=" flex  justify-center gap-4 items-center ml-36">
                <div className=" flex gap-2 justify-center items-center">
                  <h2 className=" font-cinzel font-bold text-yellow-400">{user?.displayName}</h2>
                </div>
                <div className="avatar">
                  <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src={user?.photoURL} />
                  </div>
                </div>
                <button onClick={handleOut} className="z-30  relative border-2 border-gray-800 bg-transparent py-2.5 px-5 font-medium uppercase text-gray-800 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-gray-800 before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100">
                  LogOut
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
