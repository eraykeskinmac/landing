import { createFileRoute, Outlet } from "@tanstack/react-router";
import Brand from "@/components/brand";
import NotFoundPage from "@/components/not-found";

export const Route = createFileRoute("/blog/_layout")({
  notFoundComponent: NotFoundPage,
  component: () => {
    return (
      <main id="blog" className="w-full min-h-screen bg-[var(--bg-hero)]">
        <div className="w-full max-w-5xl mx-auto mt-6 lg:mt-20">
          <div className="px-2 md:px-2 w-full mx-auto">
            <Outlet />
          </div>
        </div>
        <div className="w-full bg-background py-20">
          <Brand />
        </div>
      </main>
    );
  },
});