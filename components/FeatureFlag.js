import React from 'react';
import { animated } from 'react-spring';

export default ({ style, color = 'black' }) => (
  <animated.svg
    style={style}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    version="1.1"
    x="0px"
    y="0px"
    viewBox="2 0 30 30"
    xmlSpace="preserve"
  >
    <g>
      <g>
        <path
          fill={color}
          d="M24.6,15.6H8.1c-0.6,0-1-0.4-1-1V4c0-0.6,0.4-1,1-1h16.5c0.4,0,0.7,0.2,0.9,0.5c0.2,0.3,0.2,0.7-0.1,1l-3.2,4.8l3.2,4.8    c0.2,0.3,0.2,0.7,0.1,1C25.4,15.4,25,15.6,24.6,15.6z M9.1,13.6h13.6l-2.6-3.8c-0.2-0.3-0.2-0.8,0-1.1L22.8,5H9.1V13.6z"
        />
      </g>
      <g>
        <path
          fill="#35aa4e"
          d="M13.7,12.3c-0.3,0-0.5-0.1-0.7-0.3L11,10c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.2,1.2l3.2-3.2c0.4-0.4,1-0.4,1.4,0    s0.4,1,0,1.4L14.4,12C14.2,12.2,13.9,12.3,13.7,12.3z"
        />
      </g>
      <g>
        <path
          fill={color}
          d="M8.1,27c-0.6,0-1-0.4-1-1V4c0-0.6,0.4-1,1-1s1,0.4,1,1v22C9.1,26.6,8.7,27,8.1,27z"
        />
      </g>
      <g>
        <path
          fill={color}
          d="M10.9,27H5.4c-0.6,0-1-0.4-1-1s0.4-1,1-1h5.5c0.6,0,1,0.4,1,1S11.4,27,10.9,27z"
        />
      </g>
    </g>
  </animated.svg>
);
