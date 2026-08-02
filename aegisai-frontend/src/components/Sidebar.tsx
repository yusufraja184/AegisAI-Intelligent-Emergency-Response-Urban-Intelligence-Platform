import { Link } from "react-router-dom";
import {
  LayoutDashboard,
  Siren,
  Users,
  Building2,
  Ambulance,
  BarChart3,
  Settings,
} from "lucide-react";

export default function Sidebar() {
  const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/" },
  { icon: Siren, label: "Emergency", path: "/emergency" },
  { icon: Users, label: "Patients", path: "/patients" },
  { icon: Building2, label: "Hospitals", path: "/hospitals" },
  { icon: Ambulance, label: "Ambulances", path: "/ambulances" },
  { icon: BarChart3, label: "Analytics", path: "/analytics" },
  { icon: Settings, label: "Settings", path: "/settings" },
];

  return (
    <aside className="w-64 min-h-screen bg-slate-900 text-white p-6">
      <h1 className="text-3xl font-bold text-cyan-400 mb-10">
        AegisAI
      </h1>

      <nav className="space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <Link
                key={item.label}
                to={item.path}
                className="flex items-center gap-3 w-full px-4 py-3 rounded-xl hover:bg-slate-800 transition"
            >
                <Icon size={20} />
                <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}