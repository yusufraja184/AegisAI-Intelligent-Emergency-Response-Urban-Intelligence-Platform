import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import App from "./App.tsx";
import { EmergencyProvider } from "./context/EmergencyContext";
import { HospitalProvider } from "./context/HospitalContext";
import { AmbulanceProvider } from "./context/AmbulanceContext";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <EmergencyProvider>
      <HospitalProvider>
        <AmbulanceProvider>
          <App />
        </AmbulanceProvider>
      </HospitalProvider>
    </EmergencyProvider>
  </StrictMode>
);