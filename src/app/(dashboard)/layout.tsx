import React from "react";
import AppSidebar from "@/components/ui/AppSidebar";
import { Navbar } from "@/components/ui/navbar";
import { cn } from "@/lib/utils";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
    className={cn(
        "flex w-full h-screen bg-background text-neutral-200 border border-neutral-800 rounded-md"
    )}
    >
    <AppSidebar />
    <div className="flex-col flex-1">
        <Navbar />
        <main className="flex-1 overflow-y-auto bg-background-light h-full">{children}</main>
    </div>
    </div>
  );
}