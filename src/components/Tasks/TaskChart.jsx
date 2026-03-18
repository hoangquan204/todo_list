import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

export function TaskChart({ tasks }) {
  const data = [
    { name: "TODO", value: tasks.filter(t => t.status === "TODO").length },
    { name: "In Progress", value: tasks.filter(t => t.status === "In Progress").length },
    { name: "Done", value: tasks.filter(t => t.status === "Done").length },
  ];

  const COLORS = ["#94a3b8", "#facc15", "#4ade80"];

  return (
    <div className="mt-8 p-4 bg-white rounded-2xl shadow">
      <h2 className="text-lg font-semibold mb-4 text-center">Task Distribution</h2>
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            dataKey="value"
            label
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
