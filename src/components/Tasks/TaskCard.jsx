import {
  Card,
  CardContent,
  Button,
  Select,
  MenuItem,
  Chip
} from "@mui/material";
import { isNearDeadline, isOverdue } from "../utils/deadline";

export default function TaskCard({ task, onDelete, onUpdate }) {
  const getColor = () => {
    if (task.status === "Done") return "bg-green-50 border-green-300";
    if (task.status === "In Progress") return "bg-yellow-50 border-yellow-300";
    return "bg-gray-50 border-gray-300";
  };

  const getStatusColor = () => {
    if (task.status === "Done") return "success";
    if (task.status === "In Progress") return "warning";
    return "default";
  };

  const handleDelete = (taskId) => {
    if (window.confirm("Are you sure you want to delete this task?")) 
      onDelete(taskId);
  }

  return (
    <Card
      className={`
        ${getColor()}
        border
        rounded-2xl
        shadow-md
        hover:shadow-xl
        transition-all
        duration-300
      `}
    >
      <CardContent>
        <div className="flex justify-between items-start gap-4">
          
          {/* LEFT */}
          <div className="space-y-2">
            <p className="font-semibold text-lg text-gray-800">
              {task.text}
            </p>

            <p className="text-sm text-gray-500">
               {new Date(task.deadline).toLocaleString()}
            </p>

            {/* STATUS CHIP */}
            <Chip
              label={task.status}
              color={getStatusColor()}
              size="small"
              className="font-medium"
            />

            {/* DEADLINE WARNINGS */}
            {isOverdue(task.deadline) && (
              <p className="text-red-500 text-sm font-medium">
                ⚠ Quá hạn
              </p>
            )}

            {isNearDeadline(task.deadline) && !isOverdue(task.deadline) && (
              <p className="text-orange-500 text-sm font-medium">
                ⚠ Sắp hết hạn
              </p>
            )}
          </div>

          {/* RIGHT */}
          <div className="flex flex-col gap-2 min-w-[140px]">
            <Select
              size="small"
              value={task.status}
              onChange={(e) =>
                onUpdate({ ...task, status: e.target.value })
              }
              className="bg-white rounded-lg"
            >
              <MenuItem value="TODO">TODO</MenuItem>
              <MenuItem value="In Progress">In Progress</MenuItem>
              <MenuItem value="Done">Done</MenuItem>
            </Select>

            <Button
              variant="contained"
              color="error"
              size="small"
              onClick={() => handleDelete(task.id)}
              className="rounded-lg normal-case"
            >
              Delete
            </Button>
          </div>

        </div>
      </CardContent>
    </Card>
  );
}