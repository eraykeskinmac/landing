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
        <div className="w-full max-w-7xl mx-auto bg-[#3D3F63] my-10 px-0 rounded-lg h-[calc(100vh-100px)]">
          <div
            id="categories"
            className="flex md:inline-flex bg-[#110D22] w-[34.9%] rounded-br-sm  items-center gap-2 lg:gap-4 px-0 pt-0  "
          >
            {categories.map((category, index) => {
              return (
                <Link
                  key={index}
                  to={route + category.slug}
                  className={cn(
                    "p-1 lg:p-2 rounded-[inherit] text-xs lg:text-sm",
                    activeCategory?.slug === category.slug
                      ? "text-slate-800 rounded  rounded-b-none px-10 bg-slate-200 transition-all duration-300 delay-75 ease-in-out dark:bg-slate-800 dark:text-slate-800"
                      : ""
                  )}
                >
                  {category.name}
                </Link>
              );
            })}
          </div>
          <div className="px-2 md:px-2 w-full mx-auto">
            <h1 className="text-4xl my-8 md:mt-8">{activeCategory?.name}</h1>
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