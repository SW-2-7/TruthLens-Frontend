import * as React from "react";
import type { SVGProps } from "react";
const SvgIcArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 48 48"
    {...props}
  >
    <path
      stroke="#7F82A1"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={4}
      d="M36 18 24 30 12 18"
    />
  </svg>
);
export default SvgIcArrow;
