import React from 'react';

const COLOR_MAP = {
  red: '#a64d79',
  purple: '#674da7',
  blue: '#3d85c6',
  green: '#44818d',
}

export default React.forwardRef(({ color = 'red', x = '50%', y = '50%', r = '50', fillOpacity=1, toggled=false, onClick=()=>{} }, ref) => {
    const myRef = React.useRef();
  React.useImperativeHandle(ref, () => ({}));
  const strokeProps = toggled
    ? {
        stroke: COLOR_MAP[color],
        strokeWidth: '13',
        strokeOpacity: '.5',
      }
    : {};
  return (
      <circle
        ref={myRef}
        onClick={onClick}
        cx={x}
        cy={y}
        r={r}
        fill={COLOR_MAP[color]}
        fillOpacity={fillOpacity}
        {...strokeProps}
      />
  );
});
