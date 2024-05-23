import { MagicCard, MagicContainer } from "@/components/magic-card";
import { Grid1, Grid2, Grid3, Grid4, Grid5 } from "./grids";

export default function IntegrationGrid() {
  return (
    <MagicContainer className="min-h-screen w-full max-w-7xl mx-auto my-6 md:mt-24 lg:mt-28 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-y-5 gap-x-0 md:gap-x-5 px-1 md:px-0">
      <MagicCard className="col-span-2 md:col-span-1 lg:col-span-2 border w-full rounded-2xl bg-secondary/40 p-2 md:p-5 flex flex-col max-h-[27rem]">
        <Grid1 />
      </MagicCard>
      <MagicCard className="col-span-2 md:col-span-1 lg:col-span-2 border w-full rounded-2xl bg-secondary/40 p-px overflow-hidden max-h-[27rem]">
        <Grid2 />
      </MagicCard>
      <MagicCard className="col-span-2 lg:col-span-3 border w-full rounded-2xl bg-secondary/40 p-px overflow-hidden max-h-[27rem]">
        <Grid3 />
      </MagicCard>
      <MagicCard className="col-span-2 lg:col-span-4 border w-full rounded-2xl bg-secondary/40 p-2 md:p-5 flex flex-col justify-between overflow-hidden h-[27rem]">
        <Grid4 />
      </MagicCard>
      <MagicCard className="col-span-2 lg:col-span-3 border w-full rounded-2xl bg-secondary/40 p-2 md:p-5 flex flex-col h-[27rem]">
        <Grid5 />
      </MagicCard>
    </MagicContainer>
  );
}
