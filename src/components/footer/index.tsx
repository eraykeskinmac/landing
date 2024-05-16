import { Separator } from "@/components/ui/separator";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site.config";
import { Link } from "@tanstack/react-router";

export default function Footer() {
  return (
    <div className="w-full max-w-7xl mx-auto flex flex-col py-4 lg:py-16 px-2 md:px-3 lg:px-0">
      <div className="flex justify-between">
        <div className="space-y-5">
          <Link to="/">
            <Icons.Logo />
          </Link>
          <div className="flex items-center gap-3">
            <Button
              size="sm"
              onClick={() => {
                document.getElementById("waitlist-form")?.focus();
              }}
              className="bg-[var(--theme-color)] text-slate-200 hover:bg-indigo-400/70"
            >
              Join waitlist
            </Button>
            <Button variant="outline" size="sm">
              Learn more
            </Button>
          </div>
          <div className="flex items-center gap-3">
            <Link to={siteConfig.links.twitter} target="_blank">
              <Icons.Twitter className="hover:scale-110 duration-75 transition-all ease-in-out" />
            </Link>
            <Link to={siteConfig.links.linkedin} target="_blank">
              <Icons.LinkedIn className="hover:scale-110 duration-75 transition-all ease-in-out" />
            </Link>
            <Link to={siteConfig.links.discord} target="_blank" className="rounded-full w-7 h-7 p-1 bg-white flex justify-center items-center hover:scale-110 duration-75 transition-all ease-in-out">
              <Icons.Discord width={20} height={20} />
            </Link>
          </div>
        </div>
        <div className="flex gap-12">
          <div className="space-y-3 text-muted-foreground flex flex-col">
            <h1 className="text-primary">Products</h1>
            <Link
              to="/docs"
              className="text-sm hover:text-secondary-foreground duration-75 transition-colors"
            >
              Docs
            </Link>
            <Link
              to="/changelog"
              className="text-sm hover:text-secondary-foreground duration-75 transition-colors"
            >
              Changelog
            </Link>
          </div>
          <div className="space-y-3 text-muted-foreground flex flex-col">
            <h1 className="text-primary">Company</h1>
            <Link
              to="/about"
              className="text-sm hover:text-secondary-foreground duration-75 transition-colors"
            >
              About
            </Link>
            <Link
              to="/blogs"
              className="text-sm hover:text-secondary-foreground duration-75 transition-colors"
            >
              Blogs
            </Link>
            <Link
              to="/integration"
              className="text-sm hover:text-secondary-foreground duration-75 transition-colors"
            >
              Integration
            </Link>
          </div>
        </div>
      </div>
      <Separator className="my-5" />
      <div className="flex md:justify-between flex-wrap justify-center text-sm text-muted-foreground">
        <p>© 2024 <a href={siteConfig.siteUrl} className="hover:underline">Leapflow</a>. All rights reserved.</p>
        <div className="flex items-center gap-5">
          <a href="/">Terms of Service</a>
          <a href="/">Privacy Policy</a>
          <a href="/">Cookies</a>
        </div>
      </div>
    </div>
  );
}
