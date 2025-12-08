import * as React from "react";
import type { SVGProps } from "react";
const SvgIcUpload = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 100 100"
    {...props}
  >
    <g clipPath="url(#ic_upload_svg__a)">
      <path
        fill="#6553FF"
        d="M37.5 66.667h25v-25h16.667L50 12.5 20.833 41.667H37.5zM50 24.292l9.042 9.041h-4.875v25h-8.334v-25h-4.875zM20.833 75h58.334v8.333H20.833z"
      />
    </g>
    <defs>
      <clipPath id="ic_upload_svg__a">
        <path fill="#fff" d="M0 0h100v100H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgIcUpload;
