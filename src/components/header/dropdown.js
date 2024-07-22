// src/components/Navbar.js
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import ArrowDropUpOutlinedIcon from '@mui/icons-material/ArrowDropUpOutlined';
import React, { useState } from 'react';
import { Link } from 'wouter';

const DropDown = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleMouseEnter = () => {
        setIsDropdownOpen(true);
    };

    const handleMouseLeave = () => {
        setIsDropdownOpen(false);
    };

    return (
        <nav className="">
            <div className="container mx-auto flex items-center justify-between">
                <div className="relative">
                    <div
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        className="Navbar relative inline-block cursor-pointer"
                    >
                        Category{' '}
                        {isDropdownOpen ? (
                            <ArrowDropUpOutlinedIcon fontSize="large" />
                        ) : (
                            <ArrowDropDownOutlinedIcon fontSize="large" />
                        )}
                    </div>
                    {isDropdownOpen && (
                        <div
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            className="absolute left-0 z-20 w-60 rounded-lg bg-white pt-4 shadow-lg"
                        >
                            <Link
                                to="/page1"
                                className="Navbar block px-5 py-4 text-gray-800 hover:bg-gray-200"
                                onClick={() => setIsDropdownOpen(false)}
                            >
                                FR-4
                            </Link>
                            <Link
                                to="/page2"
                                className="Navbar block px-5 py-4 text-gray-800 hover:bg-gray-200"
                                onClick={() => setIsDropdownOpen(false)}
                            >
                                CEM-1
                            </Link>
                            <Link
                                to="/page3"
                                className="Navbar block px-5 py-4 text-gray-800 hover:bg-gray-200"
                                onClick={() => setIsDropdownOpen(false)}
                            >
                                CEM-3
                            </Link>
                            <Link
                                to="/page3"
                                className="Navbar block px-5 py-4 text-gray-800 hover:bg-gray-200"
                                onClick={() => setIsDropdownOpen(false)}
                            >
                                Polyimide
                            </Link>
                            <Link
                                to="/page3"
                                className="Navbar block px-5 py-4 text-gray-800 hover:bg-gray-200"
                                onClick={() => setIsDropdownOpen(false)}
                            >
                                PTFE
                            </Link>
                            <Link
                                to="/page3"
                                className="Navbar block px-5 py-4 text-gray-800 hover:bg-gray-200"
                                onClick={() => setIsDropdownOpen(false)}
                            >
                                XPC, Phenolic
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default DropDown;
