import { createLazyFileRoute } from '@tanstack/react-router'
import Hero from "@/components/hero";
import FeaturesSection from "@/components/features";
import Brand from "@/components/brand";

export const Route = createLazyFileRoute('/')({
  component: App
})

function App() {
  return (
    <div className="flex flex-col justify-center items-center w-full lg:px-0 px-2">
      <div className="w-full bg-[var(--bg-hero)] mb-12 lg:mb-[30vh]">
        <Hero />
      </div>
      <FeaturesSection />
      <div className='px-1 lg:px-0 w-full my-16 md:my-24 lg:my-32'>
        <Brand />
      </div>
    </div>
  );
}