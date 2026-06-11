import { useState } from "react";
import ChatList from "../../../components/ChatList";
import ChatWindow from "../../../components/ChatWindow";

const ChatPage = () => {
  const [selectedUser, setSelectedUser] = useState<any>(null);
  return (
    <div className="h-full flex overflow-hidden">
      <ChatList selectedUser={selectedUser} setSelectedUser={setSelectedUser} />
      <ChatWindow selectedUser={selectedUser} />
    </div>
  );
};

export default ChatPage;
