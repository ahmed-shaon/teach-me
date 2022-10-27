import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BlogCard from './BlogCard';

const Blog = () => {
    const blogs = useLoaderData();
    console.log(blogs)
    return (
        <div>
            <h3>Welcome to Blog</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-8 gap-4 text-gray-800'>
                {
                    blogs.map(blog => <BlogCard key={blog.id} blog={blog}></BlogCard>)
                }
            </div>
        </div>
    );
};

export default Blog;