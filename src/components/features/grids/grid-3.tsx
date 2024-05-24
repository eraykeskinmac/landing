import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
import useMediaQuery from "@/lib/hooks/useMediaQuery";

export default function Grid3() {
  const isMobile = useMediaQuery("(max-width: 770px)");

  return (
    <>
      <motion.h1
        className="text-2xl lg:text-3xl font-bold"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Easy integration
      </motion.h1>
      <motion.p
        className="text-muted-foreground pt-3 max-w-[15rem] lg:max-w-lg pb-2"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
      >
        Seamlessly integrate with your tools to automate like never before.
      </motion.p>
      <div className="relative w-2/3 md:w-full aspect-square bg-secondary/30 border p-12 rounded-full flex items-center justify-center">
        <motion.div
          className="border-2 w-full aspect-square rounded-full bg-secondary/40 flex justify-center items-center"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        />
        <OrbitingCircles
          className="h-[40px] w-[40px] border-none bg-transparent"
          duration={10}
          delay={10}
          radius={isMobile ? 60 : 80}
        >
          <Icons.Trello width={35} height={35} />
        </OrbitingCircles>
        <OrbitingCircles
          className="h-[40px] w-[40px] border-none bg-transparent"
          duration={10}
          delay={5}
          radius={isMobile ? 60 : 80}
        >
          <Icons.Linear width={35} height={35} />
        </OrbitingCircles>

        <OrbitingCircles
          className="border-none bg-transparent"
          reverse
          radius={isMobile ? 80 : 130}
          duration={20}
        >
          <Icons.Slack width={40} height={40} />
        </OrbitingCircles>
        <OrbitingCircles
          className="border-none bg-transparent"
          reverse
          radius={isMobile ? 80 : 130}
          duration={20}
          delay={20}
        >
          <Icons.LinkedIn width={40} height={40} />
        </OrbitingCircles>
      </div>
    </>
  );
}

export function OrbitingCircles({
  className,
  children,
  reverse,
  duration = 20,
  delay = 10,
  radius = 50,
  path = true,
}: {
  className?: string;
  children?: React.ReactNode;
  reverse?: boolean;
  duration?: number;
  delay?: number;
  radius?: number;
  path?: boolean;
}) {
  return (
    <>
      {path && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          className="pointer-events-none absolute inset-0 h-full w-full"
        >
          <circle
            className="stroke-white/10 stroke-1"
            cx="50%"
            cy="50%"
            r={radius}
            fill="none"
            strokeDasharray={"4 4"}
          />
        </svg>
      )}

      <div
        style={
          {
            "--duration": duration,
            "--radius": radius,
            "--delay": -delay,
          } as React.CSSProperties
        }
        className={cn(
          "absolute flex h-full w-full transform-gpu animate-orbit items-center justify-center rounded-full border bg-black/10 [animation-delay:calc(var(--delay)*1000ms)] dark:bg-white/10",
          { "[animation-direction:reverse]": reverse },
          className
        )}
      >
        {children}
      </div>
    </>
  );
}
