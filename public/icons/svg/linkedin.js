import React from 'react';
import SvgIcon from '@mui/material/SvgIcon';

const LinkedInIcon = (props) => (
  <SvgIcon {...props} viewBox="0 0 30 30">
    <defs>
      <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#C630C9', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#339DDC', stopOpacity: 1 }} />
      </linearGradient>
      {/* Define SVG filter for shadow */}
      <filter id="shadow" x="0" y="0" width="150%" height="150%">
        <feDropShadow
          dx="4.5"
          dy="5"
          stdDeviation="1"
          floodColor="rgba(0, 0, 0, 1)"
        />
      </filter>
    </defs>
    <path
      fill="url(#grad1)"
      filter="url(#shadow)" // Apply the shadow filter here
      d="M9,25H4V10h5V25z M6.501,8C5.118,8,4,6.879,4,5.499S5.12,3,6.501,3C7.879,3,9,4.121,9,5.499C9,6.879,7.879,8,6.501,8z M27,25h-4.807v-7.3c0-1.741-0.033-3.98-2.499-3.98c-2.503,0-2.888,1.896-2.888,3.854V25H12V9.989h4.614v2.051h0.065 c0.642-1.18,2.211-2.424,4.551-2.424c4.87,0,5.77,3.109,5.77,7.151C27,16.767,27,25,27,25z"
    />
  </SvgIcon>
);

export default LinkedInIcon;
