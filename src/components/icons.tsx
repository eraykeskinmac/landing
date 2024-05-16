export const Icons = {
  Logo: function Logo({
    width = 100,
    height = 60,
    className,
  }: {
    width?: number;
    height?: number;
    className?: string;
  }) {
    return (
      <img
        src="/logo.svg"
        alt="Logo"
        width={width}
        height={height}
        className={className}
      />
    );
  },
  Twitter: function Twitter({
    width = 20,
    height = 20,
    className,
  }: {
    width?: number;
    height?: number;
    className?: string;
  }) {
    return (
      <svg
        width={width}
        height={height}
        viewBox="0 0 18 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <path
          d="M17.1922 3.06705L14.8562 5.40299C14.3844 10.8733 9.77107 15.1249 4.24998 15.1249C3.1156 15.1249 2.18045 14.9452 1.47029 14.5905C0.897634 14.3038 0.663259 13.9967 0.604665 13.9092C0.552419 13.8309 0.518554 13.7417 0.505602 13.6485C0.49265 13.5552 0.500946 13.4602 0.529869 13.3706C0.558792 13.2809 0.607595 13.199 0.672631 13.1309C0.737667 13.0628 0.817254 13.0102 0.905446 12.9772C0.925759 12.9694 2.7992 12.2499 3.98904 10.8803C3.32918 10.3378 2.75316 9.70072 2.27967 8.98971C1.31092 7.55143 0.22654 5.05299 0.560915 1.3194C0.571514 1.20076 0.615792 1.08762 0.688534 0.993308C0.761277 0.898992 0.859455 0.827427 0.971507 0.787039C1.08356 0.746651 1.20482 0.739122 1.32101 0.76534C1.43719 0.791557 1.54347 0.850429 1.62732 0.935022C1.65467 0.962365 4.22732 3.52096 7.37263 4.35065V3.87487C7.37144 3.37595 7.47008 2.88185 7.66275 2.42164C7.85542 1.96143 8.13822 1.54443 8.49451 1.19518C8.84052 0.849652 9.25224 0.576929 9.70536 0.393103C10.1585 0.209277 10.6438 0.11807 11.1328 0.124865C11.7887 0.131335 12.4318 0.307407 12.9995 0.635963C13.5672 0.964519 14.0403 1.43438 14.3726 1.99987H16.75C16.8737 1.99977 16.9946 2.03637 17.0975 2.10504C17.2003 2.17371 17.2805 2.27136 17.3279 2.38562C17.3752 2.49989 17.3876 2.62563 17.3634 2.74693C17.3393 2.86823 17.2797 2.97964 17.1922 3.06705Z"
          fill="#0078d4"
        />
      </svg>
    );
  },
  LinkedIn: function LinkedIn({
    width = 32,
    height = 32,
    className,
  }: {
    width?: number;
    height?: number;
    className?: string;
  }) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width={width}
        height={height}
        viewBox="0 0 48 48"
        className={className}
      >
        <path
          fill="#0078d4"
          d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5	V37z"
        ></path>
        <path
          d="M30,37V26.901c0-1.689-0.819-2.698-2.192-2.698c-0.815,0-1.414,0.459-1.779,1.364	c-0.017,0.064-0.041,0.325-0.031,1.114L26,37h-7V18h7v1.061C27.022,18.356,28.275,18,29.738,18c4.547,0,7.261,3.093,7.261,8.274	L37,37H30z M11,37V18h3.457C12.454,18,11,16.528,11,14.499C11,12.472,12.478,11,14.514,11c2.012,0,3.445,1.431,3.486,3.479	C18,16.523,16.521,18,14.485,18H18v19H11z"
          opacity=".05"
        ></path>
        <path
          d="M30.5,36.5v-9.599c0-1.973-1.031-3.198-2.692-3.198c-1.295,0-1.935,0.912-2.243,1.677	c-0.082,0.199-0.071,0.989-0.067,1.326L25.5,36.5h-6v-18h6v1.638c0.795-0.823,2.075-1.638,4.238-1.638	c4.233,0,6.761,2.906,6.761,7.774L36.5,36.5H30.5z M11.5,36.5v-18h6v18H11.5z M14.457,17.5c-1.713,0-2.957-1.262-2.957-3.001	c0-1.738,1.268-2.999,3.014-2.999c1.724,0,2.951,1.229,2.986,2.989c0,1.749-1.268,3.011-3.015,3.011H14.457z"
          opacity=".07"
        ></path>
        <path
          fill="#fff"
          d="M12,19h5v17h-5V19z M14.485,17h-0.028C12.965,17,12,15.888,12,14.499C12,13.08,12.995,12,14.514,12	c1.521,0,2.458,1.08,2.486,2.499C17,15.887,16.035,17,14.485,17z M36,36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698	c-1.501,0-2.313,1.012-2.707,1.99C24.957,25.543,25,26.511,25,27v9h-5V19h5v2.616C25.721,20.5,26.85,19,29.738,19	c3.578,0,6.261,2.25,6.261,7.274L36,36L36,36z"
        ></path>
      </svg>
    );
  },
  Discord: function Discord({
    width = 27,
    height = 27,
    className,
  }: {
    width?: number;
    height?: number;
    className?: string;
  }) {
    return (
      <img
        src="/integrations/discord.svg"
        alt="discord"
        width={width}
        height={height}
        className={className}
      />
    );
  },
  Gmail: function Gmail({
    width = 30,
    height = 30,
    className,
  }: {
    width?: number;
    height?: number;
    className?: string;
  }) {
    return (
      <img
        src="/integrations/gmail.svg"
        alt="Logo"
        width={width}
        height={height}
        className={className}
      />
    );
  },
  Trello: function Trello({
    width = 30,
    height = 30,
    className,
  }: {
    width?: number;
    height?: number;
    className?: string;
  }) {
    return (
      <img
        src="/integrations/trello.svg"
        alt="Logo"
        width={width}
        height={height}
        className={className}
      />
    );
  },
  Linear: function Linear({
    width = 30,
    height = 30,
    className,
  }: {
    width?: number;
    height?: number;
    className?: string;
  }) {
    return (
      <img
        src="/integrations/linear.svg"
        alt="Logo"
        width={width}
        height={height}
        className={className}
      />
    );
  },
  Slack: function Slack({
    width = 30,
    height = 30,
    className,
  }: {
    width?: number;
    height?: number;
    className?: string;
  }) {
    return (
      <img
        src="/integrations/slack.svg"
        alt="Logo"
        width={width}
        height={height}
        className={className}
      />
    );
  },
  Notion: function Notion({
    width = 30,
    height = 30,
    className,
  }: {
    width?: number;
    height?: number;
    className?: string;
  }) {
    return (
      <img
        src="/integrations/notion.svg"
        alt="Logo"
        width={width}
        height={height}
        className={className}
      />
    );
  },
};
