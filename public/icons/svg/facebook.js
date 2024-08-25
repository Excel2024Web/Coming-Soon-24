import React from 'react';
import SvgIcon from '@mui/material/SvgIcon';

const FacebookIcon = (props) => (
  <SvgIcon {...props} viewBox="0 0 30 30" className="icon-shadow">
    <defs>
      <linearGradient id="gradFacebook" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#339DDC', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#C630C9', stopOpacity: 1 }} />
      </linearGradient>
      <filter id="shadow" x="0" y="0" width="150%" height="150%">
        <feDropShadow
          dx="4.5"
          dy="5"
          stdDeviation="1.5"
          floodColor="rgba(0, 0, 0,1)"
        />
      </filter>
    </defs>
    <path
      fill="url(#gradFacebook)"
      filter="url(#shadow)" 
      d="M19.5,2H10.5C9.1,2,8,3.1,8,4.5v21c0,1.4,1.1,2.5,2.5,2.5h9c1.4,0,2.5-1.1,2.5-2.5V4.5C22,3.1,20.9,2,19.5,2z M19,22h-4.5v-6.5h2.6l0.4-3h-3V11c0-0.9,0.2-1.6,1.7-1.6h1.8v-3h-2.6c-2.7,0-4.6,1.5-4.6,4.5v2.5h-3v3h3v6.5H19V22z"
    />
  </SvgIcon>
);

export default FacebookIcon;
