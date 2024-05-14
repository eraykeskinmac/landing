import React from 'react';


const Hero = () => {
  return (
    <div className='flex justify-center items-center flex-col  relative  z-20'>
   <div className='py-10 flex flex-col justify-center items-center bg-transparent gap-y-2 lg:gap-y-10 z-30'>
    <p className='font-medium bg-transparent text-2xl lg:text-6xl max-w-2xl w-full font-Inter text-center text-white'>
   Your AI Agent to<br className=''/>
<span className='bg-gradient-to-r bg-clip-text text-transparent from-blue-600 to-white ' >supercharge workflow</span>
    </p>
    <p className='font-Inter text-sm lg:text-lg font-medium  lg:px-0 px-6 lg:max-w-xl text-center w-full text-[#eee] bg-transparent'>
    Our agents integrate with your existing software, automating your 
workflows and repetitive tasks for you.
    </p>
   </div>
   
<form className="w-full mx-auto max-w-sm lg:max-w-lg z-20 bg-transparent lg:px-0 px-6">   
    <div className="relative bg-transparent">
        <input type="search" id="default-search" className="block w-full p-3 lg:p-4 ps-4 text-sm text-gray-900  rounded-full  focus:ring-transparent dark:bg-[#242424]  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 placeholder:font-Inter" placeholder="Give a task...." required />
        <button type="submit" className="text-white absolute end-2.5 bottom-1.5  focus:ring-4  font-medium rounded-lg text-sm px-4 py-2 ">
        <img  src="/send.svg" className='lg:w-6 w-4 bg-transparent' alt="long-arrow-right"/>


        </button>
    </div>
</form>


<img src='/radialElipse.svg' className='absolute top -bottom-1 lg:top-1 z-10' />


<img src='/WEBP/dashboard.webp' className='z-20 py-10 bg-transparent w-full lg:px-0 px-5'  />
    </div>
  )
}

export default Hero;
 

