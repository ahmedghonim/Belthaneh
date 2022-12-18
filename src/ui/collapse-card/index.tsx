import React from 'react'

interface Props {
  title: React.ReactNode
  children: React.ReactNode
  classNameWrapper?: string
  className?: string
}

const CollapseCard = ({
  title,
  children,
  className = '',
  classNameWrapper = ''
}: Props) => {
  return (
    <div
      className={`collapse collapse-arrow rounded-box bg-white dark:bg-dark-200 ${className}`}
    >
      <input type="checkbox" className="peer" />
      <div className="collapse-title dark:bg-dark-200 bg-white dark:text-white text-dark-100">
        {title}
      </div>
      <div className={`collapse-content dark:bg-dark-100 ${classNameWrapper}`}>
        {children}
      </div>
    </div>
  )
}

export default CollapseCard
