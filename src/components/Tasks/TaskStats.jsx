import { Paper } from "@mui/material";

export default function TaskStats({ tasks }) {
  const total = tasks.length;
  const done = tasks.filter((t) => t.status === "Done").length;
  const overdue = tasks.filter(
    (t) => new Date(t.deadline) < new Date() && t.status !== "Done"
  ).length;

  return (
    <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
      
      {/* TOTAL */}
      <Paper className="p-4 rounded-2xl shadow-md hover:shadow-lg transition">
        <p className="text-gray-500 text-sm">Total Tasks</p>
        <p className="text-2xl font-bold text-gray-800">{total}</p>
      </Paper>

      {/* DONE */}
      <Paper className="p-4 rounded-2xl shadow-md hover:shadow-lg transition bg-green-50">
        <p className="text-gray-500 text-sm">Completed</p>
        <p className="text-2xl font-bold text-green-600">{done}</p>
      </Paper>

      {/* OVERDUE */}
      <Paper className="p-4 rounded-2xl shadow-md hover:shadow-lg transition bg-red-50">
        <p className="text-gray-500 text-sm">Overdue</p>
        <p className="text-2xl font-bold text-red-500">{overdue}</p>
      </Paper>

    </div>
  );
}