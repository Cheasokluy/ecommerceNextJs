"use client";
import React from "react";
import Button from "@mui/material/Button";

interface PaginationControlsProps {
  page: number;
  totalPages: number;
}

export default function PaginationControls({ page, totalPages }: PaginationControlsProps) {
  return (
    <div style={{ display: "flex", justifyContent: "center", gap: 16, marginTop: 32 }}>
      <Button
        disabled={page <= 1}
        href={`?page=${page - 1}`}
        variant="outlined"
      >
        Previous
      </Button>
      <span style={{ alignSelf: "center" }}>Page {page} of {totalPages}</span>
      <Button
        disabled={page >= totalPages}
        href={`?page=${page + 1}`}
        variant="outlined"
      >
        Next
      </Button>
    </div>
  );
}
