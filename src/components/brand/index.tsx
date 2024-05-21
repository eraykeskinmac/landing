import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { HoverBorderGradient } from "@/components/ui/gradient-button";

export default function Brand() {
  const borderRadius = "1rem";
  return (
    <section className="w-full max-w-7xl mx-auto flex justify-center items-center lg:px-0 px-2">
      <HoverBorderGradient
        className="bg-background w-full h-full p-0"
        containerClassName="rounded-2xl lg:w-[80%] w-full bg-background dark:bg-transparent border-none p-0"
        backgroundClassname="bg-black inset-[1px]"
        as="div"
      >
        <div
          className="relative w-full mx-auto border border-[#4048c04c] border-b-0 flex flex-col gap-5 pt-10 items-center pb-16 md:pb-24 lg:pb-36 overflow-hidden"
          style={{
            borderRadius: borderRadius,
          }}
        >
          <motion.h1
            className="text-center absolute w-full font-bold tracking-wider -bottom-3 lg:-bottom-5 text-6xl md:text-7xl lg:text-9xl uppercase text-muted-foreground -z-10 opacity-70"
            initial={{ y: 50, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 0,
              transition: { duration: 0.5, type: "tween" },
            }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.5, type: "tween" },
            }}
          >
            LEAPFLOW
          </motion.h1>
          <Gradient />
          <div className="flex justify-between gap-5 items-center tracking-wide text-xs lg:text-sm text-muted-foreground">
            <motion.p
              className="uppercase text-xs md:text-base"
              initial={{ x: 25, opacity: 0 }}
              whileInView={{
                x: 0,
                opacity: 1,
                transition: { type: "tween", duration: 0.5 },
              }}
            >
              Integration
            </motion.p>
            <motion.div
              className="w-2 h-2 bg-[var(--theme-color)]"
              initial={{ rotate: 0 }}
              whileInView={{ rotate: 45 }}
            />
            <p className="uppercase text-xs md:text-base">Workflows</p>
            <motion.div
              className="w-2 h-2 bg-[var(--theme-color)]"
              initial={{ rotate: 0 }}
              whileInView={{ rotate: 45, transition: { duration: 1 } }}
            />
            <motion.p
              className="uppercase text-xs md:text-base"
              initial={{ x: -25, opacity: 0 }}
              whileInView={{
                x: 0,
                opacity: 1,
                transition: { type: "tween", duration: 0.5 },
              }}
            >
              AI Automation
            </motion.p>
          </div>
          <div className="text-lg md:text-3xl text-center">
            <h1>Increase your efficiency with ease,</h1>
            <h1>and transform your workflow.</h1>
          </div>
          <Button
            size="sm"
            onClick={() => {
              document.getElementById("waitlist-form")?.focus();
            }}
            className="shine shine-anim"
          >
            Join waitlist
          </Button>
        </div>
      </HoverBorderGradient>
    </section>
  );
}

const Gradient = () => {
  return (
    <>
      <motion.svg
        viewBox="0 0 1500 476"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute bottom-0 lg:bottom-0 left-1/2 -translate-x-1/2 w-full opacity-75 -z-10 rounded-2xl mix-blend-color-dodge"
      >
        <g id="gradient">
          <g id="Ellipse 43" filter="url(#filter0_f_129_515)">
            <motion.ellipse
              cx="749.927"
              cy="613.337"
              rx="574.927"
              ry="137.915"
              stroke="white"
              initial={{ opacity: 0, strokeWidth: 0 }}
              whileInView={{ opacity: 0.7, strokeWidth: 120 }}
            />
          </g>
          <g id="Ellipse 42 (Stroke)" filter="url(#filter1_f_129_515)">
            <motion.path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M800.5 334.379C458.932 334.379 182.035 390.363 182.035 459.422C182.035 528.481 458.932 584.465 800.5 584.465C1142.07 584.465 1418.96 528.481 1418.96 459.422C1418.96 390.363 1142.07 334.379 800.5 334.379ZM-70 459.422C-70 362.22 319.736 283.422 800.5 283.422C1281.26 283.422 1671 362.22 1671 459.422C1671 556.624 1281.26 635.422 800.5 635.422C319.736 635.422 -70 556.624 -70 459.422Z"
              fill="#5661F6"
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                scale: 1.3,
                transition: { delay: 0.2 },
              }}
            />
          </g>
        </g>
        <defs>
          <filter
            id="filter0_f_129_515"
            x="35"
            y="335.422"
            width="1429.85"
            height="555.831"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="40"
              result="effect1_foregroundBlur_129_515"
            />
          </filter>
          <filter
            id="filter1_f_129_515"
            x="-370"
            y="-16.5781"
            width="2341"
            height="952"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="150"
              result="effect1_foregroundBlur_129_515"
            />
          </filter>
        </defs>
      </motion.svg>

      <svg
        width="1430"
        height="556"
        className="absolute -bottom-[450px] "
        viewBox="0 0 1430 556"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_f_362_538)">
          <ellipse
            cx="714.927"
            cy="277.915"
            rx="574.927"
            ry="137.915"
            stroke="white"
            strokeWidth="120"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_362_538"
            x="0"
            y="0"
            width="1429.85"
            height="555.831"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="40"
              result="effect1_foregroundBlur_362_538"
            />
          </filter>
        </defs>
      </svg>
    </>
  );
};
