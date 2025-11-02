'use client'
import { useState } from "react";
import { RiArrowUpDownLine } from "react-icons/ri";
import Link from "next/link";


type Client = {
    id: number;
    name: string;
    email: string;
    phone: string;
    totalProjects: number;
    outstandingBalance: number;
}

type ClientsTableProps = {
    clients: Client[]
}

export function ClientsTable({ clients = [] }: ClientsTableProps) {

    const [sortColumn, setSortColumn] = useState<keyof Client | null>(null);
    const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

    const handleSort = (key: keyof Client) => {
        if (sortColumn === key) {
            setSortOrder(prev => (prev === "asc" ? "desc" : "asc"));
        } else {
            setSortColumn(key);
            setSortOrder("asc");
        }
    };

    const sortedClients = [...clients].sort((a, b) => {
        if (!sortColumn) return 0;
        const aValue = a[sortColumn];
        const bValue = b[sortColumn];
        if (aValue < bValue) return sortOrder === "asc" ? -1 : 1;
        if (aValue > bValue) return sortOrder === "asc" ? 1 : -1;
        return 0;
    })


    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-400">
            <thead className="text-xs uppercase bg-primary text-gray-950">
            <tr>
                {[
                { key: "name", label: "Name" },
                { key: "email", label: "Email" },
                { key: "phone", label: "Phone" },
                { key: "totalProjects", label: "Total Projects" },
                { key: "outstandingBalance", label: "Outstanding Balance" },
                ].map((col) => (
                <th
                    key={col.key}
                    onClick={() => handleSort(col.key as keyof Client)}
                    className="px-6 py-3 cursor-pointer select-none"
                >
                    <div className="flex items-center gap-2">
                    {col.label}
                    {sortColumn === col.key && (
                        <RiArrowUpDownLine
                        className={`h-4 w-4 transition-transform ${
                            sortOrder === "asc" ? "rotate-180" : ""
                        }`}
                        />
                    )}
                    </div>
                </th>
                ))}
            </tr>
            </thead>
            <tbody>
            {sortedClients.map((client) => (
                <tr
                key={client.id}
                className="odd:bg-gray-900 even:bg-gray-800 border-b border-gray-700 hover:bg-primary-light hover:text-gray-950 transition-all duration-200"
                >
                <th
                    scope="row"
                    className="px-6 py-4 font-semibold whitespace-nowrap text-white"
                >
                    <Link href={`/clients/${client.id}`} className="hover:underline">
                        {client.name}
                    </Link>
                </th>
                <td className="px-6 py-4">{client.email}</td>
                <td className="px-6 py-4">{client.phone}</td>
                <td className="px-6 py-4">{client.totalProjects}</td>
                <td className="px-6 py-4">{client.outstandingBalance}</td>
                </tr>
            ))}
            {clients.length === 0 && (
                <tr>
                <td colSpan={5} className="text-center py-4">
                    No clients found.
                </td>
                </tr>
            )}
            </tbody>
        </table>
        </div>
    );
}