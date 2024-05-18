import { IntegrationDemo } from '@/components/integration/integration'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/integration')({
  component: IntegrationPage
})

function IntegrationPage() {
  return (
    <div className='w-full min-h-screen bg-[var(--bg-hero)]'>
      <h1 className='head-text text-center primary-gradient p-2'>Integration</h1>

      <div className='w-full flex justify-center items-center'>
        <IntegrationDemo />
      </div>
    </div>
  )
}