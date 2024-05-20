"use client";

import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/animated-beam";
import React, { forwardRef, useRef } from "react";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className
      )}
    >
      {children}
    </div>
  );
});

export default function Grid5() {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);

  return (
    <>
      <h1 className="text-lg lg:text-2xl">
        Higher quality output and Consistency
      </h1>
      <p className="text-lg text-muted-foreground pt-2">
        Consistently deliver top-notch results with our reliable system,
        ensuring excellence in every task, just like having a dependable
        teammate by your side.
      </p>
      {/* <div>
        <Button className="rounded-full" size="lg">
          <Link to="/about">Explore more</Link>
        </Button>
      </div> */}
      <div
        className="relative flex w-full max-w-[400px] mx-auto items-center justify-center overflow-hidden rounded-lg pt-3"
        ref={containerRef}
      >
        <div className="flex h-full w-full flex-col items-stretch justify-between gap-10">
          <div className="flex flex-row items-center justify-between">
            <Circle ref={div1Ref}>
              <Icons.Discord className="h-6 w-6" />
            </Circle>
            <Circle ref={div5Ref}>
              <Icons.Trello className="h-6 w-6" />
            </Circle>
          </div>
          <div className="flex flex-row items-center justify-between">
            <Circle ref={div2Ref}>
              <Icons.notion className="h-6 w-6" />
            </Circle>
            <Circle ref={div4Ref} className="h-16 w-16">
              <Icons.openai className="h-6 w-6" />
            </Circle>
            <Circle ref={div6Ref}>
              <Icons.Linear className="h-6 w-6" />
            </Circle>
          </div>
          <div className="flex flex-row items-center justify-between">
            <Circle ref={div3Ref}>
              <Icons.Slack className="h-6 w-6" />
            </Circle>
            <Circle ref={div7Ref}>
              <Icons.LinkedIn className="h-6 w-6" />
            </Circle>
          </div>
        </div>

        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div1Ref}
          toRef={div4Ref}
          curvature={-75}
          endYOffset={-10}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div2Ref}
          toRef={div4Ref}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div3Ref}
          toRef={div4Ref}
          curvature={75}
          endYOffset={10}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div5Ref}
          toRef={div4Ref}
          curvature={-75}
          reverse
          endYOffset={-10}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div6Ref}
          toRef={div4Ref}
          reverse
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div7Ref}
          toRef={div4Ref}
          curvature={75}
          reverse
          endYOffset={10}
        />
      </div>
    </>
  );
}
