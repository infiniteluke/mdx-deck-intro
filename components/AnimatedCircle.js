import React from 'react';
import { useSteps } from 'mdx-deck';
import { useSpring, animated } from 'react-spring';
import Circle from './Circle';

const AnimatedCircle = animated(Circle);

export default ({ color, r, x = ['50%', '75%'], y = ['50%', '75%'] }) => {
  const step = useSteps(x.length - 1);
  const props = useSpring({ x: x[step], y: y[step] });
  return <AnimatedCircle x={props.x} y={props.y} color={color} r={r} />;
};
