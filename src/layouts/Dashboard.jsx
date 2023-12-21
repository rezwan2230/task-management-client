import { NavLink, Outlet } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import {  FaHome } from "react-icons/fa";
import { GiSelfLove } from "react-icons/gi";
import { FaStreetView } from "react-icons/fa6";
import { MdModeEdit } from "react-icons/md";
import { LuGitPullRequestClosed } from "react-icons/lu";

const Dashboard = () => {
    const {user} = useAuth()
    return (
        <div className='max-w-screen-xl mx-auto'>
            <div className="flex">

                {/*Dashboard  Side Bar */}
                <div className="h-screen  p-3 space-y-2 w-[300px] dark:bg-gray-900 dark:text-gray-100  shadow-lg pt-8">
                    <ul className="menu p-5">
                        <div className="flex items-center p-2 space-x-4">
                            <img src={user?.photoURL} alt="" className="w-12 h-12 rounded-full dark:bg-gray-500" />
                            <div>
                                <h2 className="text-lg font-semibold">{user?.displayName}</h2>

                            </div>
                        </div>

                        {
                                <>
                                    <li className="hover:bg-slate-400  rounded my-3 font-semibold"><NavLink to='/dashboard/viewBioData' className='flex items-center gap-2 p-2'><FaStreetView className="text-xl"></FaStreetView>View Biodata : </NavLink></li>

                                    <li className="hover:bg-slate-500  rounded my-3 font-semibold"><NavLink to='/dashboard/editBioData' className='flex items-center gap-2 p-2'><MdModeEdit className="text-xl"></MdModeEdit>Edit Biodata</NavLink></li>

                                    <li className="hover:bg-slate-500  rounded my-3 font-semibold"><NavLink to='/dashboard/contactRequest' className='flex items-center gap-2 p-2'><LuGitPullRequestClosed className="text-lg"></LuGitPullRequestClosed>My Contact Request</NavLink></li>  {/*  ({cart.length})*/}

                                    <li className="hover:bg-slate-500  rounded my-3 font-semibold"><NavLink to='/dashboard/favourites' className='flex items-center gap-2 p-2'><GiSelfLove className="text-lg"></GiSelfLove>Favourite Biodata</NavLink></li>

                                </>
                        }

                        {/*Shared NavLiks  */}
                        <div className="py-2"><hr /></div>
                        <li className="hover:bg-slate-500  rounded my-3 font-semibold"><NavLink to='/' className='flex items-center gap-2 p-2'><FaHome className="text-lg"></FaHome>Home</NavLink></li>
                        {/* <li className="hover:bg-slate-500  rounded my-3 font-semibold"><NavLink onClick={handleLogout} className='flex items-center gap-2 p-2' ><RiLogoutCircleRFill className="text-xl"></RiLogoutCircleRFill><span>Logout</span></NavLink></li> */}
                    </ul>
                </div>

                {/* Dashboard Content */}
                <div className="flex-1 p-10">
                    <Outlet></Outlet>
                </div>
            </div>

        </div>
    );
};

export default Dashboard;