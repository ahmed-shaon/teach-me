import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({blog}) => {    
    const {question, answer, img, id} = blog;
    return (
        <div>
            <div className="max-w-xs rounded-md shadow-md dark:bg-gray-900  dark:text-gray-100 h-full">
                <img src={img} alt="" />
                <div className="flex flex-col justify-between p-6 space-y-8 h-68">
                    <div className="space-y-2">
                        <h2 className="text-lg font-bold tracking-wide">{question}</h2>
                        <p className="dark:text-gray-100">{answer.slice(0,50)+"...."}</p>
                    </div>
                    <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-violet-200 dark:bg-violet-400 dark:text-gray-900 static bottom-0"><Link to={`/blog/${id}`}>Read more</Link></button>
                </div>
            </div>
           
        </div>
    );
};

export default BlogCard;