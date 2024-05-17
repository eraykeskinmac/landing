import { motion } from "framer-motion";
import { EllipsisVertical } from "lucide-react";

export default function Grid4() {
  return (
    <div className="relative col-span-2 border w-full aspect-[3/1.8] rounded-2xl bg-secondary/40 flex flex-col p-2 lg:p-5 overflow-hidden">
      <h1 className="text-lg lg:text-2xl">
        Start a workflow and automate it for future use.
      </h1>
      <p className="text-lg text-muted-foreground pt-2">
        Initiate a workflow, let it do the task for you. Once done you can
        automate the workflow for future use where our system handle it
        automatically for for future repetitions.
      </p>
      <motion.div 
        className="absolute bottom-0 right-0 flex flex-col p-4 bg-secondary/30 rounded-tl-xl w-1/2 space-y-8"
        initial={{ x: "100%", opacity: 0 }}
        whileInView={{ x: 0, opacity: 1, transition: { type: "tween" }}}
        viewport={{ once: true }}
      >
        <h1 className="font-semibold text-xl">Your workflow</h1>
        <div className="w-full h-5 flex justify-between items-center">
          <div className="flex gap-2">
            <Icon fill="#FBADE0" />
            <div className="flex flex-col justify-between">
              <p>Jira ticket update</p>
              <motion.div className="w-full h-4 rounded-full bg-secondary animate-pulse"></motion.div>
            </div>
          </div>
          <EllipsisVertical size={14} />
        </div>
        <div className="w-full h-5 flex justify-between items-center">
          <div className="flex gap-2">
            <Icon fill="#6893FF"/>
            <div className="flex flex-col justify-between">
              <p>Schedule meetings</p>
              <div className="w-full h-4 rounded-full bg-secondary animate-pulse delay-75"></div>
            </div>
          </div>
          <EllipsisVertical size={14} />
        </div>
        <div className="w-full h-5 flex justify-between items-center">
          <div className="flex gap-2">
            <Icon fill="#DFFF9D" />
            <div className="flex flex-col justify-between">
              <p>Linear cycles</p>
              <div className="w-full h-4 rounded-full bg-secondary animate-pulse delay-150"></div>
            </div>
          </div>
          <EllipsisVertical size={14} />
        </div>
      </motion.div>
      <motion.div 
        className="absolute bottom-0 left-0 flex flex-col p-4 bg-secondary/30 rounded-tr-xl w-[45%] space-y-8"
        initial={{ x: "-100%", opacity: 0 }}
        whileInView={{ x: 0, opacity: 1, transition: { type: "tween" } }}
        viewport={{ once: true }}
      >
        <h1 className="text-lg lg:text-xl font-bold">Automated threads</h1>
        <div className="flex flex-col justify-center gap-2">
          <motion.div className="h-5 w-full bg-secondary rounded-lg animate-pulse" initial={{ width: "0%", opacity: 0 }} whileInView={{ width: "100%", opacity: 1}}></motion.div>
          <motion.div className="h-5 w-2/3 bg-secondary rounded-lg animate-pulse delay-75" initial={{ width: "0%", opacity: 0 }} whileInView={{ width: "75%", opacity: 1}}></motion.div>
          <motion.div className="h-5 w-1/2 bg-secondary rounded-lg animate-pulse delay-100" initial={{ width: "0%", opacity: 0 }} whileInView={{ width: "50%", opacity: 1}}></motion.div>
        </div>
      </motion.div>
    </div>
  );
}

const Icon = ({ fill }: { fill: string }) => {
  return (
    <svg
      width="44"
      height="44"
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="22" cy="22" r="22" fill={fill} />
      <path
        d="M19.3389 19.3135L23.532 19.3292M19.3152 25.6031L22.4601 25.6149M19.3271 22.4583L25.6167 22.4819"
        stroke="black"
        stroke-width="1.4"
        stroke-linecap="round"
      />
      <path
        d="M13.4178 19.2391C14.1117 16.3301 16.3935 14.0654 19.3076 13.3933C21.4121 12.908 23.6004 12.9162 25.7012 13.4174C28.6101 14.1112 30.8749 16.3931 31.5469 19.3072C32.0322 21.4117 32.024 23.6 31.5229 25.7008C30.829 28.6097 28.5471 30.8745 25.6331 31.5465C23.5286 32.0318 21.3403 32.0236 19.2395 31.5225C16.3306 30.8286 14.0658 28.5467 13.3938 25.6327C12.9084 23.5282 12.9167 21.3399 13.4178 19.2391Z"
        stroke="black"
        stroke-width="1.4"
      />
    </svg>
  );
};
