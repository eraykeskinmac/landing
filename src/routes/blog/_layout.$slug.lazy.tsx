import { createLazyFileRoute, Link } from "@tanstack/react-router";
import { getActiveCategory, getBlog } from "@/lib/utils";
import BlogCategoryBar from "@/components/blog/blog-category";
import LoadBlogs from "@/components/blog/load-blogs";
import { BlogCategory } from "@/types";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { siteConfig } from "@/config/site.config";

export const Route = createLazyFileRoute("/blog/_layout/$slug")({
  component: BlogPage,
});

function BlogCategoryPage({
  activeCategory,
}: {
  activeCategory: BlogCategory;
}) {
  return (
    <main className="w-full min-h-screen">
      <BlogCategoryBar />
      <LoadBlogs category={activeCategory.name} />
    </main>
  );
}

function BlogPage() {
  const { slug } = Route.useParams();
  const activeCategory = getActiveCategory();
  const blog = getBlog(slug);

  if (activeCategory) {
    return <BlogCategoryPage activeCategory={activeCategory} />;
  }

  if (blog === undefined) {
    window.location.href = "/blog";
    return null;
  }

  return (
    <main className="relative w-full max-w-3xl mx-auto min-h-screen">
      <Link to="/blog">
        <Button
          size="sm"
          variant="ghost"
          className="group mb-3 p-0 flex items-center gap-2 hover:bg-transparent hover:text-white"
        >
          <ArrowLeft
            size={16}
            className="translate-x-1 group-hover:-translate-x-0 transition-all duration-150 delay-75 ease-in-out"
          />
          <p>Go back</p>
        </Button>
      </Link>
      <div className="w-full p-2 bg-indigo-400/50 rounded-lg">
        <img src={blog.image} className="w-full h-auto rounded-lg" />
      </div>
      <div className="bg-indigo-400/50 px-2 py-1 rounded-full inline-flex text-sm my-6">
        <p>{blog.category.name}</p>
      </div>
      <h1 className="text-3xl lg:text-5xl font-bold my-2">{blog.title}</h1>
      <p className="text-muted-foreground">{blog.description}</p>
      <div className="w-full flex justify-between items-end my-6">
        <div className="flex gap-3 items-center">
          <img
            src={blog.author.image}
            alt={blog.author.name}
            className="w-9 h-9 object-cover rounded-full hover:scale-105 duration-200 transition-transform transform-gpu ease-in-out"
          />
          <div>
            <h2>{blog.author.name}</h2>
            <p className="text-sm text-muted-foreground">
              {blog.author.designation}
            </p>
          </div>
        </div>
        <div className="text-sm text-muted-foreground">
          {blog.date.toDateString()}
        </div>
      </div>
      <Separator className="mb-6 bg-primary/40" />

      {/* hardcoded blog, will change to markdown later */}
      <h1 className="text-4xl my-2 font-semibold">Join our waitlist</h1>
      <p className="text-muted-foreground text-lg">
        We’re excited to announce that our waitlist is officially open! As a
        valued early adopter or user, you have the exclusive opportunity to be
        among the first to experience the future of automated workflows.
      </p>
      <h1 className="text-4xl mt-8 mb-2 font-semibold">What to Expect</h1>
      <p className="text-muted-foreground text-lg">
        Early Access: Try out new features and tools before they’re available to
        everyone else.
        <br />
        <br />
        To ensure a smooth and efficient rollout process, we will be inviting
        users in batches to join our Beta launch.
      </p>
      <h1 className="text-4xl mt-8 mb-2 font-semibold">How to Join</h1>
      <p className="text-muted-foreground text-lg">
        You can join the waitlist{" "}
        <Link to="/" className="underline text-primary">
          here
        </Link>{" "}
        by entering your email address. Also, you can join our{" "}
        <a href={siteConfig.links.discord} className="text-primary underline">Discord server</a> for updates
        and announcements from our team.
      </p>
      <p className="text-muted-foreground text-lg my-16">
        We believe that automation is the key to unlocking new levels of
        productivity and efficiency. By joining our waitlist, you’ll be at the
        forefront of this exciting journey. 
        <br />
        <br />
        We look forward to welcoming you to
        our community of early adopters and can’t wait to share what we’ve been
        working on.
      </p>
    </main>
  );
}
