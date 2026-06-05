// components/AdminSidebar.tsx
import Link from "next/link";
import { Home, Settings, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AdminSidebar() {
  const navigation = [
    { name: "Dashboard", href: "/admin", icon: <Home className="h-5 w-5" /> },
    { name: "Users", href: "/admin/users", icon: <Users className="h-5 w-5" /> },
    { name: "Settings", href: "/admin/settings", icon: <Settings className="h-5 w-5" /> },
  ];

  return (
    <aside className="w-64 bg-gray-100 dark:bg-gray-800 p-4 border-r border-gray-200 dark:border-gray-700">
      <nav className="flex flex-col space-y-2">
        {navigation.map((item) => (
          <Link key={item.href} href={item.href} className="flex items-center space-x-2 p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
            {item.icon}
            <span className="text-sm font-medium">{item.name}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
