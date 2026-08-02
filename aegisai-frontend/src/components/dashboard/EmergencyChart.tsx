import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { day: "Mon", emergencies: 22 },
  { day: "Tue", emergencies: 30 },
  { day: "Wed", emergencies: 18 },
  { day: "Thu", emergencies: 40 },
  { day: "Fri", emergencies: 35 },
  { day: "Sat", emergencies: 28 },
  { day: "Sun", emergencies: 25 },
];

export default function EmergencyChart() {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 mt-8">
      <h2 className="text-xl font-semibold mb-4">
        Weekly Emergency Trends
      </h2>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="emergencies"
              stroke="#2563EB"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}