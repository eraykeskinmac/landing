import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Icons } from "@/components/icons";
import MobileNav from "./mobile-navbar";
import { defaultNavConfig } from "@/config/navbar.config";
import { cn } from "@/lib/utils";
import { HoverBorderGradient } from "../ui/gradient-button";

export const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  return (
    <div className="flex relative justify-between max-w-7xl mx-auto py-4 items-center lg:px-0 px-6">
      <a href="/">
        <Icons.Logo />
      </a>
      <Links />
      <div className="flex justify-center items-center gap-x-4">
        <HoverBorderGradient
          onClick={() => {
            document.getElementById("waitlist-form")?.focus();
          }}
        >
          Join waitlist
        </HoverBorderGradient>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="lg:hidden block"
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
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </motion.svg>
          )}
        </motion.div>
      </div>
      <AnimatePresence>{showNavbar && <MobileNav />}</AnimatePresence>
    </div>
  );
};

const Links = () => {
  const pathName = window.location.pathname;

  return (
    <div className="lg:flex hidden text-sm gap-x-5 justify-center items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      {defaultNavConfig.map((item) => {
        return (
          <a
            href={item.href}
            key={item.href}
            className={cn(
              "hover:text-primary duration-75 transition-colors",
              pathName !== item.href && "text-muted-foreground"
            )}
            aria-disabled={item.disable}
          >
            {item.title}
          </a>
        );
      })}
    </div>
  );
};
