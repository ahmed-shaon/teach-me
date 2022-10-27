import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Swithcer from '../Theme/Swithcer';
import { FaBook, FaUserCircle } from 'react-icons/fa';
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';

let activeStyle = {
    textDcoration:"underline"
};

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }

    return (
        <div className="navbar text-gray-800 dark:text-gray-100 bg-violet-300 dark:bg-gray-900 drop-shadow-lg relative z-50 overflow-y-visible font-bold">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-violet-400 dark:bg-base-100 rounded-box w-52">
                        <li><NavLink style={({ isActive }) =>
                            isActive ? activeStyle : undefined} to='/courses'>Courses</NavLink></li>
                        <li><NavLink to='/faq'>FAQ</NavLink></li>
                        <li><NavLink to='/blog'>Blogs</NavLink></li>
                        <li tabIndex={20} className=''>
                            {
                                user?.uid ? user?.photoURL ? <img className='w-8 h-8 mt-3 p-0 ml-4 rounded-3xl' src={user.photoURL} alt="profile" /> : <p><FaUserCircle className='text-gray-800 dark:text-gray-100 text-2xl' /></p>
                                    : <NavLink to='/login' className="justify-between">
                                        Login
                                    </NavLink>
                            }
                            <ul className="bg-violet-400 dark:bg-violet-600">
                                {
                                    user?.uid && <li className='p-2 overflow-visible z-100'>
                                        <p className='hover:bg-violet-500 border border-1 py-1 mb-1'><Link to='/profile'>{user?.displayName ? user.displayName : <>user name</>}</Link></p>
                                        <button onClick={handleLogOut} className='border border-voilet-300 px-4 py-1 hover:bg-violet-400 dark:hover:bg-violet-800'>LogOut</button></li>
                                }
                            </ul>
                        </li>
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl"><FaBook className='text-xl mr-1 text-green-200' />teachMe</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><NavLink to='/courses'>Courses</NavLink></li>
                    <li><NavLink to='/faq'>FAQ</NavLink></li>
                    <li><NavLink to='/blog'>Blogs</NavLink></li>
                    <li tabIndex={20} className=''>
                        {
                            user?.uid ? user?.photoURL ? <img className='w-8 h-8 mt-3 p-0 ml-4 rounded-3xl' src={user.photoURL} alt="profile" /> : <p><FaUserCircle className='text-gray-800 dark:text-gray-100 text-2xl' /></p>
                                : <NavLink to='/login' className="justify-between">
                                    Login
                                </NavLink>
                        }
                        <ul className="bg-violet-400 dark:bg-violet-600">
                            {
                                user?.uid && <li className='p-2 overflow-visible z-100'>
                                    <p className='hover:bg-violet-500 border border-1 py-1 mb-1'><Link to='/profile'>{user?.displayName ? user.displayName : <>user name</>}</Link></p>
                                    <button onClick={handleLogOut} className='border border-voilet-300 px-4 py-1 hover:bg-violet-500 dark:hover:bg-violet-800'>LogOut</button></li>
                            }
                        </ul>
                    </li>
                </ul>
            </div>
            <div className="navbar-end">
                <Swithcer />
            </div>
        </div>
    );
};

export default Header;