import * as React from "react";
import type { SVGProps } from "react";
const SvgIcCheck = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 90 90"
    {...props}
  >
    <g clipPath="url(#ic_check_svg__a)">
      <path
        fill="#2E7D32"
        d="M45 7.5C24.3 7.5 7.5 24.3 7.5 45S24.3 82.5 45 82.5 82.5 65.7 82.5 45 65.7 7.5 45 7.5M45 75c-16.537 0-30-13.462-30-30 0-16.537 13.462-30 30-30s30 13.462 30 30-13.462 30-30 30m17.213-46.575L37.5 53.138l-9.712-9.675L22.5 48.75l15 15 30-30z"
      />
    </g>
    <defs>
      <clipPath id="ic_check_svg__a">
        <path fill="#fff" d="M0 0h90v90H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgIcCheck;
