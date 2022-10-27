import React from 'react';
import { createRef } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import ReactToPdf from "react-to-pdf";


const CourseDetails = () => {
    const course = useLoaderData();
    const ref = createRef();
    const options = {
        orientation: 'portrait',
        unit: 'in',
        format: [8,5]
    };
    const { id, name, img, description, courseContent } = course;
    return (
        <section  className="dark:bg-gray-800 text-gray-800 dark:text-gray-100">
            <div className="container flex flex-col-reverse mx-auto lg:flex-row">
                <div ref={ref}  className="flex flex-col px-6 py-8 space-y-6 rounded-sm sm:p-8 lg:p-12 lg:w-1/2 xl:w-2/5 bg-violet-200 dark:bg-violet-400 dark:text-gray-900">
                    <div className="flex space-x-2 sm:space-x-4">
                        <div className="space-y-2">
                            <p className="text-lg font-medium leading-snug">About</p>
                            <p className="leading-snug">{description}</p>
                        </div>
                    </div>
                    <div className="flex space-x-2 sm:space-x-4">
                        <div className="space-y-2">
                            <p className="text-lg font-medium leading-snug">Purpose</p>
                            <p className="leading-snug">{courseContent.purpose}</p>
                        </div>
                    </div>
                    <div className="flex space-x-2 sm:space-x-4">
                        <div className="space-y-2">
                            <p className="text-lg font-medium leading-snug">Guide</p>
                            <p className="leading-snug">{courseContent.guide}</p>
                        </div>
                    </div>
                    <div className="flex space-x-2 sm:space-x-4">
                        <div className="space-y-2">
                            <p className="text-lg font-medium leading-snug">Content</p>
                            <p className="leading-snug">{
                                courseContent.learningContent.map((item, index) => <li key={index}>{item}</li>)
                            }</p>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/2 xl:w-3/5 dark:bg-gray-800">
                    <div className='bg-gray-300 dark:bg-gray-500 py-3 flex justify-between items-center'>
                        <p className='ml-2'>{course.uploadDate}</p>
                        <h3 className='text-2xl font-bold'>{name}</h3>
                        <ReactToPdf targetRef={ref} filename="content.pdf" options={options} x={.1} y={.1} scale={0.9}>
                            {({ toPdf }) => (
                                <button onClick={toPdf} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Download</button>
                            )}
                        </ReactToPdf>                        
                    </div>
                    <div className="flex items-center justify-center p-4 md:p-8 lg:p-12">
                        <img src={img} alt="" className="rounded-lg shadow-lg dark:bg-gray-500 aspect-video sm:min-h-96" />
                    </div>
                    <div className=' flex justify-center '>
                        <button type="button" className="focus:outline-nonetext-white bg-purple-500 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 "><Link to={`/courses/content/${id}`}>Get Premium Access</Link></button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CourseDetails;