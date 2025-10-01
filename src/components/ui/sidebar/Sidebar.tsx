"use client"

import { useState } from "react";
import SidebarItem from "./SidebarItem";
import SidebarToggle from "./SidebarToggle";
import { RiBarChartBoxFill,  RiContactsFill, RiFileList2Fill, RiMoneyDollarCircleFill, RiSettings5Fill } from "react-icons/ri";
import { cn } from "@/lib/utils";



export default function Sidebar() {

  const [collapsed, setCollapsed] = useState<boolean>(false);
  
  return (
    <aside
      className={cn(
        "flex flex-col h-screen border border-neutral-200 bg-gray-100 dark:border-neutral-700 dark:bg-neutral-800"
      )}
    >
      <div>
        <SidebarToggle collapsed={collapsed} onToggle={() => setCollapsed(!collapsed)}/>
      </div>
      <div className="mt-auto p-3">
        <SidebarItem href="/overview" icon={<RiBarChartBoxFill className="h-7 w-7" />} label="Overview" collapsed={collapsed} />
        <SidebarItem href="/clients" icon={<RiContactsFill className="h-7 w-7" />} label="Clients" collapsed={collapsed} />
        <SidebarItem href="/projects" icon={<RiFileList2Fill className="h-7 w-7" />} label="Projects" collapsed={collapsed} />
        <SidebarItem href="/invoices" icon={<RiMoneyDollarCircleFill className="h-7 w-7" />} label="Invoices" collapsed={collapsed} />
        <SidebarItem href="/settings" icon={<RiSettings5Fill className="h-7 w-7" />} label="Settings" collapsed={collapsed} />
      </div>
    </aside>

  )
}
