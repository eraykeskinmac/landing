import { Grid1, Grid2, Grid3, Grid4, Grid5 } from "./grids";
import { MagicCard, MagicContainer } from "@/components/magic-card";

export default function FeaturesSection() {
  return (
    <MagicContainer className="min-h-screen w-full max-w-7xl mx-auto my-12 md:mt-24 lg:mt-28 grid grid-cols-1 md:grid-cols-4 gap-y-5 gap-x-0 md:gap-x-5 px-2">
      <MagicCard className="border w-full rounded-2xl text-center bg-secondary/40 p-2 md:p-5 flex flex-col justify-between items-center h-auto max-h-[27rem]">
        <Grid1 />
      </MagicCard>
      <MagicCard className="col-span-2 border w-full rounded-2xl text-center bg-secondary/40 p-2 md:p-5 flex flex-col justify-between items-center group/grid2 h-auto max-h-[27rem]">
        <Grid2 />
      </MagicCard>
      <MagicCard className="border w-full rounded-2xl text-center bg-secondary/40 p-2 md:p-5 flex flex-col justify-between items-center overflow-hidden min-h-[20rem] max-h-[27rem]">
        <Grid3 />
      </MagicCard>
      <MagicCard className="col-span-2 border w-full rounded-2xl bg-secondary/40 p-2 md:p-5 flex flex-col justify-between overflow-hidden min-h-[25rem] max-h-[27rem]">
        <Grid4 />
      </MagicCard>
      <MagicCard className="col-span-2 border w-full rounded-2xl bg-secondary/40 p-2 md:p-5 flex flex-col group/grid5 min-h-[25rem] max-h-[35rem]">
        <Grid5 />
      </MagicCard>
    </MagicContainer>
  );
}
