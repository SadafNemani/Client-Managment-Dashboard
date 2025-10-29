export default function SearchBar() {
    return (
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
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
                </svg>
                <span className="sr-only">Search icon</span>
            </div>

            <input
                type="text"
                id="search-navbar"
                className="block w-full p-2 ps-10 outline-none text-sm text-white placeholder-gray-400 bg-background-dark border border-gray-600 rounded-lg focus:ring-primary focus:border-primary"
                placeholder="Search..."
            />
            </div>
        </div>
    )
}