"use client";

import {
  Sidebar,
  SidebarBody,
  SidebarLink,
} from "@/components/ui/sidebar"; 
import {
  RiBarChartBoxFill,
  RiContactsFill,
  RiFileList2Fill,
  RiMoneyDollarCircleFill,
  RiSettings5Fill,
} from "react-icons/ri";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function AppSidebar() {
  const pathname = usePathname();

  const links = [
    {
      label: "Dashboard",
      href: "/dashboard",
      icon: <RiBarChartBoxFill className="h-6 w-6" />,
    },
    {
      label: "Clients",
      href: "/clients",
      icon: <RiContactsFill className="h-6 w-6" />,
    },
    {
      label: "Projects",
      href: "/projects",
      icon: <RiFileList2Fill className="h-6 w-6" />,
    },
    {
      label: "Invoices",
      href: "/invoices",
      icon: <RiMoneyDollarCircleFill className="h-6 w-6" />,
    },
    {
      label: "Settings",
      href: "/settings",
      icon: <RiSettings5Fill className="h-6 w-6" />,
    },
  ];

  return (
    <Sidebar>
      <SidebarBody className="border-r border-neutral-800 bg-background-light pt-10">
        <div className="flex flex-col justify-between h-full">
          <div className="flex flex-col gap-2">
            {links.map((link) => (
              <SidebarLink
                key={link.href}
                link={{
                  ...link,
                  icon: (
                    <span className="text-neutral-400 group-hover/sidebar:text-neutral-900 group-hover/sidebar:scale-110 transition-all duration-150 active:text-neutral-900">
                      {link.icon}
                    </span>
                  ),
                }}
                className={cn(
                  "flex items-center gap-3 px-3 py-2 rounded-lg transition-colors duration-150 text-base font-bold",
                  "text-neutral-400 hover:text-neutral-900 hover:bg-primary active:text-neutral-900",
                  pathname === link.href ? "bg-primary text-neutral-900" : ""
                )}
              />
            ))}
          </div>
        </div>
      </SidebarBody>
    </Sidebar>
  );
}