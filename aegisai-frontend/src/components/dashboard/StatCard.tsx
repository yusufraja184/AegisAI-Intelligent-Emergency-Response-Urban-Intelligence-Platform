interface StatCardProps {
  title: string;
  value: string;
  color: string;
}

export default function StatCard({
  title,
  value,
  color,
}: StatCardProps) {
  return (
    <div
      className="bg-white rounded-2xl shadow-md p-6 border-l-4 hover:shadow-lg transition"
      style={{ borderColor: color }}
    >
      <h3 className="text-gray-500 text-sm">{title}</h3>

      <p className="text-3xl font-bold mt-2">{value}</p>
    </div>
  );
}