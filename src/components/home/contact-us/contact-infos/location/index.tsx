import React from 'react'

function Address({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col">
      {children}
      <address>
        <span className="text-black text-lg font-bold">
          Saudi Ariba , Riyadh Riyadh
        </span>
      </address>
    </div>
  )
}

export default Address
