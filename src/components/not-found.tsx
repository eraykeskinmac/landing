import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export default function NotFoundPage() {
  return (
    <main className="w-full bg-[var(--bg-hero)] h-[90vh] flex flex-col justify-center items-center">
      <div className="w-full aspect-video max-w-3xl rounded-2xl flex flex-col justify-center items-center bg-indigo-900/20 gap-4">
        <h1 className="text-5xl md:text-6xl lg:text-9xl font-black">404</h1>
        <p className="text-3xl">Page not found</p>
        <Button asChild className="shine shine-hover group">
          <Link to="/" className="flex items-center gap-2">
            <p>Go to homepage</p>
            <ArrowRight size={15} className="-translate-x-1 group-hover:translate-x-0 group-hover:rotate-180 duration-300 transition-all ease-in-out" />
          </Link>
        </Button>
      </div>
    </main>
  );
}
