import { TextField, Button, Select, MenuItem } from "@mui/material";
import { useState } from "react";

export default function TaskForm({ onAdd }) {
  const [text, setText] = useState("");
  const [status, setStatus] = useState("TODO");

  const handleSubmit = () => {
    if (!text) return;

    onAdd({
      text,
      status,
      deadline: new Date().toISOString()
    });

    setText("");
  };

  return (
    <div className="flex gap-2">
      <TextField
        label="Task"
        value={text}
        onChange={(e) => setText(e.target.value)}
        fullWidth
      />

      <Select value={status} onChange={(e) => setStatus(e.target.value)}>
        <MenuItem value="TODO">TODO</MenuItem>
        <MenuItem value="In Progress">In Progress</MenuItem>
        <MenuItem value="Done">Done</MenuItem>
      </Select>

      <Button variant="contained" onClick={handleSubmit}>
        Add
      </Button>
    </div>
  );
}