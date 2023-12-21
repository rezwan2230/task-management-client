import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const Main = () => {
    return (
        <div className="bg-[#F3F8FF] h-[100vh]">
            <div className="max-w-screen-xl mx-auto">
                <Navbar></Navbar>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Main;