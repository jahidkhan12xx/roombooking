import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Error from "../components/Error.jsx/Error";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Rooms from "../pages/Rooms/Rooms";
import MyBookings from "../pages/My Bookings/MyBookings";
import AboutUs from "../pages/About Us/AboutUs";
import PrivateRoute from "./PrivateRoute";
import RoomDetails from "../components/RoomsDetails/RoomDetails";
import UpdateForm from "../components/UpdateForm/UpdateForm";


const MainRouter = createBrowserRouter([
    {
        path:"/",
        element:<Root></Root>,
        errorElement:<Error></Error>,
        children:[
            {
                index:true,
                element:<Home></Home>
            },
            {
                path:"/rooms",
                element:<Rooms></Rooms>
            },
            {
                path:"/rooms/:id",
                element:<RoomDetails></RoomDetails>
            },
            {
                path:"/myBookings",
                element:<PrivateRoute><MyBookings></MyBookings></PrivateRoute>
            },
            {
                path:"/myBookings/:id",
                element:<UpdateForm></UpdateForm>,
                
            },
            {
                path:"/aboutUs",
                element:<AboutUs></AboutUs>
            }
        ]
    },
    {
        path:"/login",
        element:<Login></Login>
    },
    {
        path:"/register",
        element:<Register></Register>
    }
])

export default MainRouter;