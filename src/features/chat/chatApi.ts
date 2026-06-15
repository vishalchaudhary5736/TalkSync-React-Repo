import { baseApi } from "../../services/baseApi";
import type {
  chatListRequest,
  chatListResponse,
  messagesRequest,
  messagesResponse,
} from "../../types/types";

export const chatApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    chatList: builder.mutation<chatListResponse, chatListRequest>({
      query: (body) => ({
        url: "/chat/chat-list",
        method: "POST",
        body,
      }),
    }),
    messages: builder.query<messagesResponse, messagesRequest>({
      query: ({ roomId, limit, lastMessageId }) => ({
        url: "/chat/message",
        method: "GET",
        params: {
          roomId,
          limit,
          lastMessageId,
        },
      }),
    }),
  }),
});

export const { useChatListMutation, useMessagesQuery } = chatApi;
