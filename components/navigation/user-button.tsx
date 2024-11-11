"use client";

// import { signIn, signOut } from "@/server/auth";
import { Session } from "next-auth";
import { signIn, signOut } from "next-auth/react"; // Use client-side signOut
import { Button } from "../ui/button";
import { LogInIcon, LogOutIcon, LucideLogOut } from "lucide-react";

export const UserButton = ({ user }: Session) => {
  return (
    <div className="flex items-center gap-4">
      <h1>{user?.name}</h1>

      <Button onClick={() => signOut()}>
        <LogInIcon size={16} /> signOut
      </Button>
    </div>
  );
};
