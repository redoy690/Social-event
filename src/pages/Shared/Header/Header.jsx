import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import './Header.css'


const Header = () => {

    const { user, logOut } = useContext(AuthContext)
    const nav = <>
        <li className='mx-2 bg-[#FFBB00] rounded-lg text-white font-semibold border hover:text-[#FFBB00] mt-1 hover:bg-white button_trans'>
            <NavLink to="/" className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
            }
            >
                Home
            </NavLink>
        </li>


        <li className='mx-2 bg-[#FFBB00] rounded-lg text-white font-semibold border hover:text-[#FFBB00] mt-1 hover:bg-white button_trans'>
            {
                user ?
                    <NavLink to="/contactus" className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                    }
                    >
                        Contact Us
                    </NavLink>
                    :
                    <NavLink to="/login" className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                    }
                    >
                        LogIn
                    </NavLink>
            }
        </li>
        <li className='mx-2 bg-[#FFBB00] rounded-lg text-white font-semibold border hover:text-[#FFBB00] mt-1 hover:bg-white button_trans'>
            {
                user ?
                    <NavLink to="/eventlist" className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                    }
                    >
                        Event List
                    </NavLink>
                    :
                    <NavLink to="/register" className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                    }
                    >
                        Register
                    </NavLink>
            }
        </li>
    </>

    return (
        <div>
            <div className="navbar border border-[#FF6F33] bg-slate-400 mt-4 rounded-tl-2xl rounded-tr-2xl py-4">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {nav}
                        </ul>
                    </div>
                    <a className="w-[25%] lg:w-[20%] ml-4">
                        <img src={'https://i.ibb.co/5KpsFhg/gg.png'} alt="" />
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {nav}
                    </ul>
                </div>
                <div className="navbar-end mr-4">
                    {
                        user ?
                            <div className="flex  space-x-4">
                                <div className="w-[50px] ">
                                    <img className="rounded-full" src={user.photoURL} alt="" />
                                </div>
                                <Link to='/'><a onClick={logOut} className="btn bg-[#FFBB00] text-white font-bold  rounded-xl">LogOut</a> </Link>
                            </div>
                            :
                            <div>
                                <Link to='/login'><a className="btn bg-[#FFBB00] text-white font-bold  rounded-xl">Log In</a> </Link>
                            </div>
                    }

                </div>
            </div>
        </div>
    );
};

export default Header;