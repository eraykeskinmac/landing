import Hero from "@/components/hero";
import FeaturesSection from "@/components/features";
import Brand from "@/components/brand";

function App() {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <div className="w-full bg-[var(--bg-hero)] mb-12 lg:mb-[20vh]">
        <Hero />
      </div>
      <FeaturesSection />
      <Brand />
    </div>
  );
}

export default App;
