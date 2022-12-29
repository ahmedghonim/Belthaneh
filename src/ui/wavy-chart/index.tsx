import React from 'react'
import ToolTipFC from './tooltip'
import {
  AreaChart,
  Area,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer
} from 'recharts'

interface Data {
  key: string
  value: string | number
}

interface Props {
  data: Data[] | any
  xAxisTicksCount?: number
  className?: string
}

function Chart({ data, xAxisTicksCount, className = '' }: Props) {
  return (
    <ResponsiveContainer
      width="100%"
      height="100%"
      className={`dark:bg-dark-200 ${className}`}
    >
      <AreaChart
        data={data}
        style={{ direction: 'ltr' }}
        margin={{
          top: 20,
          right: 40
        }}
      >
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
        <XAxis
          dataKey="name"
          axisLine={false}
          tickLine={false}
          tickCount={xAxisTicksCount}
        />
        <YAxis dataKey="uv" tick={false} axisLine={false} />
      </AreaChart>
    </ResponsiveContainer>
  )
}

export default Chart
