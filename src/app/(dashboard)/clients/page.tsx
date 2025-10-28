import { RiAddCircleLine } from "react-icons/ri";
import { clients } from "@/data/clients";
import { ClientsTable } from "@/components/ui/tables";

export default function Page() {
  return (
    <>
      <div className="p-10 space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="font-extrabold text-4xl">Clients</h1>
          <button className="flex items-center gap-x-1 rounded-md bg-primary text-gray-50 pt-3 pb-3 pr-5 pl-5 font-bold hover:text-gray-800 hover:shadow-orange-900 hover:shadow-lg transition-all duration-200">
            Add Client
            <RiAddCircleLine className="text-xl"/>
          </button>
        </div>
        <ClientsTable clients={clients} />
      </div>
    </>
  )
}
