import { MessageSquare, Users, Settings, Bookmark } from "lucide-react";

const Sidebar = () => {
  return (
    <div className="w-64 min-h-screen border-r p-4 flex flex-col justify-between">
      <div>
        <h1 className="text-2xl font-bold mb-8">
          Chat<span className="text-indigo-600">ify</span>
        </h1>

        <button className="w-full bg-indigo-600 text-white py-3 rounded-xl">
          New Chat
        </button>

        <nav className="mt-6 space-y-2">
          <div className="flex items-center gap-3 p-3 rounded-xl bg-indigo-50">
            <MessageSquare size={18} />
            Chats
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl">
            <Users size={18} />
            Contacts
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl">
            <Bookmark size={18} />
            Saved
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl">
            <Settings size={18} />
            Settings
          </div>
        </nav>
      </div>
      <div className="pb-11">
        <h1>jjjjjjjjjjjjjjjjjjjjkdjf</h1>
      </div>
    </div>
  );
};

export default Sidebar;
