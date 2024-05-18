import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const isActiveCategory = (categoryPath: string, currentPath: string, route: string) => {
  const relativePath = currentPath.replace(route, "");
  if (relativePath === "" && categoryPath === "/") {
    return true;
  }
  if (categoryPath !== "/" && currentPath.startsWith(route + categoryPath)) {
    return true;
  }

  return false;
};