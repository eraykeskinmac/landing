import type { BlogSchema } from "@/types";
import { Link } from "@tanstack/react-router";

export default function BlogCard({ blog }: { blog: BlogSchema }) {
  return (
    <div className="w-full max-w-72 bg-indigo-500/40 rounded-2xl p-2">
      <Link to={`${blog.category.slug}/${blog.slug}`}>
        <div className="w-full rounded-2xl mb-2 overflow-hidden">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full hover:scale-105 transition-all transform-gpu duration-300 ease-in-out"
          />
        </div>
      </Link>
      <Link to={blog.category.slug}>
        <p className="inline-block p-1 bg-indigo-400 text-[10px] rounded-full hover:translate-x-1 duration-100 transition-all ease-in-out">
          {blog.category.name}
        </p>
      </Link>
      <Link to={`${blog.category.slug}/${blog.slug}`}>
        <h1 className="font-semibold">{blog.title}</h1>
      </Link>
      <div className="w-full flex justify-between items-end mt-2">
        <div className="flex gap-2 items-center">
          <a href={blog.author.twitter} target="_blank" className="w-9 h-9 rounded-full overflow-hidden">
            <img
              src={blog.author.image}
              alt={blog.author.name}
              className="w-9 h-9 object-cover hover:scale-105 duration-200 transition-transform transform-gpu ease-in-out"
            />
          </a>
          <div>
            <a href={blog.author.twitter} target="_blank">
              {blog.author.name}
            </a>
            <h1 className="text-sm text-muted-foreground">
              {blog.author.designation}
            </h1>
          </div>
        </div>
        <div className="text-xs text-muted-foreground">
          {blog.date.toDateString()}
        </div>
      </div>
    </div>
  );
}
