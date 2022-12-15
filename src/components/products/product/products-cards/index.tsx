import React from 'react'
import Image from 'next/image'
import useTranslation from 'next-translate/useTranslation'
import RoundedBox from 'ui/rounded-box'
import Card, { CardDataProps } from './card'

type Product = CardDataProps & {
  source: string
}

interface CardsProps {
  data: Product[]
}

function ProductsCardsHolder({ data }: CardsProps) {
  const { t } = useTranslation('common')
  return (
    <section className=" grid sm:grid-cols-4 gap-4 mt-10">
      {data.map(({ source, ...data }) => {
        return (
          <RoundedBox key={data.code} className="xs:flex overflow-hidden">
            <div className="xs:h-auto xs:w-48 h-48 xs:flex items-center">
              <Image
                width="100"
                height="100"
                src={source}
                alt={t('product_image')}
                className="w-full xs:h-3/4 h-full xs:rounded-md"
              />
            </div>
            <Card {...data} />
          </RoundedBox>
        )
      })}
    </section>
  )
}

export default ProductsCardsHolder
