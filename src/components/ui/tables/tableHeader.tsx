'use client'
import { useState } from "react";
import { RiAddCircleLine } from "react-icons/ri";
import { RiSearchLine } from "react-icons/ri";
import { RiArrowUpDownLine } from "react-icons/ri";
import { RiFilterFill } from "react-icons/ri";

type TableHeaderProps = {
    title: string;
    buttonText: string;
    onAddClick: () => void;
    onSearchChange?: (value: string) => void;
    onSortChange?: (field: string) => void;
    onToggleUnpaid?: (value: boolean) => void;
}

export function TableHeader({  
    title,
    buttonText,
    onAddClick,
    onSearchChange,
    onSortChange,
    onToggleUnpaid,}: TableHeaderProps) {

    const [activeFilter, setActiveFilter] = useState<"search" | "sort" | "unpaid" | null>(null);
    const [searchValue, setSearchValue] = useState("");
    const [showUnpaidOnly, setShowUnpaidOnly] = useState(false);

    function toggleFilter(type: "search" | "sort" | "unpaid") {
    setActiveFilter(prev => (prev === type ? null : type));
    }


    return (
        <div className="flex justify-between items-center">
            <h1 className="font-extrabold text-4xl">{title}</h1>

            <div className="flex items-center gap-x-4">
                <div className="flex items-center gap-x-2">
                    <div className={`flex items-center overflow-hidden transition-all duration-300 ${activeFilter === 'search' ? 'w-64' : 'w-6'}`}>
                        <RiSearchLine onClick={() => toggleFilter("search")} className="cursor-pointer text-xl" />
                        {activeFilter === 'search' && (
                        <input
                            type="text"
                            value={searchValue}
                            onChange={e => { setSearchValue(e.target.value); onSearchChange?.(e.target.value); }}
                            placeholder="Search..."
                            className="ml-2 flex-1 outline-none bg-transparent p-2 text-sm text-white placeholder-gray-400 bg-background-dark border border-gray-600 rounded-lg focus:ring-primary focus:border-primary"
                        />
                        )}
                    </div>

                    <RiArrowUpDownLine onClick={() => toggleFilter("sort")} className="cursor-pointer text-xl" />

                    <RiFilterFill onClick={() => toggleFilter("unpaid")} className="cursor-pointer text-xl" />
                </div>

                <button
                onClick={onAddClick}
                className="flex items-center gap-x-1 rounded-md bg-primary text-gray-50 pt-3 pb-3 pr-5 pl-5 font-bold hover:text-gray-800 hover:shadow-orange-900 hover:shadow-lg transition-all duration-200"
                >
                    {buttonText}
                    <RiAddCircleLine className="text-xl" />
                </button>
            </div>
        </div>
    )
}