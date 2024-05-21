
import Features from '@/components/integration/Features'
import Integration from '@/components/integration/integration'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/integration')({
  component: IntegrationPage
})

function IntegrationPage() {
  return (
    <div className='w-full min-h-screen bg-[var(--bg-hero)]'>
      {/* <h1 className='head-text text-center primary-gradient p-2'>Integration</h1> */}

      <div className='w-full flex justify-center items-center'>
<Integration/>
      </div>

<div className='flex flex-col justify-center items-center'>
<p className='bg-gradient-to-r from-[#6C38FF] to-[#B59AFF] bg-clip-text text-transparent text-base font-semibold tracking-widest uppercase'>Integrations</p>
<div className='flex justify-center items-center gap-y-4 flex-col'>
  <p className='text-4xl pt-3 font-medium'>Dozens of apps. Endless possibilities.</p>
<p className='text-[#8A8F98] max-w-2xl text-center font-medium '>Enhance your Linear experience with a wide variety of add-ons and integrations. From everyday essentials to powerful pro workflows.</p>
</div>
</div>
<Features/>
    </div>
  )
}