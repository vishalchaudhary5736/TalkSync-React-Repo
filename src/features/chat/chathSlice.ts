import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { chatListResponse } from "../../types/types";


interface ChatState {
  chatList: chatListResponse | null;
  selectedChat: chatListResponse | null;
}

const initialState: ChatState = {
  chatList: null,
  selectedChat: null,
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
  setChatList: (state, action: PayloadAction<chatListResponse>) => {
      state.chatList = action.payload;
    },

    setSelectedChat: (state, action: PayloadAction<chatListResponse | null>) => {
      state.selectedChat = action.payload;
    },
  },
});


export const { setChatList, setSelectedChat } = chatSlice.actions;

export default chatSlice.reducer;
