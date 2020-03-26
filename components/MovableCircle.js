import React from 'react';
import { useSteps } from 'mdx-deck';
import Circle from './Circle';

export default ({ color, x = ['50%', '75%'], y = ['50%', '75%'] }) => {
  const step = useSteps(x.length - 1);
  return <Circle x={x[step]} y={y[step]} r="50" color={color} />;
};
