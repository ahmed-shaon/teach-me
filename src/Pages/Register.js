import React from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle, FaFacebook, FaGithub } from "react-icons/fa";
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { useState } from 'react';
import toast from 'react-hot-toast';

const Register = () => {
    const [error, setError] = useState();
    const {createUser, updateUserProfile, verifyEmail} = useContext(AuthContext);

    const handleRegisterSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name= form.first_name.value+' '+ form.last_name.value;
        const email = form.email.value;
        const photoURL = form.photourl.value;
        const password = form.password.value;
        const confirmPassword = form.confirm_password.value;
        setError('');
        if(password !== confirmPassword){
            setError('Password do not match');
            return;
        }
        createUser(email, password)
        .then(res => {
            const user = res.user;
            console.log(user);
            form.reset();
            handleUpdateUserProfile(name, photoURL);
            toast.success('Your registration successfully completed')
        })
        .catch(error => console.error('error',error))
    }
    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName:name,
            photoURL: photoURL
        }
        console.log(profile)
        updateUserProfile(profile)
        .then(() =>{})
        .catch(error => console.log(error))

    }
    const handleVerifyEmail =  () => {
        verifyEmail()
        .then(res => {})
        .catch(error => console.log(error))
    }
    return (
        <div className='flex justify-center'>
            <div className="w-full my-8 max-w-md p-8 space-y-3 rounded-xl border dark:border-slate-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 shadow-xl">
                <h1 className="text-2xl font-bold text-center">Please Register</h1>
                <form onSubmit={handleRegisterSubmit} className="space-y-6 ng-untouched ng-pristine ng-valid">
                    <div className="space-y-1 text-sm">
                        <label htmlFor="username" className="block dark:text-gray-400">First Name</label>
                        <input type="text" name="first_name"placeholder="name" className="w-full px-4 py-3 rounded-md dark:border-gray-100 bg-slate-200 dark:bg-gray-700 dark:text-gray-100 focus:dark:border-violet-400" required/>
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="username" className="block dark:text-gray-400">Last Name</label>
                        <input type="text" name="last_name"placeholder="name" className="w-full px-4 py-3 rounded-md dark:border-gray-100 bg-slate-200 dark:bg-gray-700 dark:text-gray-100 focus:dark:border-violet-400" required/>
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="username" className="block dark:text-gray-400">photoURL</label>
                        <input type="text" name="photourl"placeholder="Photo URL" className="w-full px-4 py-3 rounded-md dark:border-gray-100 bg-slate-200 dark:bg-gray-700 dark:text-gray-100 focus:dark:border-violet-400" required/>
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="username" className="block dark:text-gray-400">Email</label>
                        <input type="email" name="email"placeholder="email" className="w-full px-4 py-3 rounded-md dark:border-gray-100 bg-slate-200 dark:bg-gray-700 dark:text-gray-100 focus:dark:border-violet-400" required/>
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="password" className="block dark:text-gray-400">Password</label>
                        <input type="password" name="password" placeholder="Password" id="password" className="w-full px-4 py-3
                         rounded-md dark:border-gray-700 bg-slate-200 dark:bg-gray-700 dark:text-gray-100 focus:dark:border-violet-400" />                        
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="confirm_password" className="block dark:text-gray-400">Confirm Password</label>
                        <input type="password" name="confirm_password" id="confirm_password" placeholder="Confirm Password" className="w-full px-4 py-3 rounded-md dark:border-gray-700 bg-slate-200 dark:bg-gray-700 dark:text-gray-100 focus:dark:border-violet-400" />                        
                    </div>
                    <p className='text-red-400 text-sm my-1'>{error}</p>
                    <button className="block w-full p-3 text-center rounded-sm dark:text-gray-900 bg-purple-400 dark:bg-violet-400">Register</button>
                </form>
                <div className="flex items-center pt-4 space-x-1">
                    <div className="flex-1 h-px sm:w-16 bg-gray-600 dark:bg-gray-700"></div>
                    <p className="px-3 text-sm dark:text-gray-400">Register with social accounts</p>
                    <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
                </div>
                <div className="flex justify-center space-x-4">
                    <button aria-label="Log in with Google" className="p-3 rounded-sm text-xl">
                        <FaGoogle />
                    </button>
                    <button aria-label="Log in with Facebook" className="p-3 rounded-sm text-xl">                       
                        <FaFacebook />
                    </button>
                    <button aria-label="Log in with GitHub" className="p-3 rounded-sm text-xl">
                        <FaGithub />
                    </button>
                </div>
                <p className="text-xs text-center sm:px-6 dark:text-gray-400">Already have an account?
                    <Link to='/login' rel="noopener noreferrer" className="underline dark:text-gray-100">login</Link>
                </p>
            </div>
        </div>
    );
};

export default Register;