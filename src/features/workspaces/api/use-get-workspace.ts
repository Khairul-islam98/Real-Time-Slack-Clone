import { useQuery } from "convex/react";

import { api } from "../../../../convex/_generated/api";
import { Id } from "../../../../convex/_generated/dataModel";

interface UseGetWorkspaceProps {
  id: Id<"workspaces">;
}
export const useGetWorkspace = ({ id }: UseGetWorkspaceProps) => {
  const data = useQuery(api.workspaces.getById, { id });
  console.log(data);
  const isLoading = data === undefined;

  return { data, isLoading };
};
