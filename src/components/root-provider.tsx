import { ThemeProvider } from "@/components/theme/theme-provider";

export default function RootProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ThemeProvider defaultTheme="light">{children}</ThemeProvider>;
}
