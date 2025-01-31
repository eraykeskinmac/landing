/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as BlogLayoutImport } from './routes/blog/_layout'
import { Route as BlogLayoutIndexImport } from './routes/blog/_layout.index'
import { Route as BlogLayoutSlugImport } from './routes/blog/_layout.$slug'

// Create Virtual Routes

const BlogImport = createFileRoute('/blog')()
const ChangelogLazyImport = createFileRoute('/changelog')()
const AboutLazyImport = createFileRoute('/about')()
const IndexLazyImport = createFileRoute('/')()

// Create/Update Routes

const BlogRoute = BlogImport.update({
  path: '/blog',
  getParentRoute: () => rootRoute,
} as any)

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

const BlogLayoutIndexRoute = BlogLayoutIndexImport.update({
  path: '/',
  getParentRoute: () => BlogLayoutRoute,
} as any)

const BlogLayoutSlugRoute = BlogLayoutSlugImport.update({
  path: '/$slug',
  getParentRoute: () => BlogLayoutRoute,
} as any)

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
    '/blog/_layout/$slug': {
      id: '/blog/_layout/$slug'
      path: '/$slug'
      fullPath: '/blog/$slug'
      preLoaderRoute: typeof BlogLayoutSlugImport
      parentRoute: typeof BlogLayoutImport
    }
    '/blog/_layout/': {
      id: '/blog/_layout/'
      path: '/'
      fullPath: '/blog/'
      preLoaderRoute: typeof BlogLayoutIndexImport
      parentRoute: typeof BlogLayoutImport
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  IndexLazyRoute,
  AboutLazyRoute,
  ChangelogLazyRoute,
  BlogRoute: BlogRoute.addChildren({
    BlogLayoutRoute: BlogLayoutRoute.addChildren({
      BlogLayoutSlugRoute,
      BlogLayoutIndexRoute,
    }),
  }),
})

/* prettier-ignore-end */
