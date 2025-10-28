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
    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-400">
                <thead className="text-xs uppercase bg-primary text-gray-950">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Email
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Phone
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Total Projects
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Outstanding Balance
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {clients.map((client) => (
                        <tr key={client.id} className="odd:bg-gray-900 even:bg-gray-800 border-b border-gray-700 hover:bg-primary-light hover:text-gray-950 transition-all duration-200">
                            <th scope="row" className="px-6 py-4 font-semibold whitespace-nowrap text-white">
                                {client.name}
                            </th>
                            <td className="px-6 py-4">
                                {client.email}
                            </td>
                            <td className="px-6 py-4">
                                {client.phone}
                            </td>
                            <td className="px-6 py-4">
                                {client.totalProjects}
                            </td>
                            <td className="px-6 py-4">
                                {client.outstandingBalance}
                            </td>
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

    )
}