import React from 'react'

type Props = {
className?:string
}

const PricingGradient = ({className}:Props) => {
  return (
    <div>
        <svg xmlns="http://www.w3.org/2000/svg" className={`${className}`} width={1251} height={800}  viewBox="0 0 1758 1571" fill="none">
<g filter="url(#filter0_f_495_2864)">
<path d="M352.651 880.119C350.651 719.155 347.85 388.135 352.651 351.763H409.52V881.002L352.651 880.119Z" fill="#6950FC"/>
<path d="M817.805 1220.88L352.651 917.197H434.829L881.977 1197.04L1329.12 917.197H1408L949.349 1220.88L881.977 1197.04L817.805 1220.88Z" fill="#6950FC"/>
<path d="M1351.13 879.237C1349.13 718.273 1346.33 387.252 1351.13 350.88H1408V880.119L1351.13 879.237Z" fill="#6950FC"/>
</g>
<defs>
<filter id="filter0_f_495_2864" x="0" y="0.880371" width="1758" height="1570" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="175" result="effect1_foregroundBlur_495_2864"/>
</filter>
</defs>
</svg>
    </div>
  )
}

export default PricingGradient