import { Eye, Pencil, Trash2 } from "lucide-react";

type Emergency = {
  id: string;
  patient: string;
  type: string;
  severity: string;
  ambulance: string;
  hospital: string;
  status: string;
};

function badgeColor(status: string) {
  switch (status) {
    case "Dispatched":
      return "bg-blue-100 text-blue-700";
    case "En Route":
      return "bg-yellow-100 text-yellow-700";
    case "Hospitalized":
      return "bg-green-100 text-green-700";
    default:
      return "bg-gray-100 text-gray-700";
  }
}


interface EmergencyTableProps {
    emergencies: Emergency[];
    onEdit: (emergency: Emergency) => void;
    onDelete: (id: string) => void;
    onStatusChange: (id: string, status: string) => void;
}


export default function EmergencyTable({
  emergencies,
  onEdit,
  onDelete,
  onStatusChange,
}: EmergencyTableProps) {
  return (
    <div className="bg-white rounded-2xl shadow-md mt-8 overflow-x-auto">
      <table className="w-full">
        <thead className="bg-slate-100">
          <tr>
            <th className="text-left p-4">ID</th>
            <th className="text-left p-4">Patient</th>
            <th className="text-left p-4">Emergency</th>
            <th className="text-left p-4">Severity</th>
            <th className="text-left p-4">Ambulance</th>
            <th className="text-left p-4">Hospital</th>
            <th className="text-left p-4">Status</th>
          </tr>
        </thead>

        <tbody>
          {emergencies.map((e) => (
            <tr key={e.id} className="border-b hover:bg-slate-50">
              <td className="p-4">{e.id}</td>
              <td>{e.patient}</td>
              <td>{e.type}</td>
              <td>{e.severity}</td>
              <td>{e.ambulance}</td>
              <td>
                <select
                  value={e.status}
                  onChange={(event) =>
                    onStatusChange(e.id, event.target.value)
                  }
                  className="px-2 py-1 rounded-lg border border-slate-300"
                >
                  <option value="Dispatched">Dispatched</option>
                  <option value="En Route">En Route</option>
                  <option value="Hospitalized">Hospitalized</option>
                  <option value="Resolved">Resolved</option>
                </select>
              </td>
              <td>
                <span
                  className={`px-3 py-1 rounded-full text-sm ${badgeColor(
                    e.status
                  )}`}
                >
                  {e.status}
                </span>
              </td>

              <td>
                <div className="flex justify-center gap-3">
                  <Eye
                    size={18}
                    className="cursor-pointer text-blue-600"
                  />
                 <Pencil
                    size={18}
                    className="cursor-pointer text-green-600 hover:scale-110 transition"
                    onClick={() => onEdit(e)}
                  />
                  <Trash2
                      size={18}
                      className="cursor-pointer text-red-600 hover:scale-110 transition"
                      onClick={() => onDelete(e.id)}
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}