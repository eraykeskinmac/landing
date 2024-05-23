import Integration from "./integration";

export default function IntegrationSection() {
  return (
    <section
      id="integration"
      className="relative mt-12 mb-16 md:mt-24 md:mb-28 w-full"
    >
      <svg
        viewBox="0 0 1920 1252"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-1/2 -translate-x-1/2 translate-y-16 md:-translate-y-[10%] lg:-translate-y-[33%] -z-50 w-[100%] h-auto overflow-hidden"
      >
        <path
          d="M2124 0C2124 332.051 2000.1 650.502 1779.56 885.298C1559.01 1120.09 1259.89 1252 948 1252C636.106 1252 336.985 1120.09 116.443 885.298C-104.1 650.502 -228 332.051 -228 0.000244141L553.556 0.00012207C553.556 111.374 595.114 218.186 669.086 296.939C743.059 375.692 843.387 419.935 948 419.935C1052.61 419.935 1152.94 375.692 1226.91 296.939C1300.89 218.186 1342.44 111.374 1342.44 0H2124Z"
          fill="url(#paint0_linear_446_968)"
          fillOpacity="0.2"
        />
        <defs>
          <linearGradient
            id="paint0_linear_446_968"
            x1="948"
            y1="-1252"
            x2="948"
            y2="1252"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.624" stopColor="#0F0F0F" />
            <stop offset="1" stopColor="#666666" stopOpacity="" />
          </linearGradient>
        </defs>
      </svg>

      <div className="w-full flex justify-center items-center">
        <Integration />
      </div>

      <div className="flex flex-col justify-center items-center text-center">
        <p className="primary-gradient font-semibold tracking-widest uppercase">
          Integrations
        </p>
        <div className="flex justify-center items-center gap-y-4 flex-col">
          <p className="text-4xl pt-3 font-medium">
            Connect your tool and automate it in seconds
          </p>
          <p className="text-muted-foreground max-w-xl">
            Our AI Agents that work alongside you, seamlessly integrates with
            your existing software to enhance productivity and workflow
          </p>
        </div>
      </div>
    </section>
  );
}
