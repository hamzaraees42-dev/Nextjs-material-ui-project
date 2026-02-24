"use client";

import { Box, TextField, MenuItem, Button } from "@mui/material";

export default function StoresFilters() {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "1fr",
          sm: "2fr 1fr auto",
        },
        gap: 2,
        mb: 3,
      }}
    >
      {/* Search */}
      <TextField
        placeholder="Search by store name or location"
        size="small"
        fullWidth
      />

      {/* Status Filter */}
      <TextField
        select
        size="small"
        fullWidth
        defaultValue=""
        SelectProps={{
          displayEmpty: true,
        }}
      >
        <MenuItem value="" disabled>
          Filter by status
        </MenuItem>
        <MenuItem value="approved">Approved</MenuItem>
        <MenuItem value="pending">Pending</MenuItem>
        <MenuItem value="rejected">Rejected</MenuItem>
      </TextField>

      {/* Clear Filters */}
      <Button variant="outlined" color="primary" sx={{ whiteSpace: "nowrap" }}>
        Clear
      </Button>
    </Box>
  );
}
