export default function TaskStats({ tasks }) {
  const total = tasks.length;
  const done = tasks.filter(t => t.status === "Done").length;
  const overdue = tasks.filter(t => new Date(t.deadline) < new Date() && t.status !== "Done").length;

  return (
    <div className="mt-6 p-4 border rounded">
      <p>Total: {total}</p>
      <p>Done: {done}</p>
      <p>Overdue: {overdue}</p>
    </div>
  );
}
