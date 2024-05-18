import { motion } from "framer-motion";
import { Icons } from "@/components/icons";
import { Separator } from "@/components/ui/separator";
import { defaultNavConfig } from "@/config/navbar.config";
import { cn } from "@/lib/utils";
import { Link } from "@tanstack/react-router";

const variants = {
  visible: { x: 0, transition: { stiffness: 200 } },
  hidden: { x: "-100%", transition: { stiffness: 200 } },
};

export default function MobileNav({ onClick }: { onClick: () => void }) {
  const pathName = window.location.pathname;

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={variants}
      className="absolute  px-5 z-50 flex justify-start items-start gap-y-5 flex-col h-screen rounded-r-xl py-5 left-0 top-5  max-w-[200px] w-full bg-background/60 backdrop-blur-md"
    >
      <Link to="/" onClick={onClick}>
        <Icons.Logo />
      </Link>
      <Separator className="bg-background/30 h-1" />
      <div className="flex bg-transparent gap-x-5 flex-col gap-y-4 justify-start items-start  ">
        {defaultNavConfig.map((item) => {
          return (
            <Link
              to={item.href}
              key={item.href}
              className={cn(
                "hover:text-primary duration-75 transition-colors",
                pathName !== item.href && "text-muted-foreground"
              )}
              aria-disabled={item.disable}
              onClick={onClick}
            >
              {item.title}
            </Link>
          );
        })}
      </div>
    </motion.div>
  );
}
