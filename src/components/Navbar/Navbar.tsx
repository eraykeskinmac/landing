import { useState } from "react";
import { Button } from "../UI/moving-border";
import { AnimatePresence, motion } from "framer-motion";

const Navbar = () => {
  const variants = {
    visible: { x: 0, transition: { stiffness: 200 } },
    hidden: { x: "-100%", transition: { stiffness: 200 } }
  };
  const [showNavbar, setShowNavbar] = useState(false);
  return (
    <div className={`flex relative justify-between max-w-6xl mx-auto py-8 items-center flex-row lg:px-0 px-6  `}>
      <div>
        <p className="">
          <img src="/logo.svg" />
        </p>
      </div>

      <div className="lg:flex hidden gap-x-5 flex-row justify-center items-center ">
        <p className="font-Inter font-normal text-xl text-white">Home</p>
        <p className="font-Inter font-normal text-xl text-white">Integration</p>
        <p className="font-Inter font-normal text-xl text-white">Blog</p>
        <p className="font-Inter font-normal text-xl text-white">Changelog</p>
      </div>

      <div className="flex justify-center items-center gap-x-4">
        <Button
          borderRadius="2rem"
          className="bg-white hover:scale-105 transition-all duration-500 delay-150 ease-linear dark:bg-[#1F1F1F] text-black font-medium text-sm lg:text-lg dark:text-white border-neutral-200 dark:border-slate-800"
          // duration={0.99}
        >
          Join Waitlist
        </Button>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="lg:hidden block text-white"
          onClick={() => setShowNavbar(!showNavbar)}
        >
          {showNavbar ? (
            <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
              width="24"
              height="24"
              src="https://img.icons8.com/material-rounded/24/ffffff/multiply--v1.png"
              alt="multiply--v1"
            />
          ) : (
            <motion.svg
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </motion.svg>
          )}
        </motion.div>
      </div>
      <AnimatePresence>

           {showNavbar &&
       <motion.div
       initial="hidden"
            animate="visible"
            exit="hidden"
            variants={variants}
       className="absolute  px-5 z-50 flex justify-start items-start gap-y-5 flex-col top-5 h-screen rounded-r-xl py-5 left-0  max-w-[200px] w-full bg-[#242424]">
      <div className="bg-transparent">
        <img src="/logo.svg" className="bg-transparent" />
      </div>
      <hr className="border-[0.8px] border-[#464646] w-full" />
      <div className="flex bg-transparent  gap-x-5 flex-col gap-y-4 justify-start items-start  ">
        <p className="font-Inter bg-transparent font-normal text-lg text-white">Home</p>
        <p className="font-Inter bg-transparent font-normal text-lg text-white">Integration</p>
        <p className="font-Inter bg-transparent font-normal text-lg text-white">Blog</p>
        <p className="font-Inter bg-transparent font-normal text-lg text-white">Changelog</p>
      </div>
      </motion.div>
    }
     </AnimatePresence>

    </div>
  );
};

export default Navbar;
