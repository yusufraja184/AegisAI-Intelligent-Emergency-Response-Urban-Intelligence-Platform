import React, { useState, useEffect } from "react";
interface Emergency {
  id: string;
  patient: string;
  type: string;
  severity: string;
  ambulance: string;
  status: string;
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

    const onSubmit = () => {

    onSave({
        id: Date.now().toString(),
        patient: patientName,
        type: emergencyType,
        severity: severity,
        ambulance: "Pending",
        status: "Pending",
    });

    setPatientName("");
    setEmergencyType("");
    setSeverity("Critical");

    onClose();

};

  if (!open) return null;
  const [patientName, setPatientName] = useState("");
  const [emergencyType, setEmergencyType] = useState("");
  const [severity, setSeverity] = useState("Critical");

  useEffect(() => {
    if (editingEmergency) {
        setPatientName(editingEmergency.patient);
        setEmergencyType(editingEmergency.type);
        setSeverity(editingEmergency.severity);
    } else {
        setPatientName("");
        setEmergencyType("");
        setSeverity("Critical");
    }
}, [editingEmergency]);

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
      <div className="bg-white rounded-2xl p-8 w-[500px]">
        <h2 className="text-2xl font-bold mb-6">
          Add New Emergency
        </h2>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Patient Name"
            value={patientName}
            onChange={(e) => setPatientName(e.target.value)}
            className="w-full border rounded-lg p-3"
           />

          <input
            type="text"
            placeholder="Emergency Type"
            value={emergencyType}
            onChange={(e) => setEmergencyType(e.target.value)}
            className="w-full border rounded-lg p-3"
          />

          <select
            value={severity}
            onChange={(e) => setSeverity(e.target.value)}
            className="w-full border rounded-lg p-3"
          >
            <option>Critical</option>
            <option>High</option>
            <option>Medium</option>
          </select>

          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2 border rounded-lg"
            >
              Cancel
            </button>

            <button
                type="button"
                onClick={onSubmit}
                className="px-5 py-2 bg-red-600 text-white rounded-lg"
            >
                Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}