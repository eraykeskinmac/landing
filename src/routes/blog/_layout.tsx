import { createFileRoute, Outlet } from "@tanstack/react-router";
import Brand from "@/components/brand";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import { categories } from "@/config/blogCategories.config";
import { isActiveCategory } from "@/lib/utils";

export const Route = createFileRoute("/blog/_layout")({
  component: () => {
    const route = "/blog";
    const currentPath = window.location.pathname;
    const activeCategory = categories.find((category) => {
      return isActiveCategory(category.slug, currentPath, route);
    });

    return (
      <main id="blog" className="w-full min-h-screen bg-[var(--bg-hero)]">
        <div className="w-full max-w-7xl mx-auto mt-6 lg:mt-16">
          <div
            id="categories"
            className="flex md:inline-flex max-w-[95%] mx-auto items-center gap-2 lg:gap-4 p-1 rounded-full bg-indigo-300/30 border border-indigo-500/30"
          >
            {categories.map((category, index) => {
              return (
                <Link
                  key={index}
                  to={route + category.slug}
                  className={cn(
                    "p-1 lg:p-2 rounded-[inherit] text-xs lg:text-sm",
                    activeCategory?.slug === category.slug
                      ? "text-slate-800 bg-gradient-to-r from-indigo-400 to-indigo-50"
                      : ""
                  )}
                >
                  {category.name}
                </Link>
              );
            })}
          </div>
          <div className="px-2 md:px-0 w-full mx-auto">
            <h1 className="head-text my-8 md:my-10">{activeCategory?.name}</h1>
            <Outlet />
          </div>
        </div>
        <div className="w-full bg-background">
          <Brand />
        </div>
      </main>
    );
  },
});