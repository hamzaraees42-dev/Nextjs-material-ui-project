"use client";

import {
  Box,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import { useState } from "react";

import StatusChip from "../common/StatusChip";
import RowActionsMenu from "../common/RowActionsMenu";
import StoreDetailsDrawer from "../common/StoreDetailsDrawer";
import ConfirmActionDialog from "../common/ConfirmActionDialog";
import stores from "@/mock/stores";

export default function StoresTable() {
  const [selectedStore, setSelectedStore] = useState<any>(null);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [confirmType, setConfirmType] = useState<"approve" | "reject" | null>(
    null
  );

  return (
    <>
      <Box sx={{ overflowX: "auto" }}>
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
              <TableCell>Store Name</TableCell>
              <TableCell>Location</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Subscription</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {stores.map((store) => (
              <TableRow
                key={store.id}
                hover
                sx={{
                  "& td": { py: 2 },
                  "&:hover": { bgcolor: "#F9FAFB" },
                }}
              >
                <TableCell>{store.name}</TableCell>
                <TableCell>{store.location}</TableCell>
                <TableCell>
                  <StatusChip status={store.status} />
                </TableCell>
                <TableCell>{store.subscription}</TableCell>
                <TableCell align="right">
                  <RowActionsMenu
                    status={store.status}
                    onView={() => {
                      setSelectedStore(store);
                      setOpenDrawer(true);
                    }}
                    onApprove={() => {
                      setSelectedStore(store);
                      setOpenDrawer(true);
                    }}
                    onReject={() => {
                      setSelectedStore(store);
                      setOpenDrawer(true);
                    }}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>

      {/* Store Drawer */}
      <StoreDetailsDrawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        store={selectedStore}
      />

      {/* Confirmation Dialog */}
      <ConfirmActionDialog
        open={Boolean(confirmType)}
        title={confirmType === "approve" ? "Approve Store" : "Reject Store"}
        description={`Are you sure you want to ${
          confirmType === "approve" ? "approve" : "reject"
        } this store?`}
        confirmText={confirmType === "approve" ? "Approve" : "Reject"}
        confirmColor={confirmType === "approve" ? "success" : "error"}
        onConfirm={() => {
          console.log(confirmType, selectedStore);
        }}
        onClose={() => setConfirmType(null)}
      />
    </>
  );
}
