import { Outlet } from "react-router-dom";
import MainLayout from "../Layout/MainLayout/MainLayout";


const Root = () => {
    return (
        <div>
            <MainLayout>
                <Outlet></Outlet>
            </MainLayout>
        </div>
    );
};

export default Root;