import { useState } from "react";

export default function Settings() {
  const [notifications, setNotifications] = useState(true);
  const [autoDispatch, setAutoDispatch] = useState(true);
  const [soundAlerts, setSoundAlerts] = useState(true);

  const clearDemoData = () => {
    const confirmed = window.confirm(
      "Are you sure you want to clear all emergency, ambulance and hospital data?"
    );

    if (!confirmed) return;

    localStorage.removeItem("aegisai_emergencies");
    localStorage.removeItem("aegisai_ambulances");
    localStorage.removeItem("aegisai_hospitals");

    alert(
      "Demo data has been cleared. Please refresh the page."
    );
  };

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-slate-800">
          Settings
        </h1>

        <p className="text-slate-500 mt-2">
          Manage AegisAI emergency response system settings.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Emergency Settings */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-xl font-semibold text-slate-800">
            Emergency Settings
          </h2>

          <p className="text-slate-500 text-sm mt-1 mb-6">
            Configure emergency response behaviour.
          </p>

          {/* Auto Dispatch */}
          <div className="flex items-center justify-between py-4 border-b">
            <div>
              <h3 className="font-medium">
                Automatic Dispatch
              </h3>

              <p className="text-sm text-slate-500">
                Automatically recommend available ambulances.
              </p>
            </div>

            <button
              onClick={() =>
                setAutoDispatch(!autoDispatch)
              }
              className={`w-12 h-6 rounded-full ${
                autoDispatch
                  ? "bg-green-500"
                  : "bg-slate-300"
              }`}
            >
              <div
                className={`w-5 h-5 bg-white rounded-full shadow transform transition ${
                  autoDispatch
                    ? "translate-x-6"
                    : "translate-x-0"
                }`}
              />
            </button>
          </div>

          {/* Notifications */}
          <div className="flex items-center justify-between py-4 border-b">
            <div>
              <h3 className="font-medium">
                Notifications
              </h3>

              <p className="text-sm text-slate-500">
                Receive emergency system notifications.
              </p>
            </div>

            <button
              onClick={() =>
                setNotifications(!notifications)
              }
              className={`w-12 h-6 rounded-full ${
                notifications
                  ? "bg-green-500"
                  : "bg-slate-300"
              }`}
            >
              <div
                className={`w-5 h-5 bg-white rounded-full shadow transform transition ${
                  notifications
                    ? "translate-x-6"
                    : "translate-x-0"
                }`}
              />
            </button>
          </div>

          {/* Sound Alerts */}
          <div className="flex items-center justify-between py-4">
            <div>
              <h3 className="font-medium">
                Emergency Sound Alerts
              </h3>

              <p className="text-sm text-slate-500">
                Play sound for critical emergencies.
              </p>
            </div>

            <button
              onClick={() =>
                setSoundAlerts(!soundAlerts)
              }
              className={`w-12 h-6 rounded-full ${
                soundAlerts
                  ? "bg-green-500"
                  : "bg-slate-300"
              }`}
            >
              <div
                className={`w-5 h-5 bg-white rounded-full shadow transform transition ${
                  soundAlerts
                    ? "translate-x-6"
                    : "translate-x-0"
                }`}
              />
            </button>
          </div>
        </div>

        {/* System Information */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-xl font-semibold text-slate-800">
            System Information
          </h2>

          <p className="text-slate-500 text-sm mt-1 mb-6">
            Current AegisAI system status.
          </p>

          <div className="space-y-4">
            <div className="flex justify-between border-b pb-4">
              <span className="text-slate-500">
                System Status
              </span>

              <span className="text-green-600 font-semibold">
                ● Operational
              </span>
            </div>

            <div className="flex justify-between border-b pb-4">
              <span className="text-slate-500">
                Dispatch System
              </span>

              <span className="text-green-600 font-semibold">
                ● Online
              </span>
            </div>

            <div className="flex justify-between border-b pb-4">
              <span className="text-slate-500">
                Hospital Network
              </span>

              <span className="text-green-600 font-semibold">
                ● Connected
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-slate-500">
                Application Version
              </span>

              <span className="font-semibold">
                AegisAI v1.0
              </span>
            </div>
          </div>
        </div>

        {/* Dispatch Configuration */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-xl font-semibold text-slate-800">
            Dispatch Configuration
          </h2>

          <p className="text-slate-500 text-sm mt-1 mb-6">
            Current emergency dispatch parameters.
          </p>

          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-slate-500">
                Critical Priority
              </span>

              <span className="font-semibold text-red-600">
                Highest
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-slate-500">
                Ambulance Selection
              </span>

              <span className="font-semibold">
                Availability Based
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-slate-500">
                Hospital Selection
              </span>

              <span className="font-semibold">
                Bed Availability
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-slate-500">
                Data Storage
              </span>

              <span className="font-semibold">
                Local Storage
              </span>
            </div>
          </div>
        </div>

        {/* Data Management */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-xl font-semibold text-slate-800">
            Data Management
          </h2>

          <p className="text-slate-500 text-sm mt-1 mb-6">
            Manage locally stored demonstration data.
          </p>

          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mb-5">
            <p className="text-sm text-yellow-800">
              This prototype currently stores data in your
              browser's local storage. A production version
              would use a secure backend database.
            </p>
          </div>

          <button
            onClick={clearDemoData}
            className="px-5 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700"
          >
            Clear Demo Data
          </button>
        </div>
      </div>
    </div>
  );
}