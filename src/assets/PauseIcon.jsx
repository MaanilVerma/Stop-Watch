import React from "react";

const PauseIcon = () => (
  <svg
    width="18"
    height="26"
    viewBox="0 0 18 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_d_308_20)">
      <rect
        x="4"
        width="1.42857"
        height="18"
        fill="url(#paint0_linear_308_20)"
      />
    </g>
    <g filter="url(#filter1_d_308_20)">
      <rect
        x="12.5714"
        width="1.42857"
        height="18"
        fill="url(#paint1_linear_308_20)"
      />
    </g>

    <defs>
      <filter
        id="filter0_d_308_20"
        x="0"
        y="0"
        width="9.42859"
        height="26"
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
        <feOffset dy="4" />
        <feGaussianBlur stdDeviation="2" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_308_20"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_308_20"
          result="shape"
        />
      </filter>
      <filter
        id="filter1_d_308_20"
        x="8.57141"
        y="0"
        width="9.42859"
        height="26"
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
        <feOffset dy="4" />
        <feGaussianBlur stdDeviation="2" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_308_20"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_308_20"
          result="shape"
        />
      </filter>
      <linearGradient
        id="paint0_linear_308_20"
        x1="4.71429"
        y1="0"
        x2="4.71429"
        y2="18"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF5C00" />
        <stop offset="0.546875" stopColor="#FF9900" />
        <stop offset="0.984375" stopColor="#E3B308" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_308_20"
        x1="13.2857"
        y1="0"
        x2="13.2857"
        y2="18"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF5C00" />
        <stop offset="0.546875" stopColor="#FF9900" />
        <stop offset="0.984375" stopColor="#E3B308" />
      </linearGradient>
    </defs>
  </svg>
);

export { PauseIcon };
