import React from 'react';
import { Link } from 'react-router-dom';
import Swithcer from '../Theme/Swithcer';
import { FaBook, FaUserCircle } from 'react-icons/fa';
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
        .then(() => {})
        .catch(error => console.log(error))
    }
    return (
        <div className="navbar text-gray-800 dark:text-gray-100 bg-violet-300 dark:bg-base-100 drop-shadow-lg">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white dark:bg-base-100 rounded-box w-52">
                        <li><Link to='/courses'>Courses</Link></li>
                        <li><Link to='/faq'>FAQ</Link></li>
                        <li><Link to='/blog'>Blog</Link></li>
                        <li tabIndex={0}>
                            {
                                user?.uid ? user?.photURL ? <img src={user.photoURL} alt="profile" /> : <FaUserCircle /> :
                                    <Link to='/login' className="justify-between">
                                        Login
                                        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                    </Link>
                            }
                            <ul className="p-2">

                                <li><a>Profile</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl"><FaBook className='text-xl mr-1 text-green-200' />teachMe</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to='/courses'>Courses</Link></li>
                    <li><Link to='/faq'>FAQ</Link></li>
                    <li><Link to='/blog'>Blogs</Link></li>
                    <li tabIndex={0}>
                        {
                            user?.uid ? user?.photoURL ?<img className='w-6 h-6 mt-3 p-0 rounded-3xl' src={user.photoURL} alt="profile" /> : <p><FaUserCircle className='text-gray-800 dark:text-gray-100 text-2xl' /></p>
                                : <Link to='/login' className="justify-between">
                                    Login
                                </Link>
                        }
                        <ul className="bg-violet-300 dark:bg-violet-600">
                            {
                                user?.uid && <li className='p-2'>
                                    <p className=''>{user?.displayName ? user.displayName: <>user name</>}</p>
                                    <button onClick={handleLogOut} className='border border-voilet-300 px-4 py-1 hover:bg-violet-400 dark:hover:bg-violet-800'>LogOut</button></li>
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