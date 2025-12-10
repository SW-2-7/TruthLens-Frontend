import * as React from "react";
import type { SVGProps } from "react";
const SvgIcQuestion = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 90 90"
    {...props}
  >
    <path
      stroke="#A66908"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={6}
      d="M45 77.5c17.95 0 32.5-14.55 32.5-32.5S62.95 12.5 45 12.5 12.5 27.05 12.5 45 27.05 77.5 45 77.5"
    />
    <path
      stroke="#A66908"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={6}
      d="M37.5 35c0-5.5 4.5-8.75 10-8.75 5 0 8.75 3.25 8.75 7.5 0 4-2.5 6.125-5.75 7.75-2.625 1.375-4.25 2.625-4.25 6"
    />
    <path
      fill="#A66908"
      d="M45 67.25a4.75 4.75 0 1 0 0-9.5 4.75 4.75 0 0 0 0 9.5"
    />
  </svg>
);
export default SvgIcQuestion;
