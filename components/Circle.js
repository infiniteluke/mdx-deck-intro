import React from 'react';

export default ({ color = 'white', x = '50%', y = '50%', r = '50' }) => {
  const [toggle, setToggle] = React.useState(false);
  const strokeProps = toggle
    ? {
        stroke: color,
        strokeWidth: '10',
        strokeOpacity: '.5',
      }
    : {};
  return (
    <circle
      onClick={() => setToggle(t => !t)}
      cx={x}
      cy={y}
      r={r}
      fill={color}
      {...strokeProps}
    />
  );
};
