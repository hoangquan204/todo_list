import { TextField, Select, MenuItem } from "@mui/material";

export default function TaskFilter({ search, setSearch, filterStatus, setFilterStatus }) {
  return (
    <div className="flex gap-2 mt-4">
      <TextField label="Search" value={search} onChange={e => setSearch(e.target.value)} fullWidth />

      <Select value={filterStatus} onChange={e => setFilterStatus(e.target.value)}>
        <MenuItem value="ALL">ALL</MenuItem>
        <MenuItem value="TODO">TODO</MenuItem>
        <MenuItem value="In Progress">In Progress</MenuItem>
        <MenuItem value="Done">Done</MenuItem>
      </Select>
    </div>
  );
}