"use client"

import { useState } from "react";
import SidebarItem from "./SidebarItem";
import SidebarToggle from "./SidebarToggle";
import { RiBarChartBoxFill,  RiContactsFill, RiFileList2Fill, RiMoneyDollarCircleFill, RiSettings5Fill } from "react-icons/ri";


export default function Sidebar() {

  const [collapsed, setCollapsed] = useState<boolean>(false);
  
  return (
    <aside>
      <div>
        <SidebarToggle collapsed={collapsed} onToggle={() => setCollapsed(!collapsed)}/>
      </div>
      <div>
        <SidebarItem href="/overview" icon={<RiBarChartBoxFill />} label="Overview" collapsed={collapsed} />
        <SidebarItem href="/clients" icon={<RiContactsFill />} label="Clients" collapsed={collapsed} />
        <SidebarItem href="/projects" icon={<RiFileList2Fill />} label="Projects" collapsed={collapsed} />
        <SidebarItem href="/invoices" icon={<RiMoneyDollarCircleFill />} label="Invoices" collapsed={collapsed} />
        <SidebarItem href="/settings" icon={<RiSettings5Fill />} label="Settings" collapsed={collapsed} />
      </div>
    </aside>

  )
}
