import React from 'react'
import AnimatedCircle from './AnimatedCircle'
import { useSteps } from 'mdx-deck'

const COLOR_MAP = {
  red: '#a64d79',
  purple: '#674da7',
  blue: '#3d85c6',
  green: '#44818d',
}

const calcFill = on => on ? 'gainsboro' : '#515151'
const ColLabel = ({ children, x, y, hightlight }) => (
  <text textAnchor="middle" x={x} y={y} fontSize='2rem' fontWeight='bold' fill={calcFill(hightlight)}>{children}</text>
)
const RowLabel = ({ children, x, y, hightlight }) => (
  <text x={x} y={y} fontSize='1.9rem' fontWeight='bold' fill={calcFill(hightlight)}>{children}</text>
)
const Line = ({ selected, color, dashed, ...props }) => (
  <line {...props} strokeDasharray={dashed ? 9 : 0} strokeWidth="10" stroke={COLOR_MAP[color]} strokeOpacity={selectedOpacity(selected, color)} />
)

const ENV_STEPS = [
  [0,1,2,3,3,3,3,3], // Monday
  [0,1,2,2,2,2,2,3], // Tuesday
  [0,1,2,2,2,2,3,3], // Wednesday
  [0,1,1,1,1,2,2,2], // Thursday
]
const DAY_STEPS = [
  [0,1,2,3,3,3,3,3], // Red
  [1,2,3,4,5,6,7,8], // Purple
  [2,3,4,5,6,7,8,8], // Blue
  [3,4,5,6,7,8,8,8], // Green
]

// UI Position Helpers
const TABLE_X_OFFSET=5
const TABLE_Y_OFFSET=5
const HEADER_Y_OFFSET=10
const HEADER_X_OFFSET=8

const CELL_WIDTH = 10;
const CELL_HEIGHT = 25;


const toPerc = num => `${num}%`
const X_AXIS_OFFSET = toPerc(HEADER_X_OFFSET/3)
const Y_AXIS_OFFSET = toPerc(HEADER_Y_OFFSET/2)

const selectedOpacity = (selected, color) => selected === 'none' || selected === color ? 1 : .2

const col = colNum => toPerc(TABLE_Y_OFFSET + HEADER_X_OFFSET + (CELL_WIDTH * colNum))
const row = rowNum => toPerc(TABLE_X_OFFSET + HEADER_Y_OFFSET + (CELL_HEIGHT * rowNum))

// UI State helpers
const COLORS = [
  'red',
  'purple',
  'blue',
  'green',
]
const isActiveEnv = (selectedIndex, step, env) => selectedIndex === -1 || ENV_STEPS[selectedIndex][step] === env
const isDoneIndex = (selectedIndex) => ENV_STEPS[selectedIndex].findIndex((env, index, array) => ENV_STEPS[selectedIndex].slice(index, array.length).every(e => e === env))
const isDone = (step, doneIndex) => step > doneIndex
const clampNumber = (num, a, b) => Math.max(Math.min(num, Math.max(a, b)), Math.min(a, b));

function isActiveDay(selectedIndex, step, day) {
  if (selectedIndex === -1) {
    return true
  }
  const doneIndex = isDoneIndex(selectedIndex)
  const pos = clampNumber(step + selectedIndex, 0, doneIndex + selectedIndex)
  return pos === day
}

