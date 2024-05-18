import { createLazyFileRoute } from '@tanstack/react-router'
import { blogs } from '@/constants/blogs'

export const Route = createLazyFileRoute('/blog/_layout/$blogCategory/$slug')({
  component: Blog,
})

function Blog() {
  const { blogCategory, slug } = Route.useParams()
  const blog = blogs.find(blog => blog.slug === slug)

  if (!blog) {
    return <div className='w-full min-h-screen flex justify-center items-center head-text'>Blog not found</div>
  }

  return (
    <main className='w-full'>
      <h1>hello world</h1>
      <p>{blogCategory}</p>
    </main>
  )
}