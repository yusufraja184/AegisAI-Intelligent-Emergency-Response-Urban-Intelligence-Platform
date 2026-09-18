import { useEmergencies } from "../../context/EmergencyContext";

export default function RecentEmergencies() {
  const { emergencies } = useEmergencies();

  const recentEmergencies = emergencies.slice(0, 4);

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 mt-8">
      <h2 className="text-xl font-semibold mb-4">
        Recent Emergencies
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b text-left">
              <th className="py-3">ID</th>
              <th>Patient</th>
              <th>Type</th>
              <th>Severity</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {recentEmergencies.map((item) => (
              <tr
                key={item.id}
                className="border-b hover:bg-slate-50"
              >
                <td className="py-3">{item.id}</td>
                <td>{item.patient}</td>
                <td>{item.type}</td>
                <td>{item.severity}</td>
                <td>{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {recentEmergencies.length === 0 && (
        <p className="text-slate-500 text-center py-6">
          No emergencies available.
        </p>
      )}
    </div>
  );
}