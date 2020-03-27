import React from 'react';
import { useSteps } from 'mdx-deck';
import { useSpring, animated } from 'react-spring';
import Circle from './Circle';

const AnimatedCircle = animated(Circle);

export default React.forwardRef(
  (
    {
      color,
      r,
      x = ['50%', '75%'],
      y = ['50%', '75%'],
      onClick,
      toggled,
      fillOpacity,
      ...rest
    },
    ref
  ) => {
    const step = useSteps(x.length - 1);
    const props = useSpring({ x: x[step], y: y[step] });
    console.log(rest)
    return (
      <AnimatedCircle
        {...rest}
        ref={ref}
        x={props.x}
        y={props.y}
        color={color}
        r={r}
        onClick={onClick}
        toggled={toggled}
        fillOpacity={fillOpacity}
      />
    );
  }
);
