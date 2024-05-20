import { Grid1, Grid2, Grid3, Grid4, Grid5} from './grids'

export default function FeaturesSection() {
  return (
    <section id="features" className="min-h-screen w-full max-w-7xl mx-auto my-6 md:mt-24 lg:mt-28 grid grid-cols-1 md:grid-cols-4 gap-y-5 gap-x-0 md:gap-x-5 px-5 md:px-0">
      <Grid1 />
      <Grid2 />
      <Grid3 />
      <Grid4 />
      <Grid5 />
    </section>
  )
}