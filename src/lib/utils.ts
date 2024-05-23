import { categories } from "@/config/blogCategories.config";
import { blogs } from "@/constants/blogs";
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

export const getActiveCategory = () => {
  const blog = "/blog"
  const currentPath = window.location.pathname;
  console.log(currentPath)
  const category = categories.find((category) => {
    return isActiveCategory(category.slug, currentPath, blog);
  });
  return category
}

export const getBlog = (slug: string) => {
  const blog = blogs.find((blog) => blog.slug === slug);
  return blog
}

const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
export const generateRandomString = (length: number) => {
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};
