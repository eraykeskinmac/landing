export type SiteConfig = {
  title: string;
  name: string;
  description: string;
  keywords: string[];
  siteUrl: string;
  ogImage: string;
  links: {
    twitter: string;
    linkedin: string;
    discord: string;
  };
}

export type NavItem = {
  title: string;
  href: string;
  disable?: boolean;
}

export type DefaultNavConfig = NavItem[]