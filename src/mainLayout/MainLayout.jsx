import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";

const MainLayout = () => {
    return (
        <div className="dark:bg-gray-900  text-black dark:text-white">
            <div className="">
                <Navbar></Navbar>
            </div>
            <div className=" max-w-7xl mx-auto">
            <Outlet></Outlet>
            </div>

            <Footer></Footer>

        </div>
    );
};

export default MainLayout;