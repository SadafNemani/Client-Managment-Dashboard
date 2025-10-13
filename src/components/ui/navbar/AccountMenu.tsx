"use client"

import { useState, useEffect, useRef } from "react"

export default function AccountMenu() {
    const [open, setOpen] = useState(false);
    
    const dropdownRef = useRef<HTMLDivElement | null>(null);
    
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
        const target = event.target as Node | null
        if (dropdownRef.current && target && !dropdownRef.current.contains(target)) {
            setOpen(false)
        }
        }

        document.addEventListener("mousedown", handleClickOutside)
        return () => {
        document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [])

    return(
        <div className="relative flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse" ref={dropdownRef}>
        <button
            type="button"
            onClick={() => setOpen(v => !v)}
            className="flex text-sm bg-gray-800 rounded-full focus:ring-2 focus:ring-primary"
        >
            <span className="sr-only">Open user menu</span>
            <img className="w-9 h-9 rounded-full" src="/profile-images/SADAF1.jpeg" alt="sadaf photo" />
        </button>

        <div
            className={`absolute right-0 top-10 z-50 ${open ? 'block' : 'hidden'} my-4 text-base list-none  divide-y rounded-lg shadow-sm bg-gray-900 divide-gray-600 font-bold`}
        >
            <div className="px-4 py-3">
            <span className="block text-sm text-gray-300">Sadaf Nemani</span>
            <span className="block text-sm text-gray-400">sedefnemani@gmail.com</span>
            </div>
            <button className="block w-full px-4 py-2 text-left text-sm hover:bg-primary rounded-lg">
            Sign out
            </button>
        </div>
        </div>
    )
}