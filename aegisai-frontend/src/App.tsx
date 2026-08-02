import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

import Dashboard from "./pages/Dashboard";
import Emergency from "./pages/Emergency";
import Patients from "./pages/Patients";
import Hospitals from "./pages/Hospitals";
import Ambulances from "./pages/Ambulances";
import Analytics from "./pages/Analytics";
import Settings from "./pages/Settings";

function App() {
  return (
    <BrowserRouter>
      <div className="flex">
        <Sidebar />

        <div className="flex-1 flex flex-col bg-slate-100 min-h-screen">
          <Navbar />

          <main className="p-8">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/emergency" element={<Emergency />} />
              <Route path="/patients" element={<Patients />} />
              <Route path="/hospitals" element={<Hospitals />} />
              <Route path="/ambulances" element={<Ambulances />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;