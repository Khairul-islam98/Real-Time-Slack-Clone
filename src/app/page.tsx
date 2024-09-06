"use client";

import { useGetWorkspaces } from "@/features/workspaces/api/use-get-workspaces";
import { UserButton } from "@/features/auth/components/user-button";
import { useEffect, useMemo } from "react";
import { useCreateWorkspaceModal } from "@/features/workspaces/store/use-create-workspace-modal";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const { data, isLoading } = useGetWorkspaces();
  const [open, setOpen] = useCreateWorkspaceModal()

  const workspacesId = useMemo(() => data?.[0]?._id, [data]);

  useEffect(() => {
    if (isLoading) return;
    if (workspacesId) {
      router.replace(`/workspace/${workspacesId}`)
    } else if(!open) {
      setOpen(true)
    }
  }, [workspacesId, isLoading, open, setOpen, router]);

  return (
    <div>
      <UserButton />
    </div>
  );
}
