import * as React from "react";
import type { SVGProps } from "react";
const SvgIcGrayWarning = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 32 32"
    {...props}
  >
    <path
      stroke="#7F82A1"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M2.892 24.799 14.112 5.86c.62-1.047.93-1.57 1.334-1.746a1.4 1.4 0 0 1 1.108 0c.405.176.715.7 1.335 1.746l11.22 18.938c.621 1.05.932 1.575.886 2.006-.04.376-.241.718-.554.94-.359.255-.98.255-2.222.255H4.781c-1.242 0-1.863 0-2.222-.255a1.33 1.33 0 0 1-.555-.94c-.046-.43.266-.956.888-2.006"
    />
    <path
      fill="#7F82A1"
      d="M15.91 11.338c.737 0 1.334.597 1.334 1.333v5.331a1.333 1.333 0 0 1-2.666 0v-5.33c0-.737.597-1.334 1.333-1.334M14.578 23.334c0-.736.597-1.333 1.333-1.333h.013a1.333 1.333 0 0 1 0 2.665h-.013a1.333 1.333 0 0 1-1.333-1.332"
    />
  </svg>
);
export default SvgIcGrayWarning;
