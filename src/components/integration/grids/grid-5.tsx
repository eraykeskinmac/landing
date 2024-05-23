import { useState } from "react";
import { motion } from "framer-motion";

export default function Grid5() {
  const [value, setValue] = useState("");
  const [animating, setAnimating] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    !animating && animateBackground();
  }
  
  const animateBackground = () => {
    setAnimating(true);
  }

  return (
    <div className="w-full h-full flex flex-col justify-end gap-12">
      <motion.div
        className="w-full h-full border rounded-2xl bg-[var(--bg-hero)] flex flex-col justify-between p-4 gap-5"
        // initial={{ backgroundColor: "#110D22"}}
        // animate={{ backgroundColor: ["#110D22", "var(--theme-color)"] }}
      >
        <div className="space-y-3">
          <p>Updating task status</p>
          <div className="flex gap-2 text-xs flex-wrap">
            <p className="py-1 px-2 bg-indigo-500 rounded-full cursor-pointer hover:bg-indigo-500/60 duration-150 transition-all ease-in-out">
              Notify team members
            </p>
            <p className="py-1 px-2 bg-indigo-500 rounded-full cursor-pointer hover:bg-indigo-500/60 duration-150 transition-all ease-in-out">
              Add a note to this log
            </p>
            <p className="py-1 px-2 bg-indigo-500 rounded-full cursor-pointer hover:bg-indigo-500/60 duration-150 transition-all ease-in-out">
              Create a meeting
            </p>
          </div>
        </div>
        <div className="w-full h-full max-h-12 bg-indigo-900/10 border border-indigo-900/50 rounded-full flex justify-between items-center text-muted-foreground">
          <div className="px-4 flex items-center gap-2">
            <span>🧠</span>
            <form onSubmit={handleSubmit}>
              <input
                className="border-none outline-none bg-transparent text-sm"
                placeholder="Give a task..."
                onChange={(e) => setValue(e.target.value)}
              />
            </form>
          </div>
          <button
            disabled={!value}
            type="submit"
            className="h-8 w-8 mr-1 rounded-full bg-[var(--theme-color)] transition duration-200 flex items-center justify-center"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.39969 6.32015L15.8897 3.49015C19.6997 2.22015 21.7697 4.30015 20.5097 8.11015L17.6797 16.6002C15.7797 22.3102 12.6597 22.3102 10.7597 16.6002L9.91969 14.0802L7.39969 13.2402C1.68969 11.3402 1.68969 8.23016 7.39969 6.32015Z"
                stroke="#c7c7c7"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.1094 13.6498L13.6894 10.0598"
                stroke="#c7c7c7"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </motion.div>
      <div>
        <h1 className="mb-2 text-[#757EEE]">Intelligent Task Assistance</h1>
        <p className="text-lg md:text-xl font-semibold">
          Get smart suggestions for your workflow from
        </p>
        <p className="text-lg md:text-xl font-semibold">our action model.</p>
      </div>
    </div>
  );
}
