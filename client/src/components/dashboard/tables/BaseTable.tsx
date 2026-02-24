"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

interface Column {
  label: string;
  align?: "left" | "right" | "center";
}

interface BaseTableProps {
  columns: Column[];
  children: React.ReactNode;
}

export default function BaseTable({ columns, children }: BaseTableProps) {
  return (
    <TableContainer component={Paper} elevation={0}>
      <Table>
        <TableHead>
          <TableRow
            sx={{
              backgroundColor: "#F9FAFB",
            }}
          >
            {columns.map((column) => (
              <TableCell
                key={column.label}
                align={column.align || "left"}
                sx={{
                  fontWeight: 700,
                  fontSize: "0.75rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  color: "text.secondary",
                  borderBottom: "1px solid #E5E7EB",
                  py: 2,
                }}
              >
                {column.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody>{children}</TableBody>
      </Table>
    </TableContainer>
  );
}
