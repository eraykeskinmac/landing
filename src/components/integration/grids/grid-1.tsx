import { useState, useEffect } from "react";
import {
  useMotionTemplate,
  motion,
  easeIn,
  useMotionValue,
} from "framer-motion";
import { cn, generateRandomString } from "@/lib/utils";

export default function Grid1() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const [randomString, setRandomString] = useState("");

  useEffect(() => {
    const str = generateRandomString(1500);
    setRandomString(str);
  }, []);

  function onMouseMove({ currentTarget, clientX, clientY }: any) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);

    const str = generateRandomString(1500);
    setRandomString(str);
  }

  return (
    <div
      onMouseMove={onMouseMove}
      className="relative w-full p-2 md:p-5 h-full flex flex-col justify-end group/card"
    >
      <motion.svg
        width="100px"
        height="150px"
        viewBox="0 0 138 195"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mx-auto h-full z-20"
      >
        <motion.path
          initial={{ opacity: 1, y: -18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25, delay: 1.3, ease: easeIn }}
          d="M120.543 94.5252H102.543V56.5252C102.543 45.9644 94.1049 18.5 68 18.5C43.1195 18.5 36.0429 47 36.0429 56.5V77C36.0429 82.2 33.7096 83.8334 32.5429 84C30.1477 84 28.9551 84.0609 22.5429 84C16.1477 83.9392 17.0428 80.4392 17.0428 77C17.3762 64.3333 17.0429 56.5252 17.0429 56.5252C17.0429 39.5 22.9566 0 69 0C105 0 120.543 28.5 120.543 56.5252V94.5252Z"
          fill="url(#paint0_linear_519_597)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M69 194.5C107.108 194.5 138 163.608 138 125.5C138 87.3924 107.108 56.5 69 56.5C30.8923 56.5 0 87.3924 0 125.5C0 163.608 30.8923 194.5 69 194.5ZM84 116.5C84 121.407 81.6433 125.764 78 128.501V141.5C78 146.471 73.9706 150.5 69 150.5C64.0294 150.5 60 146.471 60 141.5V128.501C56.3567 125.764 54 121.407 54 116.5C54 108.216 60.7157 101.5 69 101.5C77.2843 101.5 84 108.216 84 116.5Z"
          fill="url(#paint1_linear_519_597)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_519_597"
            x1="68.7714"
            y1="0"
            x2="68.7714"
            y2="101.552"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#5661F6" />
            <stop offset="1" stopColor="#323990" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_519_597"
            x1="69"
            y1="56.5"
            x2="69"
            y2="194.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#5661F6" />
            <stop offset="1" stopColor="#323990" />
          </linearGradient>
        </defs>
      </motion.svg>

      <div className="z-50">
        <h1 className="text-muted-foreground mb-2">Security</h1>
        <p className="text-lg md:text-xl font-semibold">
          Secure integration between our
        </p>
        <p className="text-lg md:text-xl font-semibold">
          agents and your software.
        </p>
      </div>
      <div
        className={cn(
          "absolute top-0 left-0 p-0.5 bg-transparent aspect-square flex items-center justify-center w-full h-full"
        )}
      >
        <div className="rounded-[inherit] w-full relative overflow-hidden bg-transparent flex items-center justify-center h-full">
          <SecurityPattern
            mouseX={mouseX}
            mouseY={mouseY}
            randomString={randomString}
          />
        </div>
      </div>
    </div>
  );
}

export function SecurityPattern({ mouseX, mouseY, randomString }: any) {
  const maskImage = useMotionTemplate`radial-gradient(250px at ${mouseX}px ${mouseY}px, white, transparent)`;
  const style = { maskImage, WebkitMaskImage: maskImage };

  return (
    <div className="pointer-events-none">
      <div className="absolute inset-0 [mask-image:linear-gradient(white,transparent)] group-hover/card:opacity-50"></div>
      <motion.div
        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-600/60 to-indigo-700/50 opacity-0 group-hover/card:opacity-50 backdrop-blur-xl transition duration-500"
        style={style}
      />
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 mix-blend-overlay group-hover/card:opacity-100"
        style={style}
      >
        <p className="absolute inset-x-0 text-xs h-full break-words whitespace-pre-wrap text-[#888eed] font-mono font-bold transition duration-500">
          {randomString}
        </p>
      </motion.div>
    </div>
  );
}