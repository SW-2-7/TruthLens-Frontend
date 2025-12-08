import * as React from "react";
import type { SVGProps } from "react";
const SvgIcSpinner = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 100 100"
    {...props}
  >
    <path
      fill="#ACC0FF"
      fillOpacity={0.4}
      d="M100 50c0 27.614-22.386 50-50 50S0 77.614 0 50 22.386 0 50 0s50 22.386 50 50m-85.25 0c0 19.468 15.782 35.25 35.25 35.25S85.25 69.467 85.25 50 69.467 14.75 50 14.75 14.75 30.533 14.75 50"
    />
    <path
      fill="#6553FF"
      d="M92.625 50c4.073 0 7.431-3.32 6.832-7.348A50 50 0 0 0 57.348.542C53.32-.055 50 3.303 50 7.376s3.337 7.298 7.321 8.144A35.26 35.26 0 0 1 82.567 36.51a35.3 35.3 0 0 1 1.914 6.169c.846 3.984 4.07 7.321 8.144 7.321"
    />
  </svg>
);
export default SvgIcSpinner;
