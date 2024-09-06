"use client";

import { useGetWorkspaces } from "@/features/workspaces/api/use-get-workspaces";
import { UserButton } from "@/features/auth/components/user-button";
import { useEffect, useMemo } from "react";
import { useCreateWorkspaceModal } from "@/features/store/use-create-workspace-modal";

export default function Home() {
  const { data, isLoading } = useGetWorkspaces();
  const [open, setOpen] = useCreateWorkspaceModal()

  const workspacesId = useMemo(() => data?.[0]?._id, [data]);

  useEffect(() => {
    if (isLoading) return;
    if (workspacesId) {
      console.log("redirect to workspace");
    } else {
      console.log("open creation modal");
    }
  }, [workspacesId, isLoading]);

  return (
    <div>
      <UserButton />
    </div>
  );
}
