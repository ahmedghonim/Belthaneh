import React from 'react'
import CommissionDetailsWebView from './web-view'
import CommissionDetailsMobileView from './mobile-view'

function CommissionDetails() {
  return (
    <div>
      <CommissionDetailsWebView />
      <CommissionDetailsMobileView />
    </div>
  )
}

export default CommissionDetails
