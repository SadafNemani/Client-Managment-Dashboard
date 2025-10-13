"use client"

import { usePathname } from "next/navigation";
import { useState } from "react";

export default function PageTitle() {
    const pathName = usePathname();
    const formattedPathName =
    pathName.slice(1) === ''
        ? ''
        : pathName.slice(1)[0].toUpperCase() + pathName.slice(2);
    
    const [search, setSearch] = useState();

    return (
        <h1 className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            { pathName == '/' ? 'Client Management Dashboard' : formattedPathName }
        </h1>
    )
}