import { motion } from "framer-motion";

export default function Grid4() {
  return (
    <div className="relative w-full h-full flex flex-col justify-end p-2 md:p-5">
      <div className="relative h-full">
        <motion.img
          src="/lightning.gif"
          className="absolute left-1/3 top-1/3 -translate-x-1/2 -translate-y-1/2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: [0, 1, 0] }}
          transition={{ duration: 0.2, delay: 1.30 }}
          viewport={{ once: true }}
        />
        <motion.svg
          width="174"
          height="250"
          viewBox="0 0 174 250"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mx-auto h-full"
          whileInView={{
            x: [0, 4, -4, 5, -5, 0],
            transition: { duration: 0.1, delay: 1.25 },
          }}
          viewport={{ once: true }}
        >
          <motion.path
            initial={{ opacity: 0, x: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.25, delay: 1.25 }}
            viewport={{ once: true }}
            d="M115.506 16.5784V107.255H161.547C179.937 107.255 171.623 127.41 167.605 132.698C144.587 162.985 96.1313 225.977 84.0085 241.736L84.0044 241.742C71.2196 258.362 59.7724 242.953 59.7724 233.261V142.391H11.3084C-4.19999 142.391 0.944172 126.64 6.46216 118.159C29.4823 85.4458 80.3692 22.4424 92.4855 7.90364C104.065 -5.99112 115.506 3.25049 115.506 16.5784Z"
            fill="url(#paint0_linear_551_575)"
          />
          <motion.path
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 0.25 }}
            d="M115.506 16.5784V107.255H161.547C179.937 107.255 171.623 127.41 167.605 132.698C144.587 162.985 96.1313 225.977 84.0085 241.736L84.0044 241.742C71.2196 258.362 59.7724 242.953 59.7724 233.261V142.391H11.3084C-4.19999 142.391 0.944172 126.64 6.46216 118.159C29.4823 85.4458 80.3692 22.4424 92.4855 7.90364C104.065 -5.99112 115.506 3.25049 115.506 16.5784Z"
            stroke="#6668BD"
          />
          <defs>
            <linearGradient
              id="paint0_linear_551_575"
              x1="102.774"
              y1="1"
              x2="70.061"
              y2="248.166"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#5661F6" />
              <stop offset="0.975" stop-color="#323990" />
            </linearGradient>
          </defs>
          <filter id="noise" x="0" y="0">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.01"
              numOctaves="2"
              result="turbulence"
            />
            <feDisplacementMap
              in2="turbulence"
              in="SourceGraphic"
              scale="20"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </motion.svg>
      </div>
      <div className="z-20">
        <h1 className="mb-2 text-[#757EEE]">
          Built for efficiency and productivity
        </h1>
        <p className="text-lg md:text-xl font-semibold">
          Fly through your task with our AI agents
        </p>
        <p className="text-lg md:text-xl font-semibold">
          automating workflow quickly and efficiently
        </p>
      </div>
      <motion.svg
          width="364"
          height="364"
          viewBox="0 0 364 364"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <motion.path
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.2, scale: 1.7 }}
            transition={{ duration: 0.25, delay: 1.25, type: "spring", damping: "50" }}
            d="M294 182C294 243.856 243.856 294 182 294C120.144 294 70 243.856 70 182C70 120.144 120.144 70 182 70C243.856 70 294 120.144 294 182ZM72.0264 182C72.0264 242.737 121.263 291.974 182 291.974C242.737 291.974 291.974 242.737 291.974 182C291.974 121.263 242.737 72.0264 182 72.0264C121.263 72.0264 72.0264 121.263 72.0264 182Z"
            fill="url(#paint0_linear_556_570)"
          />
          <motion.path
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.15, scale: 1.96 }}
            transition={{ duration: 0.25, delay: 1.35, type: "spring", damping: "50" }}
            d="M319 181.5C319 256.887 257.887 318 182.5 318C107.113 318 46 256.887 46 181.5C46 106.113 107.113 45 182.5 45C257.887 45 319 106.113 319 181.5ZM48.4697 181.5C48.4697 255.523 108.477 315.53 182.5 315.53C256.523 315.53 316.53 255.523 316.53 181.5C316.53 107.477 256.523 47.4697 182.5 47.4697C108.477 47.4697 48.4697 107.477 48.4697 181.5Z"
            fill="url(#paint1_linear_556_570)"
          />
          <motion.path
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.15, scale: 2.2 }}
            transition={{ duration: 0.25, delay: 1.45, type: "spring", damping: "50" }}
            d="M340 181.5C340 268.485 269.485 339 182.5 339C95.5152 339 25 268.485 25 181.5C25 94.5152 95.5152 24 182.5 24C269.485 24 340 94.5152 340 181.5ZM27.8497 181.5C27.8497 266.911 97.089 336.15 182.5 336.15C267.911 336.15 337.15 266.911 337.15 181.5C337.15 96.089 267.911 26.8497 182.5 26.8497C97.089 26.8497 27.8497 96.089 27.8497 181.5Z"
            fill="url(#paint2_linear_556_570)"
          />
          <motion.path
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.2, scale: 4.5 }}
            transition={{ duration: 0.25, delay: 1.55, type: "spring", damping: "50" }}
            d="M364 182C364 282.516 282.516 364 182 364C81.4842 364 0 282.516 0 182C0 81.4842 81.4842 0 182 0C282.516 0 364 81.4842 364 182ZM3.29297 182C3.29297 280.697 83.3028 360.707 182 360.707C280.697 360.707 360.707 280.697 360.707 182C360.707 83.3028 280.697 3.29297 182 3.29297C83.3028 3.29297 3.29297 83.3028 3.29297 182Z"
            fill="url(#paint3_linear_556_570)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_556_570"
              x1="182"
              y1="70"
              x2="182"
              y2="294"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#747CE5" stopOpacity="0" />
              <stop stop-color="#747CE5" />
              <stop offset="1" stop-color="#292E74" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_556_570"
              x1="182.5"
              y1="45"
              x2="182.5"
              y2="318"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#747CE5" stopOpacity="0" />
              <stop stop-color="#747CE5" />
              <stop offset="1" stop-color="#292E74" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_556_570"
              x1="182.5"
              y1="24"
              x2="182.5"
              y2="339"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#747CE5" stopOpacity="0" />
              <stop stop-color="#747CE5" />
              <stop offset="1" stop-color="#292E74" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_556_570"
              x1="182"
              y1="0"
              x2="182"
              y2="364"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#747CE5" stopOpacity="0" />
              <stop stop-color="#747CE5" />
              <stop offset="1" stop-color="#292E74" />
            </linearGradient>
          </defs>
        </motion.svg>
    </div>
  );
}
