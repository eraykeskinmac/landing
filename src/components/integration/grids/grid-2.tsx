import { Globe2 } from "lucide-react";

export default function Grid2() {
  return (
    <div className="w-full h-full flex flex-col rounded-[inherit] overflow-hidden">
      <div className="bg-background/80 text-center p-2 -z-10">
        <h1 className="primary-gradient text-sm">Work process</h1>
        <p>Your workflows</p>
      </div>
      <div className="w-full h-full flex flex-col justify-evenly items-center gap-3 p-3">
        <div className="w-full bg-background/40 rounded-lg p-3 flex flex-col justify-center">
          <div className="flex gap-2 items-center">
            <Globe2 size={35} className="bg-secondary p-2 rounded" />
            <h1>Standard Workflow</h1>
          </div>
          <p className="text-muted-foreground text-sm">Run once upon prompt</p>
        </div>
        <div className="w-full bg-background/40 rounded-lg p-3 flex flex-col justify-center">
          <div className="flex gap-2 items-center">
            <Globe2 size={35} className="bg-secondary p-2 rounded" />
            <h1>Scheduled Workflow</h1>
          </div>
          <p className="text-muted-foreground text-sm">Runs at a specific time</p>
        </div>
        <div className="w-full bg-background/40 rounded-lg p-3 flex flex-col justify-center">
          <div className="flex gap-2 items-center">
            <Globe2 size={35} className="bg-secondary p-2 rounded" />
            <h1>Trigger Workflow</h1>
          </div>
          <p className="text-muted-foreground text-sm">Run when a specific event occurs</p>
        </div>
      </div>
    </div>
  );
}
