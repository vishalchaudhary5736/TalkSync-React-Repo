import { Send } from "lucide-react";
import { useMessagesQuery } from "../features/chat/chatApi";
interface Props {
  selectedUser: any;
}
const ChatWindow = ({ selectedUser }: Props) => {
  const {
    data: messagesData,
    isLoading,
    error,
  } = useMessagesQuery(
    { roomId: selectedUser?._id, limit: 20, lastMessageId: "" },
    { skip: !selectedUser?._id },
  );
  console.log("Response=>", messagesData);

  if (!selectedUser) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-slate-700">
            Welcome to TalkSync
          </h2>

          <p className="text-slate-500 mt-2">
            Select a conversation to start chatting
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col">
      {/* Header */}
      <div className="h-20 border-b-2 border-gray-200 flex items-center px-6">
        <div>
          <h2 className="font-semibold text-lg">
            {selectedUser.participants[0]?.firstName +
              " " +
              selectedUser.participants[0]?.lastName}
          </h2>
          {selectedUser.participants[0]?.onlineStatus === "online" ? (
            <p className="text-green-500 text-sm">Online</p>
          ) : (
            <p className="text-green-500 text-sm">Offline</p>
          )}
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {isLoading && <p>Loading messages...</p>}
        {error && (
          <p className="text-red-500">
            {"status" in error ? JSON.stringify(error.data) : error.message}
          </p>
        )}

        {messagesData?.data?.map((message: any) => (
          <div
            key={message._id}
            className={`flex ${
              message.senderId === selectedUser.admin
                ? "justify-end"
                : "justify-start"
            }`}
          >
            <div
              className={`max-w-xs p-3 rounded-2xl ${
                message.senderId === selectedUser.admin
                  ? "bg-indigo-600 text-white"
                  : "bg-slate-100"
              }`}
            >
              {message.message}
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="p-4 border-b-2 border-gray-200">
        <div className="flex items-center gap-3">
          <input
            placeholder="Type a message..."
            className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-xl outline-none"
          />

          <button className="bg-indigo-600 text-white p-3 rounded-xl">
            <Send size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;
