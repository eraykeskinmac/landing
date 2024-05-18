/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as BlogLayoutImport } from './routes/blog/_layout'

// Create Virtual Routes

const BlogImport = createFileRoute('/blog')()
const IntegrationLazyImport = createFileRoute('/integration')()
const DocsLazyImport = createFileRoute('/docs')()
const ChangelogLazyImport = createFileRoute('/changelog')()
const AboutLazyImport = createFileRoute('/about')()
const IndexLazyImport = createFileRoute('/')()
const BlogLayoutIndexLazyImport = createFileRoute('/blog/_layout/')()
const BlogLayoutBlogCategoryLazyImport = createFileRoute(
  '/blog/_layout/$blogCategory',
)()
const BlogLayoutBlogCategorySlugLazyImport = createFileRoute(
  '/blog/_layout/$blogCategory/$slug',
)()

// Create/Update Routes

const BlogRoute = BlogImport.update({
  path: '/blog',
  getParentRoute: () => rootRoute,
} as any)

const IntegrationLazyRoute = IntegrationLazyImport.update({
  path: '/integration',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/integration.lazy').then((d) => d.Route))

const DocsLazyRoute = DocsLazyImport.update({
  path: '/docs',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/docs.lazy').then((d) => d.Route))

const ChangelogLazyRoute = ChangelogLazyImport.update({
  path: '/changelog',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/changelog.lazy').then((d) => d.Route))

const AboutLazyRoute = AboutLazyImport.update({
  path: '/about',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/about.lazy').then((d) => d.Route))

const IndexLazyRoute = IndexLazyImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

const BlogLayoutRoute = BlogLayoutImport.update({
  id: '/_layout',
  getParentRoute: () => BlogRoute,
} as any)

const BlogLayoutIndexLazyRoute = BlogLayoutIndexLazyImport.update({
  path: '/',
  getParentRoute: () => BlogLayoutRoute,
} as any).lazy(() =>
  import('./routes/blog/_layout.index.lazy').then((d) => d.Route),
)

const BlogLayoutBlogCategoryLazyRoute = BlogLayoutBlogCategoryLazyImport.update(
  {
    path: '/$blogCategory',
    getParentRoute: () => BlogLayoutRoute,
  } as any,
).lazy(() =>
  import('./routes/blog/_layout.$blogCategory.lazy').then((d) => d.Route),
)

const BlogLayoutBlogCategorySlugLazyRoute =
  BlogLayoutBlogCategorySlugLazyImport.update({
    path: '/$slug',
    getParentRoute: () => BlogLayoutBlogCategoryLazyRoute,
  } as any).lazy(() =>
    import('./routes/blog/_layout.$blogCategory.$slug.lazy').then(
      (d) => d.Route,
    ),
  )

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/about': {
      id: '/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutLazyImport
      parentRoute: typeof rootRoute
    }
    '/changelog': {
      id: '/changelog'
      path: '/changelog'
      fullPath: '/changelog'
      preLoaderRoute: typeof ChangelogLazyImport
      parentRoute: typeof rootRoute
    }
    '/docs': {
      id: '/docs'
      path: '/docs'
      fullPath: '/docs'
      preLoaderRoute: typeof DocsLazyImport
      parentRoute: typeof rootRoute
    }
    '/integration': {
      id: '/integration'
      path: '/integration'
      fullPath: '/integration'
      preLoaderRoute: typeof IntegrationLazyImport
      parentRoute: typeof rootRoute
    }
    '/blog': {
      id: '/blog'
      path: '/blog'
      fullPath: '/blog'
      preLoaderRoute: typeof BlogImport
      parentRoute: typeof rootRoute
    }
    '/blog/_layout': {
      id: '/blog/_layout'
      path: '/blog'
      fullPath: '/blog'
      preLoaderRoute: typeof BlogLayoutImport
      parentRoute: typeof BlogRoute
    }
    '/blog/_layout/$blogCategory': {
      id: '/blog/_layout/$blogCategory'
      path: '/$blogCategory'
      fullPath: '/blog/$blogCategory'
      preLoaderRoute: typeof BlogLayoutBlogCategoryLazyImport
      parentRoute: typeof BlogLayoutImport
    }
    '/blog/_layout/': {
      id: '/blog/_layout/'
      path: '/'
      fullPath: '/blog/'
      preLoaderRoute: typeof BlogLayoutIndexLazyImport
      parentRoute: typeof BlogLayoutImport
    }
    '/blog/_layout/$blogCategory/$slug': {
      id: '/blog/_layout/$blogCategory/$slug'
      path: '/$slug'
      fullPath: '/blog/$blogCategory/$slug'
      preLoaderRoute: typeof BlogLayoutBlogCategorySlugLazyImport
      parentRoute: typeof BlogLayoutBlogCategoryLazyImport
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  IndexLazyRoute,
  AboutLazyRoute,
  ChangelogLazyRoute,
  DocsLazyRoute,
  IntegrationLazyRoute,
  BlogRoute: BlogRoute.addChildren({
    BlogLayoutRoute: BlogLayoutRoute.addChildren({
      BlogLayoutBlogCategoryLazyRoute:
        BlogLayoutBlogCategoryLazyRoute.addChildren({
          BlogLayoutBlogCategorySlugLazyRoute,
        }),
      BlogLayoutIndexLazyRoute,
    }),
  }),
})

/* prettier-ignore-end */
