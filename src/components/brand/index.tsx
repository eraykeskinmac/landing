import { Button } from "@/components/ui/button";

export default function Brand() {
  return (
    <section className="w-full aspect-[1923/815] flex justify-center items-center my-8">
      <div className="relative w-full lg:w-[80%] mx-auto rounded-2xl border border-[#4048c04c] border-b-0 flex flex-col gap-5 pt-10 items-center pb-16 md:pb-24 lg:pb-36">
        <h1 className="text-center absolute w-full font-bold tracking-wider -bottom-1 lg:-bottom-4 text-5xl md:text-7xl lg:text-9xl uppercase text-muted-foreground overflow-hidden">
          LEAPFLOW
        </h1>
        <Gradient />
        <div className="flex justify-between gap-5 items-center tracking-wide text-sm text-muted-foreground">
          <p className="uppercase">Integration</p>
          <div className="w-2 h-2 bg-secondary rotate-45"></div>
          <p className="uppercase">Workflows</p>
          <div className="w-2 h-2 bg-secondary rotate-45"></div>
          <p className="uppercase">AI Automation</p>
        </div>
        <div className="text-lg md:text-3xl">
          <h1>From brainstorming to final designs,</h1>
          <h1>our focus is on creating experiences</h1>
        </div>
        <Button className="z-10">Join waitlist</Button>
      </div>
    </section>
  );
}

const Gradient = () => {
  return (
    <svg
      viewBox="0 0 1500 476"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full opacity-75 -z-10 rounded-2xl"
    >
      <g id="gradient">
        <g id="Ellipse 43" filter="url(#filter0_f_129_515)">
          <ellipse
            cx="749.927"
            cy="613.337"
            rx="574.927"
            ry="137.915"
            stroke="white"
            strokeWidth="120"
          />
        </g>
        <g id="Ellipse 42 (Stroke)" filter="url(#filter1_f_129_515)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M800.5 334.379C458.932 334.379 182.035 390.363 182.035 459.422C182.035 528.481 458.932 584.465 800.5 584.465C1142.07 584.465 1418.96 528.481 1418.96 459.422C1418.96 390.363 1142.07 334.379 800.5 334.379ZM-70 459.422C-70 362.22 319.736 283.422 800.5 283.422C1281.26 283.422 1671 362.22 1671 459.422C1671 556.624 1281.26 635.422 800.5 635.422C319.736 635.422 -70 556.624 -70 459.422Z"
            fill="#5661F6"
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
    </svg>
  );
};
