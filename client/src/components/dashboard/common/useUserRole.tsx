"use client";

export type UserRole = "admin" | "store";

export function useUserRole(): UserRole {
  if (typeof window === "undefined") {
    return "admin"; // safe fallback
  }

  const role = localStorage.getItem("userRole");

  if (role === "admin" || role === "store") {
    return role;
  }

  return "admin"; // default
}
