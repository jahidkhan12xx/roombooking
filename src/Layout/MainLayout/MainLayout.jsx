import { NavLink } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";

// eslint-disable-next-line react/prop-types
const MainLayout = ({ children }) => {
  return (
    <div>
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          
          <NavBar></NavBar>
          
          {children}
          <Footer></Footer>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <div className="menu p-4 w-80 min-h-full bg-purple-800">
           
            <NavLink
                  to="/rooms"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "z-30 relative border-2 border-gray-800 bg-transparent py-2.5 px-5 font-medium uppercase  transition-colors before:absolute before:left-0 before:top-0 bg-black text-white"
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
                      ? "z-30 relative border-2 border-gray-800 bg-transparent py-2.5 px-5 font-medium uppercase  transition-colors before:absolute before:left-0 before:top-0 bg-black text-white"
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
                      ? "z-30 relative border-2 border-gray-800 bg-transparent py-2.5 px-5 font-medium uppercase  transition-colors before:absolute before:left-0 before:top-0 bg-black text-white"
                      : "z-30 relative border-2 border-gray-800 bg-transparent py-2.5 px-5 font-medium uppercase text-gray-800 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-gray-800 before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100"
                  }
                >
                  About Us
                </NavLink>
                <NavLink
                  to="/login"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "z-30 relative border-2 border-gray-800 bg-transparent py-2.5 px-5 font-medium uppercase  transition-colors before:absolute before:left-0 before:top-0 bg-black text-white"
                      : "z-30 relative border-2 border-gray-800 bg-transparent py-2.5 px-5 font-medium uppercase text-gray-800 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-gray-800 before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100"
                  }
                >
                  Login
                </NavLink>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default MainLayout;
