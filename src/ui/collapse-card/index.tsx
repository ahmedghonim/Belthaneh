import React from 'react'

interface Props {
  title: React.ReactNode
  children: React.ReactNode
}

const CollapseCard = ({ title, children }: Props) => {
  return (
    <div className="collapse collapse-arrow rounded-box bg-white dark:bg-dark-200">
      <input type="checkbox" className="peer" />
      <div className="collapse-title dark:bg-dark-200 bg-dark-500 text-white ">
        {title}
      </div>
      <div className="collapse-content dark:bg-dark-100">{children}</div>
    </div>
  )
}

export default CollapseCard
