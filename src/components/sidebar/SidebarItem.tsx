import React from "react";
import Link from "next/link";


export type SidebarItemProps = {
  href: string;
  icon: React.ReactNode;
  label: string;
  collapsed: boolean;
}


export default function SidebarItem({ href, icon, label, collapsed}: SidebarItemProps) {
  return (
    <Link href={href}>
      <span>{icon}</span>
      {!collapsed && <span>{label}</span>}
    </Link>
  )
}
