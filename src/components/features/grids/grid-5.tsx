import { Button } from "@/components/ui/button";

export default function Grid5() {
  return (
    <div className="col-span-2 border w-full rounded-2xl bg-secondary flex flex-col justify-between p-2 md:p-5">
      <h1 className="text-xl md:text-4xl lg:text-5xl font-bold">Higher quality output and Consistency</h1>
      <p className="text-2xl text-muted-foreground">
        Consistently deliver top-notch results with our reliable system,
        ensuring excellence in every task, just like having a dependable
        teammate by your side.
      </p>
      <div>
        <Button className="rounded-full" size="lg">
          <a href="/about">
            Explore more
          </a>
        </Button>
      </div>
    </div>
  );
}
