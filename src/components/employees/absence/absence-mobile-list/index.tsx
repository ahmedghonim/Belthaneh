import React from 'react'
import { AbsenceItemDataProps } from '../absence-table'
import AbsenceBox from '../absence-mobile-card'

function AbsenceMobileList({ data }: { data: AbsenceItemDataProps[] }) {
  return (
    <div className="sm:hidden flex flex-col gap-5">
      {data.map((box) => {
        return <AbsenceBox key={box.date} {...box} />
      })}
    </div>
  )
}
export default AbsenceMobileList
