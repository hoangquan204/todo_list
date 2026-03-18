import { useState } from "react";
import Header from "./components/Header";
import TaskForm from "./components/Tasks/TaskForm";
import TaskFilter from "./components/Tasks/TaskFilter";
import TaskCard from "./components/Tasks/TaskCard";
import TaskStats from "./components/Tasks/TaskStats";
import Footer from "./components/Footer";
import useTasks from "./hooks/useTasks";
import { TaskChart } from "./components/Tasks/TaskChart";


export default function App() {
  const { tasks, addTask, deleteTask, updateTask } = useTasks();

  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("ALL");

  const filtered = tasks.filter(t => {
    const matchText = t.text.toLowerCase().includes(search.toLowerCase());
    const matchStatus = filterStatus === "ALL" || t.status === filterStatus;
    return matchText && matchStatus;
  });

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow p-4 max-w-5xl mx-auto w-full">
        <TaskForm onAdd={addTask} />

        <TaskFilter
          search={search}
          setSearch={setSearch}
          filterStatus={filterStatus}
          setFilterStatus={setFilterStatus}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {filtered.map(task => (
            <TaskCard
              key={task.id}
              task={task}
              onDelete={deleteTask}
              onUpdate={updateTask}
            />
          ))}
        </div>

        <TaskStats tasks={tasks} />

        <TaskChart tasks={tasks} />
      </main>

      <Footer />
    </div>
  );
}
