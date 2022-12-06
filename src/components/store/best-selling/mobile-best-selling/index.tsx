import React from 'react'
import BestSellingBox from './box'
import { BestSellingType } from 'components/store'

interface Props {
  data: BestSellingType[]
}

function BestSellingBoxs({ data }: Props) {
  return (
    <section className="sm:hidden flex flex-col gap-5">
      {data.map((box, index) => {
        return (
          <React.Fragment key={index}>
            <BestSellingBox {...box} />
          </React.Fragment>
        )
      })}
    </section>
  )
}
export default BestSellingBoxs
