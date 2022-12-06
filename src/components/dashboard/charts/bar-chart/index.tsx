import React from 'react'
import {
  BarChart as BarCh,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Brush
} from 'recharts'
const data = [
  {
    name: 'Jan',
    uv: 800
  },
  {
    name: 'Feb',
    uv: 300
  },
  {
    name: 'Mar',
    uv: 200
  },
  {
    name: 'Apr',
    uv: 280
  },
  {
    name: 'May',
    uv: 190
  },
  {
    name: 'Jun',
    uv: 290
  },
  {
    name: 'Jul',
    uv: 390
  },
  {
    name: 'Aug',
    uv: 400
  },
  {
    name: 'Sep',
    uv: 190
  },
  {
    name: 'Oct',
    uv: 190
  },
  {
    name: 'Nov',
    uv: 190
  },
  {
    name: 'Dec',
    uv: 190
  }
]
const BarChart = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarCh
        style={{ direction: 'ltr' }}
        data={data}
        margin={{
          top: 20
        }}
        barSize={15}
      >
        <CartesianGrid strokeDasharray="3 0" />
        <XAxis dataKey="name" />
        <YAxis />
        <Brush dataKey="name" height={30} stroke="#F97E4E" />
        <Bar dataKey="uv" fill="#3031D9" />
      </BarCh>
    </ResponsiveContainer>
  )
}

export default BarChart
