import React from 'react';
import { ThemeContext } from '../ThemeContext/ThemeContext';
import { MdDarkMode, MdLightMode } from "react-icons/md";

const Toggle = () => {
    const { theme, setTheme } = React.useContext(ThemeContext);

    return (
        <div>
            {theme === 'dark' ? (
                <button
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    className="text-gray-500 dark:text-gray-400 bg-white shadow-none p-2 focus:outline-none text-lg rounded-full outline-none ring-transparent cursor-pointer"
                >
                    <MdLightMode></MdLightMode>
                </button>
            ) : (
                <button
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    className="text-gray-500 dark:text-gray-400 bg-white focus:outline-none shadow-none p-2 text-lg rounded-full outline-none ring-transparent cursor-pointer"
                >
                    <MdDarkMode></MdDarkMode>
                </button>
            )}
        </div>
    );
};

export default Toggle;