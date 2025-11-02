import { clients } from "@/data/clients";
import { projects } from "@/data/projects";
import Link from "next/link";

type ClientDetailProps = {
    params: { id: string };
}

export default async function ClientDetailPage({ params }: ClientDetailProps) {
    const { id } = await params;
    const clientID = parseInt(id);
    const client = clients.find(c => c.id === clientID);

    if (!client) {
        return <div className="p-10 text-red-500">Client not found</div>;
    }

    const clientProjects = projects.filter(p => p.clientId === clientID);

    return (
    <section className="p-10 space-y-6">
      <Link href="/clients" className="text-primary hover:underline">
        ← Back to Clients
      </Link>

      <h1 className="text-3xl font-extrabold">{client.name}</h1>

      <div className="bg-gray-800 p-6 rounded-lg space-y-2 text-gray-200">
        <p><span className="font-semibold">Email:</span> {client.email}</p>
        <p><span className="font-semibold">Phone:</span> {client.phone}</p>
        <p><span className="font-semibold">Outstanding Balance:</span> ${client.outstandingBalance}</p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-3">Projects</h2>
        {clientProjects.length > 0 ? (
          <ul className="space-y-2">
            {clientProjects.map(project => (
              <li key={project.id} className="bg-gray-800 p-4 rounded-lg">
                <h3 className="font-semibold text-lg">{project.name}</h3>
                <p>Status: {project.status}</p>
                <p>Budget: ${project.budget}</p>
                <p>Deadline: {project.deadline}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-400">No projects yet.</p>
        )}
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-3">Notes</h2>
        <textarea
          className="w-full bg-gray-900 p-3 rounded-lg text-gray-200 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
          rows={4}
          placeholder="Add notes about this client..."
        />
        <button
          className="mt-2 px-6 py-2 bg-primary text-gray-900 font-bold rounded-md hover:shadow-lg transition-all"
        >
          Save
        </button>
      </div>
    </section>
    )
}