"use client"

import { usePathname } from "next/navigation";
import { useState } from "react";


export default function Navbar() {
    const pathName = usePathname();
    const formattedPathName =
    pathName.slice(1) === ''
        ? ''
        : pathName.slice(1)[0].toUpperCase() + pathName.slice(2);
    
    const [search, setSearch] = useState();

    return (
        <nav className="bg-background-light border-b border-gray-500">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <h1 className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                    { pathName == '/' ? 'Client Management Dashboard' : formattedPathName }
                </h1>
                
                <div className="flex-1 mr-10 ml-10">
                    <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center ps-3 pointer-events-none">
                        <svg 
                            className="w-4 h-4 text-gray-400"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 20"
                        >
                        <path 
                            stroke="currentColor"
                            strokeLinecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                        </svg>
                        <span className="sr-only">Search icon</span>
                    </div>

                    <input
                        type="text"
                        id="search-navbar"
                        className="block w-full p-2 ps-10 text-sm text-white placeholder-gray-400 bg-background-dark border border-gray-600 rounded-lg focus:ring-primary focus:border-primary"
                        placeholder="Search..."
                    />
                    </div>
                </div>
                <div>Account</div>
            </div>
        </nav>
    )
}