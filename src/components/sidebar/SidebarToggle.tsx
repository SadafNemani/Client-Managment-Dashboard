type SidebarToggleProps = {
  collapsed: boolean;
  onToggle: () => void;
}

export default function SidebarToggle({ collapsed, onToggle }: SidebarToggleProps) {
  return <button onClick={onToggle}>Toggle</button>;
}
