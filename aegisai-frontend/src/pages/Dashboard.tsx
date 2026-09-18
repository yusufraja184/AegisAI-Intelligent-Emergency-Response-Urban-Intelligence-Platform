import EmergencyChart from "../components/dashboard/EmergencyChart";
import StatCard from "../components/dashboard/StatCard";
import RecentEmergencies from "../components/dashboard/RecentEmergencies";
import EmergencyCategoryChart from "../components/dashboard/EmergencyCategoryChart";

import { useEmergencies } from "../context/EmergencyContext";
import { useAmbulances } from "../context/AmbulanceContext";
import { useHospitals } from "../context/HospitalContext";

export default function Dashboard() {
  const { emergencies } = useEmergencies();
  const { ambulances } = useAmbulances();
  const { hospitals } = useHospitals();

  // Active emergencies
  const activeEmergencies = emergencies.filter(
    (emergency) => emergency.status !== "Resolved"
  ).length;

  // Available ambulances
  const availableAmbulances = ambulances.filter(
    (ambulance) => ambulance.status === "Available"
  ).length;

  // Partner hospitals
  const partnerHospitals = hospitals.length;

  // Registered patients
  const registeredPatients = new Set(
    emergencies.map((emergency) => emergency.patient)
  ).size;

  // Emergency severity counts
  const criticalEmergencies = emergencies.filter(
    (emergency) => emergency.severity === "Critical"
  ).length;

  const highEmergencies = emergencies.filter(
    (emergency) => emergency.severity === "High"
  ).length;

  const mediumEmergencies = emergencies.filter(
    (emergency) => emergency.severity === "Medium"
  ).length;

  const resolvedEmergencies = emergencies.filter(
  (emergency) => emergency.status === "Resolved"
).length;
  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-slate-800">
          Dashboard
        </h1>

        <p className="text-slate-500 mt-2">
          Real-time overview of the emergency response system.
        </p>
      </div>

      {/* Main Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        <StatCard
          title="Active Emergencies"
          value={String(activeEmergencies)}
          color="#EF4444"
        />

        <StatCard
          title="Available Ambulances"
          value={String(availableAmbulances)}
          color="#3B82F6"
        />

        <StatCard
          title="Partner Hospitals"
          value={String(partnerHospitals)}
          color="#10B981"
        />

        <StatCard
          title="Registered Patients"
          value={String(registeredPatients)}
          color="#F59E0B"
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-8">
        <EmergencyChart />

        <EmergencyCategoryChart />
      </div>

      {/* Emergency Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-8">
        <div className="bg-white rounded-2xl shadow p-6">
          <h3 className="text-gray-500">
            Critical
          </h3>

          <p className="text-4xl font-bold text-red-600 mt-2">
            {criticalEmergencies}
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow p-6">
          <h3 className="text-gray-500">
            High
          </h3>

          <p className="text-4xl font-bold text-orange-500 mt-2">
            {highEmergencies}
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow p-6">
          <h3 className="text-gray-500">
            Medium
          </h3>

          <p className="text-4xl font-bold text-yellow-500 mt-2">
            {mediumEmergencies}
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow p-6">
          <h3 className="text-gray-500">
            Resolved
          </h3>

          <p className="text-4xl font-bold text-green-600 mt-2">
            {resolvedEmergencies}
          </p>
        </div>
      </div>

      {/* Recent Emergencies */}
      <div className="mt-8">
        <RecentEmergencies />
      </div>
    </div>
  );
}