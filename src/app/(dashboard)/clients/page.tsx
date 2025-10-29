'use client'
import { clients } from "@/data/clients";
import { ClientsTable, TableHeader } from "@/components/ui/tables";
import { useState } from "react";


export default function Page() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <div className="p-10 space-y-6">
        <TableHeader
        title="Clients"
        buttonText="Add Client"
        onAddClick={() => console.log("Add client clicked")}
        onSearchChange={setSearchTerm}
        />
        <ClientsTable clients={clients} />
      </div>
    </>
  )
}
