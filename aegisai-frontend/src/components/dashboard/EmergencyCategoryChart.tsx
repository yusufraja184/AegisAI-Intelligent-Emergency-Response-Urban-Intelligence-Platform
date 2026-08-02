import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  { name: "Cardiac", value: 35 },
  { name: "Accident", value: 28 },
  { name: "Fire", value: 18 },
  { name: "Stroke", value: 19 },
];

const COLORS = ["#ef4444", "#3b82f6", "#f59e0b", "#10b981"];

export default function EmergencyCategoryChart() {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 h-96">
      <h2 className="text-xl font-semibold mb-4">
        Emergency Categories
      </h2>

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
    </div>
  );
}