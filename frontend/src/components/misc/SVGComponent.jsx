import * as React from "react";
const SVGComponent = (props) => (
  <svg
    width="50px"
    height="108px"
    viewBox="-2.96 0 19.945 19.945"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="tree" transform="translate(-4.992 -2.055)">
      <path
        id="secondary"
        fill="#2ca9bc"
        d="M16.74,12.17A3.66,3.66,0,0,1,17,13.5,3.5,3.5,0,0,1,13.5,17a3.45,3.45,0,0,1-1.5-.35,3.45,3.45,0,0,1-1.5.35A3.5,3.5,0,0,1,7,13.5a3.66,3.66,0,0,1,.26-1.33,3.48,3.48,0,0,1,.81-5.86,4,4,0,0,1,7.86,0,3.48,3.48,0,0,1,.81,5.86Z"
      />
      <path
        id="primary"
        d="M16.74,12.17A3.66,3.66,0,0,1,17,13.5,3.5,3.5,0,0,1,13.5,17a3.45,3.45,0,0,1-1.5-.35,3.45,3.45,0,0,1-1.5.35A3.5,3.5,0,0,1,7,13.5a3.66,3.66,0,0,1,.26-1.33,3.48,3.48,0,0,1,.81-5.86,4,4,0,0,1,7.86,0,3.48,3.48,0,0,1,.81,5.86ZM12,21V11"
        fill="none"
        stroke="#000000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      />
    </g>
  </svg>
);
export default SVGComponent;