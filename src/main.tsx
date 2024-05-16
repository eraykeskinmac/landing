import React from "react";
import ReactDOM from "react-dom/client";
import App from "@/App.tsx";
import "@/styles/globals.css";
import { Navbar } from "@/components/navbar";
import Footer from "./components/footer";
import RootProvider from "@/components/root-provider";
import { Toaster } from "@/components/ui/sonner";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RootProvider>
      <Toaster richColors position="top-center" toastOptions={{}} />
      <header className="bg-[var(--bg-hero)] w-full">
        <Navbar />
      </header>
      <App />
      <footer className="border-t">
        <Footer />
      </footer>
    </RootProvider>
  </React.StrictMode>
);
