import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Login = () => {
    const [error, setError] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
    const {userLogin, loginWithGoogle, loginWithFacebook, loginWithGithub} = useContext(AuthContext) ;
    const handleLoginSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        userLogin(email, password)
        .then(res => {
            const user = res.user;
            console.log(user);
            form.reset();
            navigate('/');
        })
        .catch(error => {
            console.error('error', error);
            setError(error.message);
        })
    }
    //google login
    const handleGoogleLogin = () => {
        loginWithGoogle()
        .then(res => {
            const user = res.user;
            console.log(user);
            navigate('/');
        })
        .catch(error => console.log(error))
    }
    //facebook login
    const handleFacebookLogin = () => {
        loginWithFacebook()
        .then(res => {
            const user = res.user;
            console.log(user);
            navigate('/');
        })
        .catch(error => console.log(error))

    }

    const handleGithubLogin = () => {
        loginWithGithub()
        .then(res => {
            const user = res.user;
            console.log(user);
            navigate('/');
        })
        .catch(error => console.log(error))
    }

    return (
        <div className='flex justify-center'>
            <div className="w-full my-8 max-w-md p-8 space-y-3 rounded-xl border dark:border-gray-900 dark:bg-gray-900 text-gray-800 dark:text-gray-100 shadow-xl">
                <h1 className="text-2xl font-bold text-center">Please Login</h1>
                <form onSubmit={handleLoginSubmit} action="" className="space-y-6 ng-untouched ng-pristine ng-valid">
                    <div className="space-y-1 text-sm">
                        <label htmlFor="username" className="block dark:text-gray-400">Email</label>
                        <input type="email" name="email" placeholder="Username" className="w-full px-4 py-3 rounded-md dark:border-gray-100 bg-slate-200 dark:bg-gray-700 dark:text-gray-100 focus:dark:border-violet-400" required />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="password" className="block dark:text-gray-400">Password</label>
                        <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md dark:border-gray-700 bg-slate-200 dark:bg-gray-700 dark:text-gray-100 focus:dark:border-violet-400" />
                        <div className="flex justify-between text-xs dark:text-gray-400">
                            <div>
                                <p>show error</p>
                            </div>
                            <a rel="noopener noreferrer" href="#">Forgot Password?</a>
                        </div>
                    </div>
                    <button className="block w-full p-3 text-center rounded-sm dark:text-gray-900 bg-purple-400 dark:bg-violet-400">Login</button>
                    <div className="flex items-center pt-4 space-x-1">
                    <div className="flex-1 h-px sm:w-16 bg-gray-600 dark:bg-gray-700"></div>
                    <p className="px-3 text-sm dark:text-gray-400">Login with social accounts</p>
                    <div className="flex-1 h-px sm:w-16 bg-gray-600 dark:bg-gray-700"></div>
                </div>
                <div className="flex justify-center space-x-4">
                    <button aria-label="Log in with Google" className="p-3 rounded-sm text-xl" onClick={handleGoogleLogin}>
                        <FaGoogle />
                    </button>
                    <button aria-label="Log in with Facebook" className="p-3 rounded-sm text-xl" onClick={handleFacebookLogin}>                       
                        <FaFacebook />
                    </button>
                    <button aria-label="Log in with GitHub" className="p-3 rounded-sm text-xl" onClick={handleGithubLogin}>
                        <FaGithub />
                    </button>
                </div>
                </form>
                <p className='text-red-400 text-sm my-1'>{error}</p>
                <p className="text-xs text-center sm:px-6 dark:text-gray-400">Don't have an account?
                    <Link to='/register' rel="noopener noreferrer" className="underline dark:text-gray-100">Register</Link>
                </p>
            </div>
        </div>);
};

export default Login;