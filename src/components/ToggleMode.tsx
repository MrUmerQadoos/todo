"use client";

import TodoForm from "@/components/TodoForm"; // Adjust the path if needed
import ToggleMode from "@/components/ToggleMode"; // Adjust the path if needed

const MainLayout: React.FC = () => {
  return (
    <div className="relative z-10 w-full max-w-3xl mx-auto mt-[70px] bg-gray-900 text-white p-4 flex flex-col items-center">
      {/* Header with Logo and Toggle Button */}
      <header className="flex items-center justify-between w-full mb-4">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          Todo
        </h1>
        <ToggleMode />
      </header>

      {/* Todo Form */}
      <div className="w-full">
        <TodoForm />
      </div>
    </div>
  );
};

export default MainLayout;
