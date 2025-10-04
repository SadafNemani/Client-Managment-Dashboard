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
      label: "Overview",
      href: "/overview",
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
      <SidebarBody>
        <div className="flex flex-col justify-between h-full">
          <div className="flex flex-col gap-2">
            {links.map((link) => (
              <SidebarLink
                key={link.href}
                link={link}
                className={cn(
                  "px-3 rounded-lg transition",
                  pathname === link.href
                    ? "bg-neutral-200/70 dark:bg-neutral-700/70"
                    : "hover:bg-neutral-200/40 dark:hover:bg-neutral-800/40"
                )}
              />
            ))}
          </div>
          {/* Optional footer */}
          <div className="text-xs text-neutral-500 dark:text-neutral-400 p-2">
            © 2025 Your App
          </div>
        </div>
      </SidebarBody>
    </Sidebar>
  );
}