import { Icons } from "@/components/icons";

export default function Grid3() {
  return (
    <div className="w-full h-full flex p-3 items-center rounded-[inherit] group/grid3">
      <div className="w-[40%]">
        <h1>Trigger Workflow</h1>
        <p className="text-[#757EEE] font-semibold text-xl group-hover/grid3:scale-105 group-hover/grid3:translate-x-1 duration-300 delay-75 transition-all ease-in-out">
          Workflows that run at a specific event
        </p>
      </div>
      <DashboardSidebar />
    </div>
  );
}

const DashboardSidebar = () => {
  return (
    <div className="relative w-[60%] bg-secondary rounded-[inherit] space-y-3 p-3 group-hover/grid3:bg-secondary/80 duration-300 delay-75 transition-all transform-gpu ease-in-out">
      <div className="bg-black/40 rounded-[inherit] p-2 md:p-3 text-muted-foreground text-sm group-hover/grid3:scale-105 group-hover/grid3:-translate-x-6 duration-300 delay-75 transition-all transform-gpu ease-in-out">
        <p>
          When I receive a new message in the Slack #issue channel, create a new
          ticket in my Jira general issue project.
        </p>
      </div>
      <div className="bg-black/40 rounded-[inherit] p-2 md:p-3 border border-transparent group-hover/grid3:border-[var(--theme-color)] group-hover/grid3:shadow-2xl duration-300 delay-75 transition-all transform-gpu ease-in-out">
        <div className="flex items-center gap-2">
          <Icons.Globe />
          <h1 className="text-sm">Create a ticket trigger workflow</h1>
        </div>
        <div className="space-y-3 mt-3">
          <div>
            <p className="text-sm text-muted-foreground">Condition</p>
            <p>When I get a message in #issue channel in slack</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Workflow</p>
            <p>
              Create a ticket in the Jira general issue project for the team.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