export default () => {
  const [selected, setSelected] = React.useState('none')
  const release = COLORS.indexOf(selected)
  const step = useSteps(7);

  return (
    <svg width='100%' height='100%'>
      <g id='columnGroup'>
        <RowLabel hightlight={isActiveEnv(release, step, 0)} x={X_AXIS_OFFSET} y={row(0)}>Branch</RowLabel>
        <RowLabel hightlight={isActiveEnv(release, step, 1)} x={X_AXIS_OFFSET} y={row(1)}>Internal</RowLabel>
        <RowLabel hightlight={isActiveEnv(release, step, 2)} x={X_AXIS_OFFSET} y={row(2)}>Live 1</RowLabel>
        <RowLabel hightlight={isActiveEnv(release, step, 3)} x={X_AXIS_OFFSET} y={row(3)}>Live All</RowLabel>

        <ColLabel hightlight={isActiveDay(release, step, 0)} x={col(0)} y={Y_AXIS_OFFSET}>M</ColLabel>
        <ColLabel hightlight={isActiveDay(release, step, 1)} x={col(1)} y={Y_AXIS_OFFSET}>T</ColLabel>
        <ColLabel hightlight={isActiveDay(release, step, 2)} x={col(2)} y={Y_AXIS_OFFSET}>W</ColLabel>
        <ColLabel hightlight={isActiveDay(release, step, 3)} x={col(3)} y={Y_AXIS_OFFSET}>T</ColLabel>
        <ColLabel hightlight={isActiveDay(release, step, 4)} x={col(4)} y={Y_AXIS_OFFSET}>F</ColLabel>
        <ColLabel hightlight={isActiveDay(release, step, 5)} x={col(5)} y={Y_AXIS_OFFSET}>S</ColLabel>
        <ColLabel hightlight={isActiveDay(release, step, 6)} x={col(6)} y={Y_AXIS_OFFSET}>S</ColLabel>
        <ColLabel hightlight={isActiveDay(release, step, 7)} x={col(7)} y={Y_AXIS_OFFSET}>M</ColLabel>
        <ColLabel hightlight={isActiveDay(release, step, 8)} x={col(8)} y={Y_AXIS_OFFSET}>T</ColLabel>
      </g>
      {/* Red Line */}
      <Line x1={col(0)} y1={row(0)} x2={col(3)} y2={row(3)} color="red" selected={selected} />
      {/* Purple Lines */}
      <Line x1={col(1)} y1={row(0)} x2={col(3)} y2={row(2)} color="purple" selected={selected} />
      <Line x1={col(3)} y1={row(2)} x2={col(7)} y2={row(2)} color="purple" selected={selected} dashed  />
      <Line x1={col(7)} y1={row(2)} x2={col(8)} y2={row(3)} color="purple" selected={selected} />
      {/* Blue Lines */}
      <Line x1={col(2)} y1={row(0)} x2={col(4)} y2={row(2)} color="blue" selected={selected}  />
      <Line x1={col(4)} y1={row(2)} x2={col(7)} y2={row(2)} color="blue" selected={selected} dashed  />
      <Line x1={col(7)} y1={row(2)} x2={col(8)} y2={row(3)} color="blue" selected={selected}  />
      {/* Green Lines */}
      <Line x1={col(3)} y1={row(0)} x2={col(4)} y2={row(1)} color="green" selected={selected}  />
      <Line x1={col(4)} y1={row(1)} x2={col(7)} y2={row(1)} color="green" selected={selected} dashed />
      <Line x1={col(7)} y1={row(1)} x2={col(8)} y2={row(2)} color="green" selected={selected} />
      {/* Animated Dots */}
      <AnimatedCircle
        r="18"
        toggled={selected === 'red'}
        fillOpacity={selectedOpacity(selected, 'red')}
        onClick={() => setSelected(selected => selected !== 'red' ? 'red' : 'none')}
        color="red"
        x={DAY_STEPS[0].map(col)}
        y={ENV_STEPS[0].map(row)}
      />
      <AnimatedCircle
        toggled={selected === 'purple'}
        fillOpacity={selectedOpacity(selected, 'purple')}
        onClick={() => setSelected(selected => selected !== 'purple' ? 'purple' : 'none')}
        r="18"
        color="purple"
        x={DAY_STEPS[1].map(col)}
        y={ENV_STEPS[1].map(row)}
      />
      <AnimatedCircle
        toggled={selected === 'blue'}
        fillOpacity={selectedOpacity(selected, 'blue')}
        onClick={() => setSelected(selected => selected !== 'blue' ? 'blue' : 'none')}
        r="18"
        color="blue"
        x={DAY_STEPS[2].map(col)}
        y={ENV_STEPS[2].map(row)}
      />
      <AnimatedCircle
        toggled={selected === 'green'}
        onClick={() => setSelected(selected => selected !== 'green' ? 'green' : 'none')}
        fillOpacity={selectedOpacity(selected, 'green')}
        r="18"
        color="green" 
        x={DAY_STEPS[3].map(col)}
        y={ENV_STEPS[3].map(row)}
      />
    </svg>
  )
}
