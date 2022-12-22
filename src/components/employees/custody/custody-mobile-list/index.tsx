import React from 'react'
import { CustodySingleObjectType } from '../table'
import CustodyMobileViewBox from '../custody-mobile-card'

function CustodyMobileView({ data }: { data: CustodySingleObjectType[] }) {
  return (
    <div className="sm:hidden flex flex-col gap-5">
      {data.map((box) => {
        return <CustodyMobileViewBox key={box.custody} {...box} />
      })}
    </div>
  )
}

export default CustodyMobileView
