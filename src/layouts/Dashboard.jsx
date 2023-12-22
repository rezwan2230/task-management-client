import { NavLink, Outlet } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { FaHome } from "react-icons/fa";
import { CiViewTimeline } from "react-icons/ci";
import { Helmet } from 'react-helmet-async';

const Dashboard = () => {
    const { user } = useAuth()
    return (
        <div className='bg-[#F3F8FF] min-h-full '>
            <Helmet>
                <title>Task Management | Dashboard</title>
            </Helmet>
            <div className='container mx-auto'>
                <div className="flex">
                    {/*Dashboard  Side Bar */}
                    <div className="h-screen  p-3 space-y-2 w-[100px] md:w-[200px] lg:w-[300px] dark:bg-gray-900 dark:text-gray-100  shadow-lg pt-8">
                        <ul className="menu p-5">
                            <div className="flex items-center p-2 space-x-4">
                                <img src={user?.photoURL} alt="" className="w-12 h-12 rounded-full dark:bg-gray-500" />
                                <div>
                                    <h2 className="text-lg font-semibold">{user?.displayName}</h2>
                                </div>
                            </div>

                                <>
                                    <li className="hover:bg-slate-400  rounded my-3 font-semibold"><NavLink to='/dashboard/overview' className='flex items-center gap-2 p-2'><CiViewTimeline className="text-xl"></CiViewTimeline>Overview</NavLink></li>
                                </>

                            {/*Shared NavLiks  */}
                            <div className="py-2"><hr /></div>
                            <li className="hover:bg-slate-500  rounded my-3 font-semibold"><NavLink to='/' className='flex items-center gap-2 p-2'><FaHome className="text-lg"></FaHome>Home</NavLink></li>
                        </ul>
                    </div>

                    {/* Dashboard Content */}
                    <div className="flex-1 p-10">
                        <Outlet></Outlet>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Dashboard;