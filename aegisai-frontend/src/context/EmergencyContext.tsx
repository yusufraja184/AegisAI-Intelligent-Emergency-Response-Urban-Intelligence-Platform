import {
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";

import type { ReactNode } from "react";
export interface Emergency {
  id: string;
  patient: string;
  type: string;
  severity: string;
  ambulance: string;
  hospital: string;
  status: string;
}

interface EmergencyContextType {
  emergencies: Emergency[];
  addEmergency: (emergency: Emergency) => void;
  updateEmergency: (emergency: Emergency) => void;
  deleteEmergency: (id: string) => void;
}

const EmergencyContext = createContext<EmergencyContextType | undefined>(
  undefined
);

const initialEmergencies: Emergency[] = [
  {
    id: "EM-101",
    patient: "Rahul Sharma",
    type: "Cardiac Arrest",
    severity: "Critical",
    ambulance: "AMB-12",
    hospital: "HOS-01",
    status: "Dispatched",
  },
  {
    id: "EM-102",
    patient: "Priya Singh",
    type: "Road Accident",
    severity: "High",
    ambulance: "AMB-08",
    hospital: "HOS-01",
    status: "En Route",
  },
  {
    id: "EM-103",
    patient: "Aman Khan",
    type: "Stroke",
    severity: "Critical",
    ambulance: "AMB-04",
    hospital: "HOS-01",
    status: "Hospitalized",
  },
];

export function EmergencyProvider({ children }: { children: ReactNode }) {
  const [emergencies, setEmergencies] = useState<Emergency[]>(() => {
  const savedEmergencies = localStorage.getItem("aegisai_emergencies");

  if (savedEmergencies) {
    return JSON.parse(savedEmergencies);
  }

  return initialEmergencies;
});

useEffect(() => {
  localStorage.setItem(
    "aegisai_emergencies",
    JSON.stringify(emergencies)
  );
}, [emergencies]);

  const addEmergency = (emergency: Emergency) => {
    setEmergencies((prev) => [emergency, ...prev]);
  };

  const updateEmergency = (updatedEmergency: Emergency) => {
    setEmergencies((prev) =>
      prev.map((emergency) =>
        emergency.id === updatedEmergency.id
          ? updatedEmergency
          : emergency
      )
    );
  };

  const deleteEmergency = (id: string) => {
    setEmergencies((prev) =>
      prev.filter((emergency) => emergency.id !== id)
    );
  };

  return (
    <EmergencyContext.Provider
      value={{
        emergencies,
        addEmergency,
        updateEmergency,
        deleteEmergency,
      }}
    >
      {children}
    </EmergencyContext.Provider>
  );
}

export function useEmergencies() {
  const context = useContext(EmergencyContext);

  if (!context) {
    throw new Error(
      "useEmergencies must be used inside EmergencyProvider"
    );
  }

  return context;
}