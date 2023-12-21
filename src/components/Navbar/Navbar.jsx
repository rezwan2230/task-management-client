import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
    const { user, logOut } = useAuth()
    const menu = <>
        <li className="mr-5 font-bold text-[#1B4242]"><Link to='/'>Home</Link></li>
        <li className="mr-5 font-bold text-[#1B4242]"><Link to=''>About</Link></li>
        <li className="mr-5 font-bold text-[#1B4242]"><Link to=''>Contact</Link></li>
        {
            user && <li className="mr-5 font-bold text-[#1B4242]"><Link to='/dashboard'>Dashboard</Link></li>
        }
    </>

    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(error => { console.log(error.message); })
    }

    return (
        <div>
            <div className="navbar ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {menu}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl btn-sm">daisyUI</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {menu}
                    </ul>
                </div>
                <div className="navbar-end ">
                    {/* <a className="btn btn-sm">Button</a> */}
                    {
                        user ? <button onClick={handleLogout} className="btn btn-sm bg-[#1B4242] text-white hover:bg-[#1b4242dc]">Logout</button> : <Link to='/login' className="btn btn-sm bg-[#1B4242] text-white hover:bg-[#1b4242dc]">Login</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;