import React from 'react'
import { CollapseCard, Text } from 'ui'

interface Props {
  columns: Array<{ Header: string; accessor: string }>
  data: any
  keyOfTitle: string
}

function CollapsedCard({ columns, data, keyOfTitle }: Props) {
  return (
    <div className="sm:hidden space-y-4">
      {data.map((item: any, index: string) => (
        <CollapseCard
          key={index}
          title={<Text as="h4">{item[keyOfTitle]}</Text>}
        >
          <ul>
            {columns.map(
              ({ Header, accessor }) =>
                accessor !== keyOfTitle && (
                  <li
                    key={accessor}
                    className="flex justify-between dark:text-white text-dark-100"
                  >
                    <span>{Header}</span>
                    <span>{item[accessor]}</span>
                  </li>
                )
            )}
          </ul>
        </CollapseCard>
      ))}
    </div>
  )
}

export default CollapsedCard
