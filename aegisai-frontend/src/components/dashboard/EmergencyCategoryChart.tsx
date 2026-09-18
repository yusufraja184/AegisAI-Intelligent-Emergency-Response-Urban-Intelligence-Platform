import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

import { useEmergencies } from "../../context/EmergencyContext";

const COLORS = [
  "#ef4444",
  "#3b82f6",
  "#f59e0b",
  "#10b981",
  "#8b5cf6",
  "#ec4899",
];

export default function EmergencyCategoryChart() {
  const { emergencies } = useEmergencies();

  const categoryCounts = emergencies.reduce(
    (acc: Record<string, number>, emergency) => {
      const type = emergency.type;

      acc[type] = (acc[type] || 0) + 1;

      return acc;
    },
    {}
  );

  const data = Object.entries(categoryCounts).map(
    ([name, value]) => ({
      name,
      value,
    })
  );

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 h-96">
      <h2 className="text-xl font-semibold mb-4">
        Emergency Categories
      </h2>

      {data.length === 0 ? (
        <div className="flex items-center justify-center h-72 text-slate-500">
          No emergency data available.
        </div>
      ) : (
        <ResponsiveContainer width="100%" height="85%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              outerRadius={110}
              label
            >
              {data.map((_, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>

            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}