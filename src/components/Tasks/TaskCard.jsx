import { Card, CardContent, Button, Select, MenuItem } from "@mui/material";
import { isNearDeadline, isOverdue } from "../utils/deadline";

export default function TaskCard({ task, onDelete, onUpdate }) {
  const getColor = () => {
    if (task.status === "Done") return "bg-green-100";
    if (task.status === "In Progress") return "bg-yellow-100";
    return "bg-gray-100";
  };

  return (
    <Card className={`shadow-lg ${getColor()}`}>
      <CardContent>
        <div className="flex justify-between">
          <div>
            <p className="font-semibold">{task.text}</p>
            <p className="text-sm">
              Deadline: {new Date(task.deadline).toLocaleString()}
            </p>

            {isOverdue(task.deadline) && (
              <p className="text-red-600">⚠ Quá hạn</p>
            )}

            {isNearDeadline(task.deadline) && (
              <p className="text-orange-500">⚠ Sắp hết hạn</p>
            )}
          </div>

          <div className="flex gap-2">
            <Select
              value={task.status}
              onChange={e => onUpdate({ ...task, status: e.target.value })}
            >
              <MenuItem value="TODO">TODO</MenuItem>
              <MenuItem value="In Progress">In Progress</MenuItem>
              <MenuItem value="Done">Done</MenuItem>
            </Select>

            <Button color="error" onClick={() => onDelete(task.id)}>
              Delete
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}