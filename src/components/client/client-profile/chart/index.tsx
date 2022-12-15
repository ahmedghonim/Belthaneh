import React from 'react'
import ToolTipFC from './tool-tip'
import {
  AreaChart,
  Area,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer
} from 'recharts'

// chart data
const data = [
  {
    name: 'Jan',
    uv: 0
  },
  {
    name: 'Feb',
    uv: 40
  },
  {
    name: 'Mar',
    uv: 30
  },
  {
    name: 'Apr',
    uv: 50
  },
  {
    name: 'May',
    uv: 40
  },
  {
    name: 'Jun',
    uv: 60
  },
  {
    name: 'Jul',
    uv: 45
  }
]

function Chart() {
  return (
    <ResponsiveContainer
      width="100%"
      height="100%"
      className="dark:bg-dark-200"
    >
      <AreaChart data={data}>
        <Tooltip content={<ToolTipFC active={false} payload={undefined} />} />
        <Area
          type="monotone"
          dataKey="uv"
          stroke="#3031D9"
          fill="url(#color)"
          strokeWidth={2}
        />
        <defs>
          <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#F97E4E" stopOpacity="1" />
            <stop offset="90%" stopColor="#F97E4E" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        <XAxis dataKey="name" axisLine={false} tickLine={false} tickCount={7} />
        <YAxis dataKey="uv" tick={false} axisLine={false} />
      </AreaChart>
    </ResponsiveContainer>
  )
}

export default Chart
