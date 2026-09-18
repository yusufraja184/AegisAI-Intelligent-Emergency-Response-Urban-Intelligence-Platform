import { useAmbulances } from "../context/AmbulanceContext";

export default function Ambulances() {
  const { ambulances, updateAmbulance } = useAmbulances();

  const availableCount = ambulances.filter(
    (ambulance) => ambulance.status === "Available"
  ).length;

  const busyCount = ambulances.filter(
    (ambulance) => ambulance.status === "Busy"
  ).length;

  const maintenanceCount = ambulances.filter(
    (ambulance) => ambulance.status === "Maintenance"
  ).length;

  const getStatusClass = (
    status: "Available" | "Busy" | "Maintenance"
  ) => {
    switch (status) {
      case "Available":
        return "bg-green-100 text-green-700";

      case "Busy":
        return "bg-red-100 text-red-700";

      case "Maintenance":
        return "bg-yellow-100 text-yellow-700";

      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const updateStatus = (
    id: string,
    status: "Available" | "Busy" | "Maintenance"
  ) => {
    const ambulance = ambulances.find(
      (item) => item.id === id
    );

    if (!ambulance) return;

    updateAmbulance({
      ...ambulance,
      status,
    });
  };

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-4xl font-bold text-slate-800">
            Ambulance Management
          </h1>

          <p className="text-slate-500 mt-2">
            Monitor and manage emergency ambulances.
          </p>
        </div>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h3 className="text-gray-500">
            Available Ambulances
          </h3>

          <p className="text-4xl font-bold text-green-600 mt-2">
            {availableCount}
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6">
          <h3 className="text-gray-500">
            Busy Ambulances
          </h3>

          <p className="text-4xl font-bold text-red-600 mt-2">
            {busyCount}
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6">
          <h3 className="text-gray-500">
            Maintenance
          </h3>

          <p className="text-4xl font-bold text-yellow-600 mt-2">
            {maintenanceCount}
          </p>
        </div>
      </div>

      {/* Ambulance Table */}
      <div className="bg-white rounded-2xl shadow-md overflow-hidden">
        <div className="p-6">
          <h2 className="text-xl font-semibold">
            Ambulance Fleet
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-100">
              <tr>
                <th className="text-left p-4">
                  Ambulance ID
                </th>

                <th className="text-left p-4">
                  Driver
                </th>

                <th className="text-left p-4">
                  Vehicle
                </th>

                <th className="text-left p-4">
                  Location
                </th>

                <th className="text-left p-4">
                  Status
                </th>

                <th className="text-center p-4">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {ambulances.map((ambulance) => (
                <tr
                  key={ambulance.id}
                  className="border-b hover:bg-slate-50"
                >
                  <td className="p-4 font-medium">
                    {ambulance.id}
                  </td>

                  <td className="p-4">
                    {ambulance.driver}
                  </td>

                  <td className="p-4">
                    {ambulance.vehicle}
                  </td>

                  <td className="p-4">
                    {ambulance.location}
                  </td>

                  <td className="p-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm ${getStatusClass(
                        ambulance.status
                      )}`}
                    >
                      {ambulance.status}
                    </span>
                  </td>

                  <td className="p-4">
                    <div className="flex justify-center gap-2">
                      {ambulance.status === "Available" && (
                        <button
                          onClick={() =>
                            updateStatus(
                              ambulance.id,
                              "Busy"
                            )
                          }
                          className="px-3 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                        >
                          Assign
                        </button>
                      )}

                      {ambulance.status === "Busy" && (
                        <button
                          onClick={() =>
                            updateStatus(
                              ambulance.id,
                              "Available"
                            )
                          }
                          className="px-3 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                        >
                          Make Available
                        </button>
                      )}

                      {ambulance.status === "Maintenance" && (
                        <span className="text-sm text-gray-500">
                          Under Maintenance
                        </span>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}