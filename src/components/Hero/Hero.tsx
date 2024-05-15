import Form from "../ui/form";

const Hero = () => {
  return (
    <div className='flex justify-center items-center flex-col  relative  z-20'>
      <div className='py-10 flex flex-col justify-center items-center bg-transparent gap-y-2 lg:gap-y-10 z-30'>
        <p className='font-medium bg-transparent text-2xl lg:text-6xl max-w-2xl w-full font-Inter text-center text-white'>
          Your AI Agent to<br className='' />
          <span className='bg-gradient-to-r bg-clip-text text-transparent from-blue-600 to-white ' >supercharge workflow</span>
        </p>
        <p className='font-Inter text-sm lg:text-lg font-medium  lg:px-0 px-6 lg:max-w-xl text-center w-full text-[#eee] bg-transparent'>
          Our agents integrate with your existing software, automating your
          workflows and repetitive tasks for you.
        </p>
      </div>
      <div className="z-20 w-full mx-auto max-w-sm lg:max-w-lg  bg-transparent lg:px-0 px-6">
      <Form />
      </div>
      <img src='/radialElipse.svg' className='absolute top -bottom-1 lg:top-1 z-10' />
      <img src='/WEBP/dashboard.webp' className='z-20 py-10 bg-transparent w-full lg:px-0 px-5' />
    </div>
  )
}

export default Hero;


