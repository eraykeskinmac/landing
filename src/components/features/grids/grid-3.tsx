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
        viewport={{ once: true }}
      >
        Easy integration
      </motion.h1>
      <motion.p
        className="text-sm text-muted-foreground"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
      >
        Seamlessly integrate with your tools to automate like never before.
      </motion.p>
      <div className="relative w-2/3 md:w-full aspect-square bg-secondary/30 border p-3 md:p-6 rounded-full">
        <motion.div
          className="border w-full h-full rounded-full bg-secondary/40 flex justify-center items-center"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        />
        <motion.div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-2xl md:text-4xl lg:text-6xl primary-gradient cursor-default flex items-center">
          {Integrations.map((integration, i) => (
            <integration.Icon key={i} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}

const Integrations = [
  {
    name: "Slack",
    Icon: () => <Button size="icon" className="rounded-full"><Icons.Slack /></Button>,
  },
  {
    name: "Discord",
    Icon: () => <Button size="icon" className="rounded-full"><Icons.Discord /></Button>,
  },
  {
    name: "Trello",
    Icon: () => <Button size="icon" className="rounded-full"><Icons.Trello /></Button>,
  },
  {
    name: "Notion",
    Icon: () => <Button size="icon" className="rounded-full"><Icons.Notion /></Button>,
  },
  {
    name: "Linear",
    Icon: () => <Button size="icon" className="rounded-full"><Icons.Linear /></Button>,
  },
];