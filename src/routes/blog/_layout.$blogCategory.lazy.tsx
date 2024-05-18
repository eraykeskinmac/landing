import { createLazyFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/blog/_layout/$blogCategory')({
  component: BlogPage
})

function BlogPage() {
  // const { blogCategory } = Route.useParams()

  return (
    <main className="w-full min-h-screen">
      <Outlet />
    </main>
  )
}