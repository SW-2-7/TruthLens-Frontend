import * as React from "react";
import type { SVGProps } from "react";
const SvgIcDropzone = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 72 73"
    {...props}
  >
    <g clipPath="url(#ic_dropzone_svg__a)">
      <rect width={72} height={73} fill="#F2F3F6" rx={10} />
      <circle cx={21.5} cy={23.5} r={7.5} fill="#A9ABC0" />
      <rect
        width={53.25}
        height={53.25}
        x={15.153}
        y={42.5}
        fill="#C4C6D4"
        rx={6}
        transform="rotate(45 15.153 42.5)"
      />
      <rect
        width={69}
        height={69}
        x={42}
        y={30.5}
        fill="#A9ABC0"
        rx={7.5}
        transform="rotate(30 42 30.5)"
      />
    </g>
    <defs>
      <clipPath id="ic_dropzone_svg__a">
        <rect width={72} height={73} fill="#fff" rx={10} />
      </clipPath>
    </defs>
  </svg>
);
export default SvgIcDropzone;
