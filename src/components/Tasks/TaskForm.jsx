import {
  TextField,
  Button,
  Select,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions
} from "@mui/material";
import { useState } from "react";

export default function TaskForm({ onAdd }) {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const [status, setStatus] = useState("TODO");
  const [deadline, setDeadline] = useState("");

  const handleSubmit = () => {
    if (!text || !deadline) return;

    onAdd({ text, status, deadline });
    setText("");
    setDeadline("");
    setOpen(false);
  };

  return (
    <>
      <Button variant="contained" onClick={() => setOpen(true)}>
        + Add Task
      </Button>

      <Dialog open={open} onClose={() => setOpen(false)} fullWidth maxWidth="sm">
        <DialogTitle>Add New Task</DialogTitle>

        <DialogContent className="flex flex-col gap-4 mt-2">
          <TextField
            label="Task"
            value={text}
            onChange={(e) => setText(e.target.value)}
            fullWidth
          />

          <TextField
            type="datetime-local"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
          />

          <Select value={status} onChange={(e) => setStatus(e.target.value)}>
            <MenuItem value="TODO">TODO</MenuItem>
            <MenuItem value="In Progress">In Progress</MenuItem>
            <MenuItem value="Done">Done</MenuItem>
          </Select>
        </DialogContent>

        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button variant="contained" onClick={handleSubmit}>
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}