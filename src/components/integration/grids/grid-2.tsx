import { Icons } from "@/components/icons";

export default function Grid2() {
  return (
    <div className="w-full h-full flex flex-col rounded-[inherit] overflow-hidden group/grid2">
      <div className="bg-background/80 text-center p-2 -z-10">
        <h1 className="text-[#757EEE] text-sm">Work process</h1>
        <p>Your workflows</p>
      </div>
      <div className="w-full h-full flex flex-col justify-evenly items-center gap-3 p-3 font-manrope">
        <div className="w-full bg-background/40 rounded-lg p-3 flex flex-col justify-center cursor-pointer hover:scale-105 group-hover/grid2:shadow-lg group-hover/grid2:shadow-indigo-800/10 duration-200 transition-all transform-gpu ease-in-out">
          <div className="flex gap-2 items-center">
            <Icons.Globe />
            <h1>Standard Workflow</h1>
          </div>
          <p className="text-muted-foreground text-sm">Run once upon prompt</p>
        </div>
        <div className="w-full bg-background/40 rounded-lg p-3 flex flex-col justify-center cursor-pointer hover:scale-105 group-hover/grid2:shadow-lg group-hover/grid2:shadow-indigo-800/10 duration-200 transition-transform transform-gpu ease-in-out">
          <div className="flex gap-2 items-center">
            <Icons.Globe />
            <h1>Scheduled Workflow</h1>
          </div>
          <p className="text-muted-foreground text-sm">Runs at a specific time</p>
        </div>
        <div className="w-full bg-background/40 rounded-lg p-3 flex flex-col justify-center cursor-pointer hover:scale-105 group-hover/grid2:shadow-lg group-hover/grid2:shadow-indigo-800/10 duration-200 transition-transform transform-gpu ease-in-out">
          <div className="flex gap-2 items-center">
            <Icons.Globe />
            <h1>Trigger Workflow</h1>
          </div>
          <p className="text-muted-foreground text-sm">Run when a specific event occurs</p>
        </div>
      </div>
    </div>
  );
}
