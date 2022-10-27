import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../banner.jpg';

const Home = () => {
    return (
        <div className='z-0 relative'>
            <div>
                <img className='opacity-60 ' src={banner} alt="banner" />
            </div>
            <section className="text-gray-800 dark:text-gray-100 absolute top-0">
                <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
                    <h1 className="text-4xl font-bold leading-none sm:text-5xl">Learning never 
                        <span className="dark:text-violet-400"> exhausts</span> the mind.
                    </h1>
                    <p className="px-8 mt-8 mb-12 text-lg">Open your mind to get the light of Education. Be ready every moment in your to learn something new. Go and explore everything. The world is yours.</p>
                    <div className="flex flex-wrap justify-center">
                        <button className="px-8 py-3 m-2 text-lg font-semibold rounded bg-violet-400 dark:bg-violet-600 dark:text-gray-100 hover:bg-violet-500 dark:hover:bg-violet-700"><Link to='/courses'>Courses</Link></button>
                        <button className="px-8 py-3 m-2 text-lg border rounded dark:text-gray-400 dark:border-gray-700 dark:bg-gray-500 bg-gray-300 hover:bg-slate-200 dark:hover:bg-slate-600"><Link to='/blog'>Blogs</Link></button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;