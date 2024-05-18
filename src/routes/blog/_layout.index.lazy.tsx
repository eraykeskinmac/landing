import { createLazyFileRoute } from "@tanstack/react-router";
import { blogs } from "@/constants/blogs";
import BlogCard from "@/components/blog/blog-card";

export const Route = createLazyFileRoute("/blog/_layout/")({
  component: BlogPage,
});

function BlogPage() {
  return (
    <main className="w-full mt-12 md:mt-16 lg:mt-10 min-h-screen">
      <div className="flex flex-wrap gap-3">
        {blogs.map((blog) => (
          <BlogCard key={blog.slug} blog={blog} />
        ))}
      </div>
    </main>
  );
}
