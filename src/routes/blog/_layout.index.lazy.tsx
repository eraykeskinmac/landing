import { createLazyFileRoute } from "@tanstack/react-router";
import BlogCategoryBar from "@/components/blog/blog-category";
import LoadBlogs from "@/components/blog/load-blogs";

export const Route = createLazyFileRoute("/blog/_layout/")({
  component: BlogPage,
});

function BlogPage() {
  return (
    <main className="w-full mt-6 lg:mt-8 min-h-screen">
      <BlogCategoryBar />
      <LoadBlogs />
    </main>
  );
}
