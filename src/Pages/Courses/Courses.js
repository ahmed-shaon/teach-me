import React from 'react';
import { useLoaderData } from 'react-router-dom';
import MainContent from './MainContent';
import SideNav from './SideNav';

const Courses = () => {
    const courses = useLoaderData();
    return (
        <div className='grid grid-cols-1 md:grid-cols-4'>
            <div className='p-6 sm:w-60 bg-gray-300 dark:bg-gray-900  text-gray-800 dark:text-gray-100'>
                <h4 className='text-center text-2xl font-bold'>Courses</h4>
                {
                    courses.map(course =><SideNav key={course.id} course={course} /> )
                }
            </div>
            <div className='col-span-3 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4 my-8 mx-4'>
                {
                    courses.map(course => <MainContent key={course.id} course={course} />)
                }
            </div>
        </div>
    );
};

export default Courses;