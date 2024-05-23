import { blogs } from "@/constants/blogs";
import BlogCard from "./blog-card";

type LoadBlogsProps = {
  category?: string;
};

export default function LoadBlogs({ category = "all" }: LoadBlogsProps) {
  const categorizedBlogs = blogs.filter((blog) => blog.category.name === category || category === "all");

  return (
    <div className="flex flex-wrap gap-3 mt-8">
      {categorizedBlogs.map((blog) => (
        <BlogCard key={blog.slug} blog={blog} />
      ))}
      {categorizedBlogs.length === 0 && 
        <p>No blogs yet</p>
      }
    </div>
  );
}
