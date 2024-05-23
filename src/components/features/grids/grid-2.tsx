import { motion } from "framer-motion";

export default function Grid2() {
  return (
    <>
      <h1 className="text-xl lg:text-3xl font-bold max-w-lg group/grid2">
        We automate your tasks so that,
      </h1>
      <h1 className="text-xl lg:text-3xl font-bold max-w-lg">
        you can scale growth
      </h1>
      <p className="text-muted-foreground max-w-lg my-5 group-hover/grid2:-translate-y-1 group-hover/grid2:opacity-85 duration-300 delay-75 transition-all ease-in-out">
        Scale with ease as you focus on what matters most. Let our intelligent
        agents handle all the work for you.
      </p>
      <div
        id="graph"
        className="w-full h-full bg-secondary/30 border rounded-xl p-2 flex flex-col justify-between items-center backdrop-blur-xl group-hover/grid2:scale-[1.025] group-hover/grid2:-translate-y-1 duration-300 delay-75 transition-all ease-in-out"
      >
        <motion.svg
          viewBox="0 0 606 199"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <g id="graph">
            <motion.path
              id="Path 887"
              d="M1.1377 141.432L48.4117 106.576L66.385 117.648L133.686 66.8882L188.01 159.906L236.548 106.576L296.656 117.648L319.251 66.8882L355.156 61.0808L441.156 88.0841L510.69 1L604.69 24.3421"
              stroke="var(--theme-color)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              whileInView={{
                pathLength: 1,
                strokeLinecap: "round",
                strokeLinejoin: "round",
                transition: { duration: 2 },
              }}
            />
            <motion.path
              id="Path 888"
              d="M3.19727 185.976L52.0481 137.459L68.4475 170.496L133.466 133.679L190.078 198L238.618 163.29L298.729 170.496L321.325 137.459L357.231 133.679L452.625 170.496L537.3 84.8066L586.151 137.459"
              stroke="#4F4F4F"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="8 8"
              initial={{ pathLength: 0 }}
              whileInView={{
                pathLength: 1,
                strokeLinecap: "round",
                strokeLinejoin: "round",
                transition: { duration: 2 },
              }}
            />
          </g>
        </motion.svg>
        <div className="w-full flex justify-between items-center text-[9px] lg:text-xs p-2">
          <p>01:00PM</p>
          <p>02:00PM</p>
          <p>03:00PM</p>
          <p>04:00PM</p>
          <p>05:00PM</p>
        </div>
      </div>
    </>
  );
}
