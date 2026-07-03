import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type {
  chatListData,
  chatListResponse,
  messageData,
} from "../../types/types";

interface ChatState {
  chatList: chatListResponse | null;
  selectedChat: chatListData | null;
  messages: Record<string, messageData[]>;
}

const initialState: ChatState = {
  chatList: null,
  selectedChat: null,
  messages: {},
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    setChatList: (
      state,
      action: PayloadAction<chatListResponse>
    ) => {
      state.chatList = action.payload;
    },

    setSelectedChat: (
      state,
      action: PayloadAction<chatListData | null>
    ) => {
      console.log('Setting selected chat:', action.payload);
      state.selectedChat = action.payload;
    },

    // Store all fetched messages for a room
    addMessages: (
      state,
      action: PayloadAction<{
        roomId: string;
        messages: messageData[];
      }>
    ) => {
      const { roomId, messages } = action.payload;

      state.messages[roomId] = messages;
    },

    // Add a single message to a room
    addMessage: (
      state,
      action: PayloadAction<{
        roomId: string;
        message: messageData;
      }>
    ) => {
      const { roomId, message } = action.payload;

      if (!state.messages[roomId]) {
        state.messages[roomId] = [];
      }

      state.messages[roomId].push(message);
    },

    // Optional: clear messages of a room
    clearRoomMessages: (
      state,
      action: PayloadAction<string>
    ) => {
      delete state.messages[action.payload];
    },
  },
});

export const {
  setChatList,
  setSelectedChat,
  addMessages,
  addMessage,
  clearRoomMessages,
} = chatSlice.actions;

export default chatSlice.reducer;