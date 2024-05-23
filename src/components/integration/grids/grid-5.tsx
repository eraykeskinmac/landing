import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { AnimatedBeam } from "@/components/animated-beam";
import { cn } from "@/lib/utils";
import { GridInput } from "./grid-input";

export default function Grid5() {
  const [value, setValue] = useState("");
  const [animating, setAnimating] = useState(false);

  // refs
  const containerRef = useRef(null);
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const fromRef = useRef(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    !animating && animateBackground();
  };

  const animateBackground = () => {
    !animating && setAnimating(true);

    const timeoutId = setTimeout(() => {
      setAnimating(false);
      console.log("Task added: ", value);
    }, 5000);

    return () => clearTimeout(timeoutId);
  };

  return (
    <div
      ref={containerRef}
      className="w-full h-full flex flex-col justify-end gap-12"
    >
      <motion.div className="w-full h-full border rounded-2xl bg-secondary flex flex-col justify-between p-4 gap-5">
        <div className="space-y-3">
          <p>Updating task status</p>
          <div className="flex gap-2 text-xs flex-wrap">
            <p
              ref={ref1}
              className={cn(
                "py-1 px-2 bg-black/40 rounded-full cursor-pointer hover:bg-black/60 duration-150 transition-all ease-in-out z-20",
                animating && " shadow-lg shadow-indigo-500/20 delay-300"
              )}
              onClick={animateBackground}
            >
              Notify team members
            </p>
            <p
              ref={ref2}
              className={cn(
                "py-1 px-2 bg-black/40 rounded-full cursor-pointer hover:bg-black/60 duration-150 transition-all ease-in-out z-20",
                animating && " shadow-lg shadow-indigo-500/20 delay-300"
              )}
              onClick={animateBackground}
            >
              Add a note to this log
            </p>
            <p
              ref={ref3}
              className={cn(
                "py-1 px-2 bg-black/40 rounded-full cursor-pointer hover:bg-black/60 duration-150 transition-all ease-in-out z-20",
                animating && " shadow-lg shadow-indigo-500/20 delay-300"
              )}
              onClick={animateBackground}
            >
              Create a meeting
            </p>
          </div>
        </div>
        <GridInput
          placeholders={[
            "Give a task...",
            "Notify team members",
            "Add a note to this log",
            "Create a meeting",
          ]}
          onChange={(event) => {
            setValue(event.target.value);
          }}
          onSubmit={(e) => handleSubmit(e)}
          id="grid-form"
          ref={fromRef}
        />
      </motion.div>
      <div>
        <h1 className="mb-2 text-[#757EEE] font-medium">
          Intelligent Task Assistance
        </h1>
        <p className="text-lg md:text-xl font-semibold">
          Get smart suggestions for your workflow from
        </p>
        <p className="text-lg md:text-xl font-semibold">our action model.</p>
      </div>
      <AnimatedBeam
        containerRef={containerRef}
        toRef={ref1}
        fromRef={fromRef}
        curvature={0}
        startXOffset={17}
        startYOffset={17}
        endXOffset={20}
        endYOffset={30}
        reverse
        gradientStartColor="var(--indigo-500)"
        gradientStopColor="var(--indigo-800)"
        pathOpacity={animating ? 0.5 : 0}
        className={cn(
          "opacity-0 transition-all duration-500 ease-in-out",
          animating && "opacity-100"
        )}
      />
      <AnimatedBeam
        containerRef={containerRef}
        toRef={ref2}
        fromRef={fromRef}
        curvature={0}
        startXOffset={17}
        startYOffset={17}
        endXOffset={20}
        endYOffset={30}
        reverse
        gradientStartColor="var(--indigo-500)"
        gradientStopColor="var(--indigo-800)"
        pathOpacity={animating ? 0.5 : 0}
        className={cn(
          "opacity-0 transition-all duration-500 ease-in-out",
          animating && "opacity-100"
        )}
      />
      <AnimatedBeam
        containerRef={containerRef}
        toRef={ref3}
        fromRef={fromRef}
        curvature={0}
        endXOffset={20}
        startXOffset={17}
        startYOffset={17}
        endYOffset={30}
        reverse
        gradientStartColor="var(--indigo-500)"
        gradientStopColor="var(--indigo-800)"
        pathOpacity={animating ? 0.5 : 0}
        className={cn(
          "opacity-0 transition-all duration-500 ease-in-out",
          animating && "opacity-100"
        )}
      />
    </div>
  );
}
