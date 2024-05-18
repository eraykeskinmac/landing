import type { BlogSchema } from "@/types";
import { Link } from "@tanstack/react-router";

export default function BlogCard({ blog }: { blog: BlogSchema }) {
  return (
    <div className="w-full max-w-72 bg-[#262443] rounded-xl p-2">
      <Link to={`${blog.category.slug}/${blog.slug}`}>
        <div className="w-full rounded-lg mb-2 overflow-hidden">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full hover:scale-105 transition-all transform-gpu duration-300 ease-in-out"
          />
        </div>
      </Link>
      <Link to={blog.category.slug}>
        <p className="inline-block px-2 py-1 bg-indigo-400 text-[9px] rounded-full hover:translate-x-1 duration-100 transition-all ease-in-out">
          {blog.category.name}
        </p>
      </Link>
      <Link to={`${blog.category.slug}/${blog.slug}`}>
        <h1 className="font-semibold text-sm px-1 my-1">{blog.title}</h1>
      </Link>
      
      <div className="w-full flex justify-between items-end ">
        <div className="flex gap-2 items-center">
          <a href={blog.author.twitter} target="_blank" className="w-9 h-9 rounded-full overflow-hidden">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full hover:scale-105 transition-all transform-gpu duration-300 ease-in-out"
            />
          </a>
          <div >
            <a href={blog.author.twitter} className="text-sm" target="_blank">
              {blog.author.name}
            </a>
            <p className="text-xs text-muted-foreground">
              {blog.author.designation}
            </p>
          </div>
        </div>
      </div>
    </div>

  );
}
