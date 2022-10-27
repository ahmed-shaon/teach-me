import React from 'react';
import { Link } from 'react-router-dom';

const SideNav = ({ course }) => {
    const { name, id } = course;
    return (
        <aside className="w-full my-4">
            <nav className="space-y-8 text-sm">
                <div className="flex flex-col space-y-1">
                <button className="py-4 bg-violet-400 dark:bg-violet-600
                 w-full hover:bg-violet-500 dark:hover:bg-violet-700">
                    <Link to={`/courses/${id}`}>{name}</Link>
                </button>
                </div>
            </nav>
        </aside>
    );
};

export default SideNav;