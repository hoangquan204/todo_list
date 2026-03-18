import {
  TextField,
  Button,
  Select,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  InputAdornment,
  IconButton
} from "@mui/material";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import AssignmentIcon from "@mui/icons-material/Assignment";
import EventIcon from "@mui/icons-material/Event";

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
      {/* BUTTON */}
      <Button
        variant="contained"
        startIcon={<AddIcon />}
        onClick={() => setOpen(true)}
        className="rounded-xl shadow-md normal-case"
      >
        Add Task
      </Button>

      {/* MODAL */}
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        fullWidth
        maxWidth="sm"
        PaperProps={{
          className: "rounded-2xl p-2"
        }}
      >
        {/* TITLE */}
        <DialogTitle className="flex justify-between items-center font-semibold">
          Add New Task
          <IconButton onClick={() => setOpen(false)}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        {/* CONTENT */}
        <DialogContent className="flex flex-col gap-4 mt-2">
          {/* TASK NAME */}
          <TextField
            label="Task name"
            value={text}
            onChange={(e) => setText(e.target.value)}
            fullWidth
            size="small"
            className="bg-white rounded-lg"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AssignmentIcon className="text-gray-400" />
                </InputAdornment>
              )
            }}
          />

          {/* DEADLINE */}
          <TextField
            type="datetime-local"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
            size="small"
            className="bg-white rounded-lg"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EventIcon className="text-gray-400" />
                </InputAdornment>
              )
            }}
          />

          {/* STATUS */}
          <Select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            size="small"
            className="bg-white rounded-lg"
          >
            <MenuItem value="In Progress">In Progress</MenuItem>
            <MenuItem value="Done">Done</MenuItem>
          </Select>
        </DialogContent>

        {/* ACTIONS */}
        <DialogActions className="px-6 pb-4">
          <Button
            onClick={() => setOpen(false)}
            className="normal-case text-gray-600"
          >
            Cancel
          </Button>

          <Button
            variant="contained"
            onClick={handleSubmit}
            className="rounded-lg normal-case shadow-md"
          >
            Add Task
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}