import { useState } from "react";
import { useEmergencies } from "../context/EmergencyContext";

export default function Patients() {
  const { emergencies } = useEmergencies();

  const [search, setSearch] = useState("");

  // Create unique patient records from emergency data
  const patients = emergencies.reduce(
    (uniquePatients, emergency) => {
      const alreadyExists = uniquePatients.some(
        (patient) => patient.name === emergency.patient
      );

      if (!alreadyExists) {
        uniquePatients.push({
          id: emergency.id,
          name: emergency.patient,
          type: emergency.type,
          severity: emergency.severity,
          ambulance: emergency.ambulance,
          status: emergency.status,
        });
      }

      return uniquePatients;
    },
    [] as {
      id: string;
      name: string;
      type: string;
      severity: string;
      ambulance: string;
      status: string;
    }[]
  );

  // Search patients
  const filteredPatients = patients.filter((patient) =>
    patient.name.toLowerCase().includes(search.toLowerCase())
  );

  // Statistics
  const totalPatients = patients.length;

  const criticalPatients = patients.filter(
    (patient) => patient.severity === "Critical"
  ).length;

  const activePatients = patients.filter(
    (patient) =>
      patient.status !== "Resolved" &&
      patient.status !== "Hospitalized"
  ).length;

  const hospitalizedPatients = patients.filter(
    (patient) => patient.status === "Hospitalized"
  ).length;

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-4xl font-bold text-slate-800">
            Patient Management
          </h1>

          <p className="text-slate-500 mt-2">
            Monitor and manage patients involved in emergency cases.
          </p>
        </div>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h3 className="text-slate-500">
            Total Patients
          </h3>

          <p className="text-4xl font-bold text-slate-800 mt-2">
            {totalPatients}
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6">
          <h3 className="text-slate-500">
            Critical Patients
          </h3>

          <p className="text-4xl font-bold text-red-600 mt-2">
            {criticalPatients}
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6">
          <h3 className="text-slate-500">
            Active Cases
          </h3>

          <p className="text-4xl font-bold text-orange-500 mt-2">
            {activePatients}
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6">
          <h3 className="text-slate-500">
            Hospitalized
          </h3>

          <p className="text-4xl font-bold text-green-600 mt-2">
            {hospitalizedPatients}
          </p>
        </div>
      </div>

      {/* Search */}
      <div className="bg-white rounded-2xl shadow-md p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <div>
            <h2 className="text-xl font-semibold text-slate-800">
              Patient Records
            </h2>

            <p className="text-slate-500 mt-1">
              Patients registered through emergency cases.
            </p>
          </div>

          <input
            type="text"
            placeholder="Search patient..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-red-500 w-full md:w-72"
          />
        </div>

        {/* Patient Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-100">
              <tr>
                <th className="text-left p-4">
                  Patient ID
                </th>

                <th className="text-left p-4">
                  Patient Name
                </th>

                <th className="text-left p-4">
                  Emergency Type
                </th>

                <th className="text-left p-4">
                  Severity
                </th>

                <th className="text-left p-4">
                  Ambulance
                </th>

                <th className="text-left p-4">
                  Status
                </th>
              </tr>
            </thead>

            <tbody>
              {filteredPatients.map((patient) => (
                <tr
                  key={patient.id}
                  className="border-b hover:bg-slate-50"
                >
                  <td className="p-4 font-medium">
                    {patient.id}
                  </td>

                  <td className="p-4">
                    {patient.name}
                  </td>

                  <td className="p-4">
                    {patient.type}
                  </td>

                  <td className="p-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        patient.severity === "Critical"
                          ? "bg-red-100 text-red-700"
                          : patient.severity === "High"
                          ? "bg-orange-100 text-orange-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {patient.severity}
                    </span>
                  </td>

                  <td className="p-4">
                    {patient.ambulance === "Pending"
                      ? "Not Assigned"
                      : patient.ambulance}
                  </td>

                  <td className="p-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        patient.status === "Hospitalized"
                          ? "bg-green-100 text-green-700"
                          : patient.status === "Resolved"
                          ? "bg-blue-100 text-blue-700"
                          : "bg-orange-100 text-orange-700"
                      }`}
                    >
                      {patient.status}
                    </span>
                  </td>
                </tr>
              ))}

              {filteredPatients.length === 0 && (
                <tr>
                  <td
                    colSpan={6}
                    className="text-center p-8 text-slate-500"
                  >
                    No patients found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}