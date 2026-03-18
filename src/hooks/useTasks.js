import useLocalStorage from "./useLocalStorage";

export default function useTasks() {
  const [tasks, setTasks] = useLocalStorage("tasks", []);

  const addTask = (task) => {
    setTasks(prev => [...prev, { ...task, id: Date.now() }]);
  };

  const deleteTask = (id) => {
    setTasks(prev => prev.filter(t => t.id !== id));
  };

  const updateTask = (updatedTask) => {
    setTasks(prev => prev.map(t => t.id === updatedTask.id ? updatedTask : t));
  };

  return { tasks, addTask, deleteTask, updateTask };
}