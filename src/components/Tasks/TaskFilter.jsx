import { TextField, Select, MenuItem, InputAdornment, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";

export default function TaskFilter({
  search,
  setSearch,
  filterStatus,
  setFilterStatus
}) {
  return (
    <Paper
      elevation={2}
      className="p-4 mt-4 rounded-2xl flex flex-col md:flex-row gap-4 items-center"
    >
      {/* SEARCH */}
      <TextField
        label="Search task..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        fullWidth
        size="small"
        className="bg-white rounded-lg"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon className="text-gray-400" />
            </InputAdornment>
          )
        }}
      />

      {/* FILTER */}
      <div className="flex items-center gap-2 min-w-[180px]">
        <FilterListIcon className="text-gray-500" />

        <Select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          size="small"
          fullWidth
          className="bg-white rounded-lg"
        >
          <MenuItem value="ALL">ALL</MenuItem>
          <MenuItem value="TODO">TODO</MenuItem>
          <MenuItem value="In Progress">In Progress</MenuItem>
          <MenuItem value="Done">Done</MenuItem>
        </Select>
      </div>
    </Paper>
  );
}