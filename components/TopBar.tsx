"use client";

import { Bell, Settings, Search } from "lucide-react";
import SearchCommand from "@/components/SearchCommand";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase/client";
import { useRouter } from "next/navigation";

export default function TopBar() {
  const router = useRouter();

  return (
    <header className="sticky top-0 z-40 border-b bg-background">
      <div className="flex h-16 items-center px-6 gap-6">
        <div className="flex-1" />

        <div className="flex w-full max-w-xl items-center gap-2 rounded-lg border bg-muted/50 px-4 py-2">
          <Search className="h-4 w-4 opacity-60" />
          <SearchCommand />
          <kbd className="hidden sm:block text-xs opacity-60">⌘K</kbd>
        </div>

        <div className="flex flex-1 justify-end items-center gap-4">
          <button className="rounded-full p-2 hover:bg-muted">
            <Bell className="h-5 w-5" />
          </button>

          <button
            onClick={() => router.push("/settings")}
            className="rounded-full p-2 hover:bg-muted"
          >
            <Settings className="h-5 w-5" />
          </button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="rounded-full focus:outline-none">
                <Avatar className="h-8 w-8">
                  <AvatarFallback>Y</AvatarFallback>
                </Avatar>
              </button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end">
              <DropdownMenuItem
                variant="destructive"
                onClick={() => signOut(auth)}
              >
                Log out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
