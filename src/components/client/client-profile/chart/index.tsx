import React from 'react'
import { WavyChart } from 'ui'
import { ChartPrpos } from 'components/client/client-profile/types'

function ClientChart({ data, xAxisTicksCount }: ChartPrpos) {
  return <WavyChart data={data} xAxisTicksCount={xAxisTicksCount} />
}

export default ClientChart
