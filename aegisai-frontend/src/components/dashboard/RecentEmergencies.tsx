const emergencies = [
  {
    id: "EM-101",
    patient: "Rahul Sharma",
    type: "Cardiac Arrest",
    severity: "Critical",
    status: "Dispatched",
  },
  {
    id: "EM-102",
    patient: "Priya Singh",
    type: "Accident",
    severity: "High",
    status: "En Route",
  },
  {
    id: "EM-103",
    patient: "Aman Khan",
    type: "Stroke",
    severity: "Critical",
    status: "Hospitalized",
  },
  {
    id: "EM-104",
    patient: "Neha Verma",
    type: "Burn Injury",
    severity: "Medium",
    status: "Waiting",
  },
];

export default function RecentEmergencies() {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 mt-8">
      <h2 className="text-xl font-semibold mb-4">
        Recent Emergencies
      </h2>

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
          {emergencies.map((item) => (
            <tr key={item.id} className="border-b hover:bg-slate-50">
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
  );
}