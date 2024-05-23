import { createLazyFileRoute } from '@tanstack/react-router'
import Hero from "@/components/hero";
import FeaturesSection from "@/components/features";
import Brand from "@/components/brand";
import IntegrationSection from '@/components/integration/integration-section';
import IntegrationGrid from '@/components/integration/integration-grid';

export const Route = createLazyFileRoute('/')({
  component: App
})

function App() {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <div className="w-full bg-[var(--bg-hero)] mb-12 md:mb-24 lg:mb-[30vh]">
        <Hero />
      </div>
      <FeaturesSection />
      <IntegrationSection />
      <IntegrationGrid />
      <div className='px-2 w-full my-16 md:my-24 lg:my-32'>
        <Brand />
      </div>
    </div>
  );
}