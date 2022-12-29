import React from 'react'

function ContactDetails({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col">
      {children}
      <a className="text-black text-lg font-bold" href="tel:0550558253">
        0550558253
      </a>
      <a
        className="text-black text-lg font-bold uppercase"
        href="mailto:blthanih@example.com"
      >
        blthanih@example.com
      </a>
    </div>
  )
}

export default ContactDetails
