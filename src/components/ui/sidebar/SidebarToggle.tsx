import { RiArrowRightFill, RiArrowLeftFill } from "react-icons/ri";


type SidebarToggleProps = {
  collapsed: boolean;
  onToggle: () => void;
}

export default function SidebarToggle({ collapsed, onToggle }: SidebarToggleProps) {
  return (
    <button 
      onClick={onToggle}
      className="p-2 m-2 rounded-md border border-neutral-300 bg-white hover:bg-neutral-200 dark:border-neutral-700 dark:bg-neutral-900 dark:hover:bg-neutral-800"
    >
      {collapsed ? <RiArrowRightFill /> : <RiArrowLeftFill />}
    </button>
  )
}
