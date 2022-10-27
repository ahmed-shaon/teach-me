import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const MainContent = ({ course }) => {
    const { img, name, title, rating, id } = course;
    console.log(rating.number)
    return (
        <div className="card w-full bg-gray-300 dark:bg-gray-700 dark:border-b-gray-800 text-gray-900 dark:text-gray-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body p-3">
                <h2 className="card-title">{name}</h2>
                <p>{title}</p>
                <div className="card-actions justify-between items-center">
                    <p className='flex items-center'>
                        <FaStar className='text-yellow-600 mr-2' />
                        <span>{rating.number}</span>
                    </p>
                    <button className=" bg-violet-400 dark:bg-violet-600
                  hover:bg-violet-500 dark:hover:bg-violet-700 border-0 px-4 py-2 text-gray-800 dark:text-gray-50">
                    <Link to={`/courses/${id}`}>Explore</Link>
                  </button>
                </div>
            </div>
        </div>
    );
};

export default MainContent;