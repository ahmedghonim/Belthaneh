import React, { useState } from 'react'
import SalonServices from './services'
import SalonPackages from './packages'
import SalonMemberShips from './memberships'
import { CatalogPropsType } from 'components/salon-online/type'

function Catalog({ services }: CatalogPropsType) {
  const [activeTab, setActiveTab] = useState<string>('services')
  return (
    <section className="flex flex-col gap-8 sm:pb-32 pb-20">
      <div className="sm:w-[65%] w-full flex xs:gap-6 justify-between m-auto">
        <button
          className={`sm:text-lg text-base  font-bold pb-1 border-2 border-transparent ease-in duration-100 ${
            activeTab === 'services'
              ? 'text-primary-100  border-b-primary-100'
              : 'text-dark-100'
          }`}
          onClick={() => setActiveTab('services')}
        >
          Services
        </button>
        <button
          className={`sm:text-lg text-base  font-bold pb-1 border-2 border-transparent ease-in duration-100  ${
            activeTab === 'packages'
              ? 'text-primary-100  border-b-primary-100'
              : 'text-dark-100'
          }`}
          onClick={() => setActiveTab('packages')}
        >
          Packages
        </button>
        <button
          className={`sm:text-lg text-base font-bold pb-1 border-b-2 border-transparent ease-in duration-100 ${
            activeTab === 'memberships'
              ? 'text-primary-100  border-b-primary-100'
              : 'text-dark-100'
          }`}
          onClick={() => setActiveTab('memberships')}
        >
          Memberships
        </button>
      </div>
      <div>
        {activeTab === 'services' ? (
          <SalonServices services={services} />
        ) : activeTab === 'packages' ? (
          <SalonPackages />
        ) : (
          <SalonMemberShips />
        )}
      </div>
    </section>
  )
}

export default Catalog
