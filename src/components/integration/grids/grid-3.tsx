export default function Grid3() {
  return (
    <div className="w-full h-full flex items-center rounded-[inherit]">
      <div className="w-[40%] p-3">
        <h1>Trigger Workflow</h1>
        <p className="text-[#757EEE] font-semibold text-xl">
          Workflows that run at a specific event
        </p>
      </div>
      <DashboardSidebar />
    </div>
  );
}

const DashboardSidebar = () => {
  return (
    <div className="relative w-[60%] h-full bg-secondary rounded-[inherit] translate-x-6 translate-y-6 z-20"> 
    </div>
  );
};
