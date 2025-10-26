import { RiAddCircleLine } from "react-icons/ri";

export default function Page() {
  return (
    <header className="p-10 flex justify-between">
      <h1 className="font-extrabold text-4xl">Clients</h1>
      <button className="flex items-center gap-x-1 rounded-md bg-primary text-gray-50 pt-3 pb-3 pr-5 pl-5 font-bold hover:text-gray-800 hover:shadow-orange-900 hover:shadow-lg transition-all duration-200">
        Add Client
        <RiAddCircleLine className="text-xl"/>
      </button>
    </header>
  )
}
