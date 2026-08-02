import EmergencyChart from "../components/dashboard/EmergencyChart";
import StatCard from "../components/dashboard/StatCard";
import RecentEmergencies from "../components/dashboard/RecentEmergencies";
import EmergencyCategoryChart from "../components/dashboard/EmergencyCategoryChart";

export default function Dashboard() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-slate-800">
        Dashboard
      </h1>

      <p className="text-slate-500 mt-2">
        Real-time overview of the emergency response system.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-8">
        <StatCard
          title="Active Emergencies"
          value="124"
          color="#EF4444"
        />

        <StatCard
          title="Available Ambulances"
          value="32"
          color="#3B82F6"
        />

        <StatCard
          title="Partner Hospitals"
          value="18"
          color="#10B981"
        />

        <StatCard
          title="Registered Patients"
          value="2,486"
          color="#F59E0B"
        />
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-8">
    <EmergencyChart />
    <EmergencyCategoryChart />
    </div>
        <RecentEmergencies />
      </div>
    </div>
  );
}