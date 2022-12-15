import React from 'react'
import { ChartToolTipType } from 'components/client/client-profile/types'

function ToolTipFC({ active, payload }: ChartToolTipType) {
  return (
    <>
      {active ? (
        <div className="flex justify-center items-center dark:bg-white bg-[#FFF7F5] py-2 px-4 rounded-md">
          <p className="text-secondary-100 font-bold">${payload[0].value}</p>
        </div>
      ) : (
        ''
      )}
    </>
  )
}

export default ToolTipFC
