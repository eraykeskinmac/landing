"use client";


import { twMerge } from "tailwind-merge";
import { TracingBeam } from "../ui/tracing-beam";

export default function Changelog() {
  return (
    <TracingBeam className="px-6 z-10 bg-[#110D22]">
      <div className="max-w-7xl w-full mx-auto antialiased pt-4 relative lg:px-0 px-5">
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
              {item.badge}
            </h2>

            {/* <p className="text-xl mb-4">
              {item.title}
            </p> */}

            <div className="text-sm text-[#9B9CA1] font- prose prose-sm dark:prose-invert">
          
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
}

const dummyContent = [
  {
    // title: "Lorem Ipsum Dolor Sit Amet",
    description: (
      <>
        <p>
        Our waitlist is now open to early adopters and users! 
<br/> <br/>
Join our waitlist today to be among the first to explore new solutions that will simplify your work and tasks.
<br/> <br/>

We're excited to have you on board our waitlist!
        </p>
       
      </>
    ),
    badge: "May 18",
    // image:
    //   "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

];

