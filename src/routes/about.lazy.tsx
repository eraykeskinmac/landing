import { createLazyFileRoute } from "@tanstack/react-router";
import PersonProfile from "@/components/person-profile";
import { team } from "@/constants/team";
import { advisors } from "@/constants/advisor";
import Brand from "@/components/brand";
import { BackgroundBeams } from "@/components/background-beams";

export const Route = createLazyFileRoute("/about")({
  component: AboutPage,
});

function AboutPage() {
  return (
    <main className="w-full min-h-screen bg-[var(--bg-hero)] px-1 lg:px-0">
      <div className="w-full max-w-7xl mx-auto">
        <BackgroundBeams className="translate-y-20" />
        <h1 className="head-text mt-12 md:mt-16 lg:mt-24">Our mission</h1>
        <div className="space-y-8 mt-5">
          <p className="text-muted-foreground text-lg max-w-xl">
            We see the inefficiencies in today's workflows – the manual tasks,
            the disjointed processes, the wasted time in repetitive tasks.
            That's why we've set out to transform the way you work.
          </p>
          <p className="text-muted-foreground text-lg max-w-lg">
            Our agents seamlessly integrate with your existing software,
            automating your workflows and repetitive tasks, so you can focus on
            what matters most.
          </p>
        </div>
        <h1 className="head-text mt-16">Team</h1>
        <p className="text-muted-foreground text-lg max-w-lg mt-5">
          We are a passionate team of developers & designers, working together to
          make tasks easier with smart automations.
        </p>
        <div id="team" className="w-auto max-w-4xl flex lg:justify-start justify-center flex-wrap my-12 gap-x-3 md:gap-x-5 lg:gap-x-10 gap-y-10">
          {team.map((profile, index) => (
            <PersonProfile key={index} {...profile} />
          ))}
        </div>
        <h1 className="head-text mt-20">Advisors</h1>
        <div id="team" className="w-auto max-w-4xl flex lg:justify-start justify-center flex-wrap my-12 gap-x-5 lg:gap-x-10 gap-y-10">
          {advisors.map((profile, index) => (
            <PersonProfile key={index} {...profile} />
          ))}
        </div>
      </div>
      <div className="bg-background w-full py-20">
        <Brand />
      </div>
    </main>
  );
}
