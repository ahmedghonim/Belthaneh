import {
  LineChart as Chart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  CartesianGrid,
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

const LineChart = () => (
  <ResponsiveContainer width="100%" height="100%">
    <Chart
      style={{ direction: 'ltr' }}
      data={data}
      margin={{
        top: 20
      }}
      barSize={20}
    >
      <XAxis dataKey="name" scale="point" />
      <YAxis />
      <Brush dataKey="name" height={30} stroke="#F97E4E" />
      <Line
        type="monotone"
        dataKey="uv"
        strokeWidth={5}
        stroke="#3031D9"
        dot
        color="red"
      />
      <CartesianGrid strokeDasharray="1 0" />
    </Chart>
  </ResponsiveContainer>
)

export default LineChart
