import React from "react";

const PlayIcon = () => (
  <svg
    width="34"
    height="37"
    viewBox="0 0 34 37"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_d_3_49)">
      <path
        d="M25 18.5L9.25 27.5933L9.25 9.40673L25 18.5Z"
        fill="url(#paint0_linear_3_49)"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_3_49"
        x="0.25"
        y="0.406738"
        width="33.75"
        height="36.1865"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset />
        <feGaussianBlur stdDeviation="4.5" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 1 0 0 0 0 0.6 0 0 0 0 0 0 0 0 0.73 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_3_49"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_3_49"
          result="shape"
        />
      </filter>
      <linearGradient
        id="paint0_linear_3_49"
        x1="9.5"
        y1="11"
        x2="31"
        y2="18.5"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF5C00" />
        <stop offset="0.337399" stopColor="#FF9900" />
        <stop offset="1" stopColor="#E3B308" />
      </linearGradient>
    </defs>
  </svg>
);

export { PlayIcon };
