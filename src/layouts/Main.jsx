import { Outlet } from "react-router-dom";

const Main = () => {
    return (
        <div className="bg-[#F3F8FF] h-[100vh]">
            <div className="max-w-screen-xl mx-auto">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Main;