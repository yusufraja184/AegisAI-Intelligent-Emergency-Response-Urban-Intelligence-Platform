import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

import { useEmergencies } from "../../context/EmergencyContext";

export default function EmergencyChart() {
  const { emergencies } = useEmergencies();

  const critical = emergencies.filter(
    (emergency) => emergency.severity === "Critical"
  ).length;

  const high = emergencies.filter(
    (emergency) => emergency.severity === "High"
  ).length;

  const medium = emergencies.filter(
    (emergency) => emergency.severity === "Medium"
  ).length;

  const data = [
    {
      severity: "Critical",
      emergencies: critical,
    },
    {
      severity: "High",
      emergencies: high,
    },
    {
      severity: "Medium",
      emergencies: medium,
    },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 mt-8">
      <h2 className="text-xl font-semibold mb-4">
        Emergency Severity Overview
      </h2>

      {emergencies.length === 0 ? (
        <div className="flex items-center justify-center h-80 text-slate-500">
          No emergency data available.
        </div>
      ) : (
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />

              <XAxis dataKey="severity" />

              <YAxis allowDecimals={false} />

              <Tooltip />

              <Line
                type="monotone"
                dataKey="emergencies"
                stroke="#2563EB"
                strokeWidth={3}
                dot={{ r: 5 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
}