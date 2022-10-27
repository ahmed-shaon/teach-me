import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Profile = () => {
    const { user } = useContext(AuthContext);
    console.log(user)
    return (
        <div className='flex justify-center text-gray-900'>
            <div className="flex flex-col max-w-md p-6 dark:bg-gray-900 dark:text-gray-100">
                <img src={user.photoURL} alt="" className="flex-shrink-0 object-cover h-64 rounded-sm sm:h-96 dark:bg-gray-500 aspect-square" />
                <div>
                    <h2 className="text-xl font-semibold">{user?.displayName}</h2>
                    <span className="block pb-2 text-sm dark:text-gray-400">{user?.email}</span>
                    <p>{user?.email}</p>
                </div>
            </div>
        </div>
    );
};

export default Profile;