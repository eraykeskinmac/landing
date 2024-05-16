import { motion } from "framer-motion";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";

export default function Grid3() {
  return (
    <div className="border w-full rounded-2xl text-center bg-secondary/40 p-2 md:p-5 flex flex-col justify-center items-center gap-3">
      <motion.h1
        className="lg:text-xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        Easy integration
      </motion.h1>
      <motion.p
        className="text-sm text-muted-foreground"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Seamlessly integrate with your tools to automate like never before.
      </motion.p>
      <div className="relative w-full aspect-square bg-secondary/30 border p-3 md:p-6 rounded-full">
        <motion.div
          className="border w-full h-full rounded-full bg-secondary/40 flex justify-center items-center"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        />
        <motion.div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-2xl md:text-4xl lg:text-6xl primary-gradient cursor-default flex items-center">
          <Button size="icon" className="rounded-full">
            <Icons.Slack />
          </Button>
          <Button size="icon" className="rounded-full -translate-x-4">
            <Icons.Discord />
          </Button>
          <Button size="icon" className="rounded-full -translate-x-8">
            <Icons.Trello />
          </Button>
          <Button size="icon" className="rounded-full -translate-x-12">
            <Icons.Notion />
          </Button>
          <Button size="icon" className="rounded-full -translate-x-16">
            <Icons.Linear />
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
