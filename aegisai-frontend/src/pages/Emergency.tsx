import { useState } from "react";
import EmergencyModal from "../components/EmergencyModal";
import { Plus } from "lucide-react";
import EmergencyTable from "../components/EmergencyTable";
import { useEmergencies } from "../context/EmergencyContext";
import { useHospitals } from "../context/HospitalContext";
import { useAmbulances } from "../context/AmbulanceContext";

export default function Emergency() {
  const { emergencies, addEmergency, updateEmergency, deleteEmergency } =
    useEmergencies();

    const handleStatusChange = (id: string, status: string) => {
  const emergency = emergencies.find(
    (item) => item.id === id
  );

  if (!emergency) return;

  updateEmergency({
    ...emergency,
    status,
  });
};

    const { dischargePatient, admitPatient } = useHospitals();
    const { ambulances, updateAmbulance } = useAmbulances();

  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [severity, setSeverity] = useState("All Severity");
  const [editingEmergency, setEditingEmergency] = useState<any>(null);

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
  const emergency = emergencies.find(
    (item) => item.id === id
  );

  if (!emergency) return;

  // Release hospital bed
  if (
    emergency.hospital &&
    emergency.hospital !== "Pending"
  ) {
    dischargePatient(emergency.hospital);
  }

  // Release ambulance
  if (
    emergency.ambulance &&
    emergency.ambulance !== "Pending"
  ) {
    const ambulance = ambulances.find(
      (item) => item.id === emergency.ambulance
    );

    if (ambulance) {
      updateAmbulance({
        ...ambulance,
        status: "Available",
      });
    }
  }

  // Delete emergency
  deleteEmergency(id);
}}
onStatusChange={handleStatusChange}
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
    const oldHospital = editingEmergency.hospital;
    const newHospital = newEmergency.hospital;

    const oldAmbulance = editingEmergency.ambulance;
    const newAmbulance = newEmergency.ambulance;

    // Handle hospital change
    if (oldHospital !== newHospital) {
      // Release old hospital bed
      if (
        oldHospital &&
        oldHospital !== "Pending"
      ) {
        dischargePatient(oldHospital);
      }

      // Allocate new hospital bed
      if (
        newHospital &&
        newHospital !== "Pending"
      ) {
        admitPatient(newHospital);
      }
    }

    // Handle ambulance change
    if (oldAmbulance !== newAmbulance) {
      // Release old ambulance
      if (
        oldAmbulance &&
        oldAmbulance !== "Pending"
      ) {
        const oldAmbulanceData = ambulances.find(
          (item) => item.id === oldAmbulance
        );

        if (oldAmbulanceData) {
          updateAmbulance({
            ...oldAmbulanceData,
            status: "Available",
          });
        }
      }

      // Assign new ambulance
      if (
        newAmbulance &&
        newAmbulance !== "Pending"
      ) {
        const newAmbulanceData = ambulances.find(
          (item) => item.id === newAmbulance
        );

        if (newAmbulanceData) {
          updateAmbulance({
            ...newAmbulanceData,
            status: "Busy",
          });
        }
      }
    }

    updateEmergency({
      ...newEmergency,
      id: editingEmergency.id,
      ambulance: newEmergency.ambulance,
      status: editingEmergency.status,
    });
  } else {
    addEmergency(newEmergency);
  }

  setEditingEmergency(null);
  setOpen(false);
}}
/>
    </div> 
  );
}