import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import type { ReactNode } from "react";

export interface Ambulance {
  id: string;
  driver: string;
  vehicle: string;
  location: string;
  status: "Available" | "Busy" | "Maintenance";
}

interface AmbulanceContextType {
  ambulances: Ambulance[];
  updateAmbulance: (ambulance: Ambulance) => void;
}

const initialAmbulances: Ambulance[] = [
  {
    id: "AMB-01",
    driver: "Amit Kumar",
    vehicle: "BR-01-AB-1234",
    location: "Patna Central",
    status: "Available",
  },
  {
    id: "AMB-02",
    driver: "Rahul Singh",
    vehicle: "BR-01-CD-5678",
    location: "Sasaram",
    status: "Busy",
  },
  {
    id: "AMB-03",
    driver: "Vikash Kumar",
    vehicle: "BR-02-EF-9012",
    location: "Rohtas",
    status: "Available",
  },
  {
    id: "AMB-04",
    driver: "Arjun Verma",
    vehicle: "BR-03-GH-3456",
    location: "Patna",
    status: "Maintenance",
  },
];

const AmbulanceContext = createContext<
  AmbulanceContextType | undefined
>(undefined);

export function AmbulanceProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [ambulances, setAmbulances] = useState<Ambulance[]>(() => {
    const savedAmbulances = localStorage.getItem(
      "aegisai_ambulances"
    );

    if (savedAmbulances) {
      return JSON.parse(savedAmbulances);
    }

    return initialAmbulances;
  });

  useEffect(() => {
    localStorage.setItem(
      "aegisai_ambulances",
      JSON.stringify(ambulances)
    );
  }, [ambulances]);

  const updateAmbulance = (
    updatedAmbulance: Ambulance
  ) => {
    setAmbulances((previousAmbulances) =>
      previousAmbulances.map((ambulance) =>
        ambulance.id === updatedAmbulance.id
          ? updatedAmbulance
          : ambulance
      )
    );
  };

  return (
    <AmbulanceContext.Provider
      value={{
        ambulances,
        updateAmbulance,
      }}
    >
      {children}
    </AmbulanceContext.Provider>
  );
}

export function useAmbulances() {
  const context = useContext(AmbulanceContext);

  if (!context) {
    throw new Error(
      "useAmbulances must be used inside AmbulanceProvider"
    );
  }

  return context;
}