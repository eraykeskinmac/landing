import { motion, useInView } from "framer-motion";
import { useState, useEffect, useRef } from "react";

export default function Grid1() {
  return (
    <div className="border w-full rounded-2xl text-center bg-secondary/40 p-2 md:p-5 flex flex-col justify-between items-center">
      <div className="flex flex-col items-center">
        <motion.h1
          className="text-2xl lg:text-3xl font-bold"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          24/7 Workflow
        </motion.h1>
        <motion.p
          className="text-sm text-muted-foreground pt-3 max-w-[15rem] lg:max-w-lg pb-2"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          Boost productivity with our agents that work non-stop, available all
          day.
        </motion.p>
      </div>
      <div className="relative w-1/2 lg:w-full aspect-square bg-secondary/30 border rounded-xl p-3">
        <motion.div
          className="border w-full h-full rounded-full radial-gradient flex justify-center items-center"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        />
        <CountDown />
      </div>
    </div>
  );
}

const CountDown = () => {
  const ref = useRef(null);
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const isInView = useInView(ref);

  useEffect(() => {
    if (!isInView) return;
    const interval = setInterval(() => {
      if (count === 24 && count2 === 7) {
        clearInterval(interval);
      } else {
        setCount(count + 1);
        setCount2(count2 < 7 ? count2 + 1 : count2);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [count, count2, isInView]);

  return (
    <motion.h1
      ref={ref}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-2xl md:text-4xl lg:text-6xl primary-gradient cursor-default"
    >
      {count}/<motion.span>{count2}</motion.span>
    </motion.h1>
  );
};
