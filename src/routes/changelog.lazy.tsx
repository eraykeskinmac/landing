import { createLazyFileRoute } from "@tanstack/react-router";
import Changelog from "../components/changelog/index";
import Brand from "@/components/brand";

export const Route = createLazyFileRoute("/changelog")({
  component: () => (
    <div className="bg-[var(--bg-hero)]">
      <div className="max-w-5xl w-full mx-auto min-h-[80vh]">
        <div className="flex py-10 flex-col justify-start items-start gap-y-3 lg:px-2 px-5">
          <p className="head-text mt-12 md:mt-16 lg:mt-5">Changelog</p>
          <p className="text-muted-foreground text-lg max-w-xl">
            New updates and improvements to Leapflow.
          </p>
        </div>
        <Changelog />
      </div>
      <div className="flex justify-center items-center bg-background py-10 mx-auto mt-20 z-40">
        <Brand />
      </div>
    </div>
  ),
});
