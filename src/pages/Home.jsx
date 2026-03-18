import TaskCard from "../components/Tasks/TaskCard";
import TaskForm from "../components/Tasks/TaskForm";
import useTasks from "../hooks/useTasks";


export default function Home() {
  const { tasks, addTask, deleteTask, updateTask } = useTasks();

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <TaskForm onAdd={addTask} />

      <div className="grid gap-4 mt-4">
        {tasks.map(task => (
          <TaskCard
            key={task.id}
            task={task}
            onDelete={deleteTask}
            onUpdate={updateTask}
          />
        ))}
      </div>
    </div>
  );
}