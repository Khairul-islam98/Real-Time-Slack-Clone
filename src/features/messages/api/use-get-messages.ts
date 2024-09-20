import { usePaginatedQuery } from "convex/react";
import { Id } from "../../../../convex/_generated/dataModel";
import { api } from "../../../../convex/_generated/api";

const BATCH_SIZE = 20;

interface UseGetmessagesProps {
  channelId?: Id<"channels">;
  conversationId?: Id<"conversations">;
  parentMessageId?: Id<"messages">;
}

export type GetmessagesReturnType =
  (typeof api.messages.get._returnType)["page"];
export const useGetmessages = ({
  channelId,
  conversationId,
  parentMessageId,
}: UseGetmessagesProps) => {
  const { results, status, loadMore } = usePaginatedQuery(
    api.messages.get,
    { channelId, conversationId, parentMessageId },
    { initialNumItems: BATCH_SIZE }
  );
  return {
    results,
    status,
    loadMore: () => loadMore(BATCH_SIZE),
  };
};
