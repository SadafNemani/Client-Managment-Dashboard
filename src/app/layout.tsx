import "./globals.css";
import {Sidebar} from "@/components/ui/sidebar";
import React from "react";


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Sidebar />
        {children}
      </body>
    </html>
  )
}