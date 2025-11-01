'use client'
import { clients } from "@/data/clients";
import { ClientsTable, TableHeader } from "@/components/ui/tables";
import { useState } from "react";


export default function Page() {
  const [searchTerm, setSearchTerm] = useState("");
  const [showUnpaidOnly, setShowUnpaidOnly] = useState(false);


  const filteredClients = clients
  .filter(client =>
    client.name.toLowerCase().includes(searchTerm.toLowerCase())
  )
  .filter(client =>
    !showUnpaidOnly || client.outstandingBalance > 0
  );

  return (
    <>
      <div className="p-10 space-y-6">
        <TableHeader
        title="Clients"
        buttonText="Add Client"
        onAddClick={() => console.log("Add client clicked")}
        onSearchChange={setSearchTerm}
        onToggleUnpaid={() => setShowUnpaidOnly(prev => !prev)}
        />
        <p className="text-sm text-gray-500">
          Showing {filteredClients.length} clients
        </p>
        <ClientsTable clients={filteredClients} />
      </div>
    </>
  )
}
