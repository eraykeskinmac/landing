import { createRootRoute, Outlet } from "@tanstack/react-router";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";
import RootProvider from "@/components/root-provider";
import { Toaster } from "@/components/ui/sonner";
import Mininav from "@/components/navbar/mininav";

export const Route = createRootRoute({
  component: () => (
    <>
      <RootProvider>
        <Toaster richColors position="top-center" toastOptions={{}} />
        <Mininav />
        <header className="bg-[var(--bg-hero)] w-full">
          <Navbar />
        </header>
        <div className="flex flex-col flex-1 min-h-screen w-full">
          <Outlet />
        </div>
        <footer className="border-t">
          <Footer />
        </footer>
      </RootProvider>
    </>
  ),
});
