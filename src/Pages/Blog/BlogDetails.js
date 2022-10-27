import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const BlogDetails = () => {
    const { question, answer, img } = useLoaderData();
    return (
        <section className="text-gray-900 dark:text-gray-100 bg-violet-100 dark:bg-gray-800 ">
            <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
                <div className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-900">
                    <img src={img} alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500 opacity-4" />
                    <div className="p-6 space-y-2 lg:col-span-5">
                        <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">{question}</h3>
                        <p>{answer}</p>
                    </div>
                </div>
                <div className='flex justify-center mt-4'>
                    <button className="btn btn-active btn-primary"><Link to='/blog'>Back to Blogs</Link></button>
                </div>
            </div>
        </section>
    );
};

export default BlogDetails;