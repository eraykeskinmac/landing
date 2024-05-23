import { Separator } from "@/components/ui/separator";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site.config";
import { Link } from "@tanstack/react-router";
import { CTAButton } from "@/components/brand/cta-button";

export default function Footer() {
  return (
    <div className="w-full max-w-7xl mx-auto flex flex-col py-4 lg:py-16 px-3 md:px-2 lg:px-0 z-50">
      <div className="flex justify-between flex-wrap gap-5">
        <div className="space-y-8 lg:space-y-5 md:w-auto w-full flex flex-col md:items-start items-center">
          <Link to="/">
            <Icons.Logo />
          </Link>
          <div className="flex items-center gap-3">
            <CTAButton className="bg-[var(--theme-color)] text-slate-200 hover:bg-indigo-800/60 shine shine-hover" />
            <Button variant="outline" size="sm">
              <a href="/#integration">
                Learn more
              </a>
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
        <div className="flex gap-12 justify-center md:w-auto w-full">
          <div className="space-y-3 text-muted-foreground flex flex-col">
            <h1 className="text-primary">Products</h1>
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
              to="/blog"
              className="text-sm hover:text-secondary-foreground duration-75 transition-colors"
            >
              Blogs
            </Link>
            <a
              href="/#integration"
              className="text-sm hover:text-secondary-foreground duration-75 transition-colors"
            >
              Integration
            </a>
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
