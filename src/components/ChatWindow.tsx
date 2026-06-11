import { Send } from "lucide-react";
interface Props {
  selectedUser: any;
}

const ChatWindow = ({ selectedUser }: Props) => {
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
            {selectedUser.firstName + " " + selectedUser.lastName}
          </h2>
          {selectedUser.onlineStatus === "online" ? (
            <p className="text-green-500 text-sm">Online</p>
          ) : (
            <p className="text-green-500 text-sm">Offline</p>
          )}
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        <div className="flex">
          <div className="bg-slate-100 p-3 rounded-2xl">Hello 👋</div>
        </div>

        <div className="flex justify-end">
          <div className="bg-indigo-600 text-white p-3 rounded-2xl">
            Hi there!
          </div>
        </div>
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
