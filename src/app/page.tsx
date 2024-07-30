import Banner from "@/components/Banner";
import TodoForm from "@/components/TodoForm";
import ToggleMode from "@/components/ToggleMode";

// import MainLayout from "@/components/MainLayout";

const Page = () => {
  return (
    <div className="min-h-screen text-white flex flex-col items-center">
      <Banner />
      <div className="min-h-screen bg-transparent text-white p-4 flex flex-col items-center">
        <div className="flex items-center justify-between w-full max-w-3xl mb-4">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100"></h1>
          <ToggleMode />
        </div>
        <div className="w-full max-w-3xl">
          <TodoForm />
        </div>
      </div>
      {/* <MainLayout /> */}
      hello
    </div>
  );
};

export default Page;
