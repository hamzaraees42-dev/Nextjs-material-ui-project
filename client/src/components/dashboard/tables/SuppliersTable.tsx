"use client";

import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";

import suppliers from "@/mock/suppliers";
import StatusChip from "../common/StatusChip";

export default function SuppliersTable() {
  return (
    <Table>
      <TableHead>
        <TableRow
          sx={{
            bgcolor: "#F3F4F6",
            "& th": {
              fontWeight: 700,
              fontSize: "0.75rem",
              textTransform: "uppercase",
              letterSpacing: "0.06em",
              color: "text.secondary",
              borderBottom: "1px solid #E5E7EB",
              py: 2,
            },
          }}
        >
          <TableCell>Supplier Name</TableCell>
          <TableCell>Category</TableCell>
          <TableCell>Status</TableCell>
          <TableCell align="right">Actions</TableCell>
        </TableRow>
      </TableHead>

      <TableBody>
        {suppliers.map((supplier) => (
          <TableRow
            key={supplier.id}
            hover
            sx={{
              "& td": { py: 2 },
              "&:hover": { bgcolor: "#F9FAFB" },
            }}
          >
            <TableCell>{supplier.name}</TableCell>
            <TableCell>{supplier.category}</TableCell>
            <TableCell>
              <StatusChip
                status={supplier.status === "active" ? "approved" : "rejected"}
              />
            </TableCell>
            <TableCell align="right">
              <IconButton size="small">
                <VisibilityIcon />
              </IconButton>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
