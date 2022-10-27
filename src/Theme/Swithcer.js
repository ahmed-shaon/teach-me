import React from 'react';
import { useState } from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { useDarkSide } from './UseDarkSide';

const Swithcer = () => {
    const [colorTheme, setTheme] = useDarkSide();
    const [darkSide, setDarkSide] = useState(colorTheme === 'light' ? true: false);

    const toggleDarkMode = (checked) => {
        setTheme(colorTheme)
        setDarkSide(checked);
    }
    return (
        <div className='flex items-center'>
            <DarkModeSwitch
            checked={darkSide}
            onChange={toggleDarkMode}
            size={20}
            ></DarkModeSwitch> 
            <h3 className='text-gray-800 dark:text-gray-300 ml-2 mr-4'>{colorTheme === 'light' ? "Dark mode" : "Light mode"}</h3>           
        </div>
    );
};

export default Swithcer;
