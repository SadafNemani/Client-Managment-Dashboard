import "./globals.css";
import React from "react";
import AppSidebar from "@/components/ui/AppSidebar";
import { cn } from "@/lib/utils";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={cn(
          "flex w-full h-screen bg-gray-100 dark:bg-neutral-900"
        )}
      >
        <AppSidebar />
        <main className="flex-1 overflow-y-auto">{children}</main>
      </body>
    </html>
  );
}