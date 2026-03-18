import { Card, CardContent, Button, Select, MenuItem } from "@mui/material";

export default function TaskCard({ task, onDelete, onUpdate }) {
  return (
    <Card className="shadow-lg">
      <CardContent>
        <div className="flex justify-between">
          <div>
            <p className="font-semibold">{task.text}</p>
            <p className="text-sm">
              Deadline: {new Date(task.deadline).toLocaleString()}
            </p>
          </div>

          <div className="flex gap-2">
            <Select
              value={task.status}
              onChange={(e) =>
                onUpdate({ ...task, status: e.target.value })
              }
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