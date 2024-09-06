import { UserButton } from "@clerk/nextjs";

const DashboardPage = () => {  
  return (
    <div className="bg-red-500 flex-1 h-[calc(100%-80px)]">
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-3xl font-bold text-white">Dashboard</h1>
        <UserButton />
      </div>
    </div>
  );
};
export default DashboardPage;