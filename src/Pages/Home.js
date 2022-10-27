import React from 'react';
import banner from '../banner.jpg';

const Home = () => {
    return (
        <div className='mb-8 z-0'>
            <div>
                <img className='opacity-70 ' src={banner} alt="banner" />
            </div>
        </div>
    );
};

export default Home;