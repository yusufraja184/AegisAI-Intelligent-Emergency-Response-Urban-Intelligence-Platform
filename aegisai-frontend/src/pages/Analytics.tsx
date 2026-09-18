import { useEmergencies } from "../context/EmergencyContext";

export default function Analytics() {
  const { emergencies } = useEmergencies();

  // Total emergencies
  const totalEmergencies = emergencies.length;

  // Severity statistics
  const criticalCases = emergencies.filter(
    (emergency) => emergency.severity === "Critical"
  ).length;

  const highCases = emergencies.filter(
    (emergency) => emergency.severity === "High"
  ).length;

  const mediumCases = emergencies.filter(
    (emergency) => emergency.severity === "Medium"
  ).length;

  // Status statistics
  const dispatchedCases = emergencies.filter(
    (emergency) => emergency.status === "Dispatched"
  ).length;

  const enRouteCases = emergencies.filter(
    (emergency) => emergency.status === "En Route"
  ).length;

  const hospitalizedCases = emergencies.filter(
    (emergency) => emergency.status === "Hospitalized"
  ).length;

  const resolvedCases = emergencies.filter(
    (emergency) => emergency.status === "Resolved"
  ).length;

  // Emergency type statistics
  const cardiacCases = emergencies.filter(
    (emergency) =>
      emergency.type.toLowerCase().includes("cardiac")
  ).length;

  const accidentCases = emergencies.filter(
    (emergency) =>
      emergency.type.toLowerCase().includes("accident")
  ).length;

  const strokeCases = emergencies.filter(
    (emergency) =>
      emergency.type.toLowerCase().includes("stroke")
  ).length;

  const burnCases = emergencies.filter(
    (emergency) =>
      emergency.type.toLowerCase().includes("burn")
  ).length;

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-slate-800">
          Analytics
        </h1>

        <p className="text-slate-500 mt-2">
          Analyze emergency cases, severity levels and response status.
        </p>
      </div>

      {/* Main Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h3 className="text-slate-500">
            Total Emergencies
          </h3>

          <p className="text-4xl font-bold text-slate-800 mt-2">
            {totalEmergencies}
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6">
          <h3 className="text-slate-500">
            Critical Cases
          </h3>

          <p className="text-4xl font-bold text-red-600 mt-2">
            {criticalCases}
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6">
          <h3 className="text-slate-500">
            High Severity
          </h3>

          <p className="text-4xl font-bold text-orange-500 mt-2">
            {highCases}
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6">
          <h3 className="text-slate-500">
            Medium Severity
          </h3>

          <p className="text-4xl font-bold text-yellow-500 mt-2">
            {mediumCases}
          </p>
        </div>
      </div>

      {/* Severity Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-xl font-semibold text-slate-800 mb-6">
            Severity Analysis
          </h2>

          <div className="space-y-5">
            {/* Critical */}
            <div>
              <div className="flex justify-between mb-2">
                <span>Critical</span>
                <strong>{criticalCases}</strong>
              </div>

              <div className="w-full h-3 bg-slate-200 rounded-full">
                <div
                  className="h-3 bg-red-500 rounded-full"
                  style={{
                    width:
                      totalEmergencies > 0
                        ? `${(criticalCases / totalEmergencies) * 100}%`
                        : "0%",
                  }}
                />
              </div>
            </div>

            {/* High */}
            <div>
              <div className="flex justify-between mb-2">
                <span>High</span>
                <strong>{highCases}</strong>
              </div>

              <div className="w-full h-3 bg-slate-200 rounded-full">
                <div
                  className="h-3 bg-orange-500 rounded-full"
                  style={{
                    width:
                      totalEmergencies > 0
                        ? `${(highCases / totalEmergencies) * 100}%`
                        : "0%",
                  }}
                />
              </div>
            </div>

            {/* Medium */}
            <div>
              <div className="flex justify-between mb-2">
                <span>Medium</span>
                <strong>{mediumCases}</strong>
              </div>

              <div className="w-full h-3 bg-slate-200 rounded-full">
                <div
                  className="h-3 bg-yellow-500 rounded-full"
                  style={{
                    width:
                      totalEmergencies > 0
                        ? `${(mediumCases / totalEmergencies) * 100}%`
                        : "0%",
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Status Analysis */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-xl font-semibold text-slate-800 mb-6">
            Emergency Status
          </h2>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-red-50 rounded-xl p-4">
              <p className="text-slate-500">
                Dispatched
              </p>

              <p className="text-3xl font-bold text-red-600 mt-2">
                {dispatchedCases}
              </p>
            </div>

            <div className="bg-orange-50 rounded-xl p-4">
              <p className="text-slate-500">
                En Route
              </p>

              <p className="text-3xl font-bold text-orange-600 mt-2">
                {enRouteCases}
              </p>
            </div>

            <div className="bg-green-50 rounded-xl p-4">
              <p className="text-slate-500">
                Hospitalized
              </p>

              <p className="text-3xl font-bold text-green-600 mt-2">
                {hospitalizedCases}
              </p>
            </div>

            <div className="bg-blue-50 rounded-xl p-4">
              <p className="text-slate-500">
                Resolved
              </p>

              <p className="text-3xl font-bold text-blue-600 mt-2">
                {resolvedCases}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Emergency Type Analysis */}
      <div className="bg-white rounded-2xl shadow-md p-6">
        <h2 className="text-xl font-semibold text-slate-800 mb-6">
          Emergency Type Analysis
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
          <div className="border rounded-xl p-5">
            <h3 className="text-slate-500">
              Cardiac
            </h3>

            <p className="text-3xl font-bold text-red-600 mt-2">
              {cardiacCases}
            </p>

            <p className="text-sm text-slate-400 mt-1">
              Cardiac emergencies
            </p>
          </div>

          <div className="border rounded-xl p-5">
            <h3 className="text-slate-500">
              Accidents
            </h3>

            <p className="text-3xl font-bold text-orange-500 mt-2">
              {accidentCases}
            </p>

            <p className="text-sm text-slate-400 mt-1">
              Road accident cases
            </p>
          </div>

          <div className="border rounded-xl p-5">
            <h3 className="text-slate-500">
              Stroke
            </h3>

            <p className="text-3xl font-bold text-purple-600 mt-2">
              {strokeCases}
            </p>

            <p className="text-sm text-slate-400 mt-1">
              Stroke emergencies
            </p>
          </div>

          <div className="border rounded-xl p-5">
            <h3 className="text-slate-500">
              Burn Injuries
            </h3>

            <p className="text-3xl font-bold text-yellow-600 mt-2">
              {burnCases}
            </p>

            <p className="text-sm text-slate-400 mt-1">
              Burn injury cases
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}