import AnnouncementBar from "./announcement-bar";
import { motion } from 'framer-motion'
import { useRef, useState, useEffect } from "react";
import WaitlistForm from "@/components/waitlist-form";

export default function Hero() {
  const imageRef = useRef<HTMLImageElement>(null);
  const [imageHeight, setImageHeight] = useState(0);

  useEffect(() => {
    const currentImageRef = imageRef.current;

    const handleResize = () => {
      if (currentImageRef) {
        setImageHeight(currentImageRef.clientHeight);
      }
    };
    handleResize();

    window.addEventListener("resize", handleResize);
    currentImageRef?.addEventListener("load", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);

      if (currentImageRef) {
        currentImageRef.removeEventListener("load", handleResize);
      }
    };
  }, [imageRef]);

  return (
    <motion.div 
      className="relative flex flex-col items-center w-full max-w-7xl mx-auto"
      animate={{ marginBottom: imageHeight / 1.5 }}
    >
      <div className="py-8 flex flex-col justify-center items-center gap-y-2 lg:gap-y-8 z-30">
        <AnnouncementBar />
        <p className="font-bold text-4xl lg:text-6xl max-w-2xl w-full text-center">
          Your AI Agent to
          <br />
          <span className="primary-gradient">supercharge workflow</span>
        </p>
        <p className="text-sm lg:text-lg text-muted-foreground lg:px-0 px-6 lg:max-w-xl text-center w-full">
          Our agents integrate with your existing software, automating your
          workflows and repetitive tasks for you.
        </p>
      </div>
      <WaitlistForm />
      <div className="relative w-full h-12">
        <img
          ref={imageRef}
          src="/dashboard.png"
          className="z-20 py-2 md:py-10 w-full lg:px-0 px-5 absolute"
        />
        <img
          src="/radialElipse.svg"
          className="absolute z-10 bottom-1/2 translate-y-[65%] opacity-80"
        />
      </div>
    </motion.div>
  );
}