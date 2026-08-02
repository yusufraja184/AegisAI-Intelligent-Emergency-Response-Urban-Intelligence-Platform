import { Bell, Search, UserCircle } from "lucide-react";

export default function Navbar() {
  return (
    <header className="h-16 bg-white shadow-sm flex items-center justify-between px-8">
      <h2 className="text-2xl font-semibold text-slate-800">
        Emergency Dashboard
      </h2>

      <div className="flex items-center gap-6">
        <div className="flex items-center bg-slate-100 rounded-lg px-3 py-2">
          <Search size={18} className="text-slate-500" />
          <input
            type="text"
            placeholder="Search..."
            className="ml-2 bg-transparent outline-none"
          />
        </div>

        <Bell className="cursor-pointer text-slate-600" />

        <div className="flex items-center gap-2">
          <UserCircle size={34} className="text-cyan-600" />
          <span className="font-medium">Yusuf</span>
        </div>
      </div>
    </header>
  );
}