import { useState } from "react";
import EmergencyModal from "../components/EmergencyModal";
import { Plus } from "lucide-react";
import EmergencyTable from "../components/EmergencyTable";

export default function Emergency() {

  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [severity, setSeverity] = useState("All Severity");
  const [editingEmergency, setEditingEmergency] = useState<any>(null);
  const [emergencies, setEmergencies] = useState([

  {
    id: "EM-101",
    patient: "Rahul Sharma",
    type: "Cardiac Arrest",
    severity: "Critical",
    ambulance: "AMB-12",
    status: "Dispatched",
  },
  {
    id: "EM-102",
    patient: "Priya Singh",
    type: "Road Accident",
    severity: "High",
    ambulance: "AMB-08",
    status: "En Route",
  },
  {
    id: "EM-103",
    patient: "Aman Khan",
    type: "Stroke",
    severity: "Critical",
    ambulance: "AMB-04",
    status: "Hospitalized",
  },
]);

const filteredEmergencies = emergencies.filter((emergency) => {

    const matchesSearch =
        emergency.patient
            .toLowerCase()
            .includes(search.toLowerCase());

    const matchesSeverity =
        severity === "All Severity" ||
        emergency.severity === severity;

    return matchesSearch && matchesSeverity;

});

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-4xl font-bold text-slate-800">
            Emergency Management
          </h1>

          <p className="text-slate-500 mt-2">
            Monitor and manage emergency cases in real time.
          </p>
        </div>

        <button
    onClick={() => setOpen(true)}
    className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-5 py-3 rounded-xl"
>
          <Plus size={20} />
          New Emergency
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-6">

  <input
    type="text"
    placeholder="Search patient..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    className="flex-1 border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-red-500"
/>

      <select
  value={severity}
  onChange={(e) => setSeverity(e.target.value)}
  className="border rounded-xl px-4 py-3"
>
  <option>All Severity</option>
  <option>Critical</option>
  <option>High</option>
  <option>Medium</option>
  <option>Resolved</option>
</select>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-2xl shadow p-6">
          <h3 className="text-gray-500">Critical</h3>
          <p className="text-4xl font-bold text-red-600 mt-2">18</p>
        
        
        </div>

        <div className="bg-white rounded-2xl shadow p-6">
          <h3 className="text-gray-500">High</h3>
          <p className="text-4xl font-bold text-orange-500 mt-2">34</p>
        </div>

        <div className="bg-white rounded-2xl shadow p-6">
          <h3 className="text-gray-500">Medium</h3>
          <p className="text-4xl font-bold text-yellow-500 mt-2">42</p>
        </div>

        <div className="bg-white rounded-2xl shadow p-6">
          <h3 className="text-gray-500">Resolved</h3>
          <p className="text-4xl font-bold text-green-600 mt-2">126</p>
        </div>
      </div>
      <EmergencyTable
          emergencies={filteredEmergencies}
          onEdit={(emergency) => {
              setEditingEmergency(emergency);
              setOpen(true);
          }}
          onDelete={(id) => {
              setEmergencies((prev) =>
                prev.filter((emergency) => emergency.id !== id)
              );
          }}
      />

      <EmergencyModal
        open={open}
        editingEmergency={editingEmergency}
        onClose={() => {
            setOpen(false);
            setEditingEmergency(null);
        }}
        onSave={(newEmergency) => {

    if (editingEmergency) {

        setEmergencies((prev) =>
            prev.map((emergency) =>
                emergency.id === editingEmergency.id
                    ? {
                          ...newEmergency,
                          id: editingEmergency.id,
                          ambulance: editingEmergency.ambulance,
                          status: editingEmergency.status,
                      }
                    : emergency
            )
        );

    } else {

        setEmergencies((prev) => [
            newEmergency,
            ...prev,
        ]);

    }

    setEditingEmergency(null);

}}
      />
    </div> 
  );
}