import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import type { ReactNode } from "react";

export interface Hospital {
  id: string;
  name: string;
  location: string;
  totalBeds: number;
  availableBeds: number;
  emergencyBeds: number;
  status: "Available" | "Full" | "Emergency Only";
}

interface HospitalContextType {
  hospitals: Hospital[];
  updateHospital: (hospital: Hospital) => void;
  admitPatient: (hospitalId: string) => void;
  dischargePatient: (hospitalId: string) => void;
}

const HospitalContext = createContext<
  HospitalContextType | undefined
>(undefined);

const initialHospitals: Hospital[] = [
  {
    id: "HOS-01",
    name: "AIIMS Hospital",
    location: "Patna",
    totalBeds: 100,
    availableBeds: 45,
    emergencyBeds: 15,
    status: "Available",
  },
  {
    id: "HOS-02",
    name: "City Care Hospital",
    location: "Patna",
    totalBeds: 80,
    availableBeds: 32,
    emergencyBeds: 10,
    status: "Available",
  },
  {
    id: "HOS-03",
    name: "MedLife Hospital",
    location: "Patna",
    totalBeds: 60,
    availableBeds: 8,
    emergencyBeds: 5,
    status: "Available",
  },
  {
    id: "HOS-04",
    name: "Apollo Hospital",
    location: "Patna",
    totalBeds: 120,
    availableBeds: 0,
    emergencyBeds: 0,
    status: "Full",
  },
];

export function HospitalProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [hospitals, setHospitals] = useState<Hospital[]>(() => {
    const savedHospitals = localStorage.getItem("aegisai_hospitals");

    if (savedHospitals) {
      return JSON.parse(savedHospitals);
    }

    return initialHospitals;
  });

  // Save hospitals to localStorage whenever hospitals change
  useEffect(() => {
    localStorage.setItem(
      "aegisai_hospitals",
      JSON.stringify(hospitals)
    );
  }, [hospitals]);

  // Update complete hospital
  const updateHospital = (updatedHospital: Hospital) => {
    setHospitals((previousHospitals) =>
      previousHospitals.map((hospital) =>
        hospital.id === updatedHospital.id
          ? updatedHospital
          : hospital
      )
    );
  };

  // Admit one patient to a hospital
  const admitPatient = (hospitalId: string) => {
    setHospitals((previousHospitals) =>
      previousHospitals.map((hospital) => {
        if (hospital.id !== hospitalId) {
          return hospital;
        }

        // Don't reduce beds if hospital is already full
        if (hospital.availableBeds <= 0) {
          return {
            ...hospital,
            availableBeds: 0,
            status: "Full",
          };
        }

        const newAvailableBeds = hospital.availableBeds - 1;

        return {
          ...hospital,
          availableBeds: newAvailableBeds,
          status:
            newAvailableBeds === 0
              ? "Full"
              : hospital.status,
        };
      })
    );
  };

  const dischargePatient = (hospitalId: string) => {
  setHospitals((previousHospitals) =>
    previousHospitals.map((hospital) => {
      if (hospital.id !== hospitalId) {
        return hospital;
      }

      const newAvailableBeds = Math.min(
        hospital.availableBeds + 1,
        hospital.totalBeds
      );

      return {
        ...hospital,
        availableBeds: newAvailableBeds,
        status: "Available",
      };
    })
  );
};

  return (
  <HospitalContext.Provider
    value={{
      hospitals,
      updateHospital,
      admitPatient,
      dischargePatient,
    }}
  >
      {children}
    </HospitalContext.Provider>
  );
}

export function useHospitals() {
  const context = useContext(HospitalContext);

  if (!context) {
    throw new Error(
      "useHospitals must be used inside HospitalProvider"
    );
  }

  return context;
}