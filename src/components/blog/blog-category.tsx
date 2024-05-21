import { Link } from "@tanstack/react-router";
import { cn, getActiveCategory } from "@/lib/utils";
import { categories } from "@/config/blogCategories.config";

export default function BlogCategoryBar() {
  const route = "/blog"
  const activeCategory = getActiveCategory();
  if (!activeCategory) return null;

  return (
    <>
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
                activeCategory.slug === category.slug
                  ? "text-slate-800 bg-gradient-to-r from-indigo-400 to-indigo-50"
                  : ""
              )}
            >
              {category.name}
            </Link>
          );
        })}
      </div>
      <h1 className="head-text mt-8 md:mt-14">{activeCategory.name}</h1>
    </>
  );
}
