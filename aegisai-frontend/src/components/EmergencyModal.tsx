import { useEffect, useState } from "react";
import { useHospitals } from "../context/HospitalContext";

interface Emergency {
  id: string;
  patient: string;
  type: string;
  severity: string;
  ambulance: string;
  hospital: string;
  status: string;
}

interface Ambulance {
  id: string;
  driver: string;
  vehicle: string;
  location: string;
  status: "Available" | "Busy" | "Maintenance";
}


interface EmergencyModalProps {
  open: boolean;
  onClose: () => void;
  onSave: (emergency: Emergency) => void;
  editingEmergency: Emergency | null;
}

export default function EmergencyModal({
  open,
  onClose,
  onSave,
  editingEmergency,
}: EmergencyModalProps) {
  const [patientName, setPatientName] = useState("");
  const [emergencyType, setEmergencyType] = useState("");
  const [severity, setSeverity] = useState("Critical");

  const [selectedAmbulance, setSelectedAmbulance] =
    useState("Pending");

  const [selectedHospital, setSelectedHospital] =
    useState("Pending");

  const [ambulances, setAmbulances] = useState<Ambulance[]>(
    []
  );

  const { hospitals, admitPatient } = useHospitals();

  // Load ambulances
  useEffect(() => {
    const savedAmbulances = localStorage.getItem(
      "aegisai_ambulances"
    );

    if (savedAmbulances) {
      setAmbulances(JSON.parse(savedAmbulances));
    } else {
      setAmbulances([]);
    }
  }, [open]);

  

  // Load existing emergency when editing
  useEffect(() => {
    if (!open) return;

    if (editingEmergency) {
      setPatientName(editingEmergency.patient);
      setEmergencyType(editingEmergency.type);
      setSeverity(editingEmergency.severity);

      setSelectedAmbulance(
        editingEmergency.ambulance
      );

      setSelectedHospital(
        editingEmergency.hospital || "Pending"
      );
    } else {
      setPatientName("");
      setEmergencyType("");
      setSeverity("Critical");
      setSelectedAmbulance("Pending");
      setSelectedHospital("Pending");
    }
  }, [open, editingEmergency]);

  if (!open) return null;

  // Only show available ambulances
  const availableAmbulances = ambulances.filter(
    (ambulance) =>
      ambulance.status === "Available"
  );

  // Only show hospitals which have beds
  const availableHospitals = hospitals.filter(
  (hospital) =>
    hospital.availableBeds > 0 &&
    hospital.status !== "Full"
);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !patientName.trim() ||
      !emergencyType.trim()
    ) {
      alert(
        "Please enter patient name and emergency type."
      );

      return;
    }

    const newStatus =
      selectedAmbulance !== "Pending"
        ? "Dispatched"
        : "Pending";

    const newEmergency: Emergency = {
      id: editingEmergency
        ? editingEmergency.id
        : Date.now().toString(),

      patient: patientName,

      type: emergencyType,

      severity: severity,

      ambulance: selectedAmbulance,

      hospital: selectedHospital,

      status: editingEmergency
        ? selectedAmbulance !== "Pending"
          ? "Dispatched"
          : editingEmergency.status
        : newStatus,
    };

    // Update ambulance status
    if (
      selectedAmbulance !== "Pending"
    ) {
      const updatedAmbulances =
        ambulances.map((ambulance) => {
          if (
            ambulance.id === selectedAmbulance
          ) {
            return {
              ...ambulance,
              status: "Busy" as const,
            };
          }

          return ambulance;
        });

      setAmbulances(updatedAmbulances);

      localStorage.setItem(
        "aegisai_ambulances",
        JSON.stringify(updatedAmbulances)
      );
    }

   // Update hospital bed
if (
  selectedHospital !== "Pending" &&
  !editingEmergency
) {
  admitPatient(selectedHospital);
}

// Save emergency
onSave(newEmergency);

    // Reset form
    setPatientName("");
    setEmergencyType("");
    setSeverity("Critical");
    setSelectedAmbulance("Pending");
    setSelectedHospital("Pending");

    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-8 w-[500px] shadow-xl max-h-[90vh] overflow-y-auto">

        {/* Heading */}
        <h2 className="text-2xl font-bold mb-6">
          {editingEmergency
            ? "Edit Emergency"
            : "Add New Emergency"}
        </h2>

        <form
          onSubmit={onSubmit}
          className="space-y-4"
        >

          {/* Patient */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Patient Name
            </label>

            <input
              type="text"
              placeholder="Patient Name"
              value={patientName}
              onChange={(e) =>
                setPatientName(e.target.value)
              }
              className="w-full border rounded-lg p-3"
            />
          </div>

          {/* Emergency Type */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Emergency Type
            </label>

            <input
              type="text"
              placeholder="Emergency Type"
              value={emergencyType}
              onChange={(e) =>
                setEmergencyType(e.target.value)
              }
              className="w-full border rounded-lg p-3"
            />
          </div>

          {/* Severity */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Severity
            </label>

            <select
              value={severity}
              onChange={(e) =>
                setSeverity(e.target.value)
              }
              className="w-full border rounded-lg p-3"
            >
              <option>Critical</option>
              <option>High</option>
              <option>Medium</option>
            </select>
          </div>

          {/* Ambulance */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Ambulance
            </label>

            <select
              value={selectedAmbulance}
              onChange={(e) =>
                setSelectedAmbulance(e.target.value)
              }
              className="w-full border rounded-lg p-3"
            >
              <option value="Pending">
                No Ambulance Assigned
              </option>

              {availableAmbulances.map(
                (ambulance) => (
                  <option
                    key={ambulance.id}
                    value={ambulance.id}
                  >
                    {ambulance.id} -{" "}
                    {ambulance.driver}
                  </option>
                )
              )}
            </select>

            {availableAmbulances.length === 0 && (
              <p className="text-sm text-red-500 mt-2">
                No ambulances are currently available.
              </p>
            )}
          </div>

          {/* Hospital */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Hospital
            </label>

            <select
              value={selectedHospital}
              onChange={(e) =>
                setSelectedHospital(e.target.value)
              }
              className="w-full border rounded-lg p-3"
            >
              <option value="Pending">
                No Hospital Selected
              </option>

              {availableHospitals.map(
                (hospital) => (
                  <option
                    key={hospital.id}
                    value={hospital.id}
                  >
                    {hospital.id} -{" "}
                    {hospital.name}{" "}
                    ({hospital.availableBeds} beds)
                  </option>
                )
              )}
            </select>

            {availableHospitals.length === 0 && (
              <p className="text-sm text-red-500 mt-2">
                No hospitals currently have available beds.
              </p>
            )}
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-3 pt-4">

            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2 border rounded-lg"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-5 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
            >
              Save
            </button>

          </div>
        </form>
      </div>
    </div>
  );
}