import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";


export type SidebarItemProps = {
  href: string;
  icon: React.ReactNode;
  label: string;
  collapsed: boolean;
}


export default function SidebarItem({ href, icon, label, collapsed}: SidebarItemProps) {
  return (
    <Link 
      href={href}
      className={cn(
        "flex items-center gap-2 px-3 py-2 rounded-md text-gray-700 hover:bg-gray-800 hover:text-white dark:text-gray-200",
        collapsed ? "justify-center" : "justify-start"
      )}
    >
      <span>{icon}</span>
      {!collapsed && <span>{label}</span>}
    </Link>
  )
}
