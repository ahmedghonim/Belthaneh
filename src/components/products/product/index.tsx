import React from 'react'
import AddProduct from 'svg/add.svg'
import ProductsActions from './actions'
import ProductsCardsHolder from './products-cards'

// dummy data
const productInfo = [
  {
    source: '',
    alt: 'Product Image',
    brand: 'RESISTANCE',
    code: 'ABC-12345',
    quantity: 12,
    description:
      'Purus sed pulvinar netus rhoncus. Et non ut vel nec amet pulvinar quam.'
  },
  {
    source: '',
    alt: 'Product Image',
    brand: 'RESISTANCE',
    code: 'ABC-12345',
    quantity: 12,
    description:
      'Purus sed pulvinar netus rhoncus. Et non ut vel nec amet pulvinar quam.'
  },
  {
    source: '',
    alt: 'Product Image',
    brand: 'RESISTANCE',
    code: 'ABC-12345',
    quantity: 12,
    description:
      'Purus sed pulvinar netus rhoncus. Et non ut vel nec amet pulvinar quam.'
  },
  {
    source: '',
    alt: 'Product Image',
    brand: 'RESISTANCE',
    code: 'ABC-12345',
    quantity: 12,
    description:
      'Purus sed pulvinar netus rhoncus. Et non ut vel nec amet pulvinar quam.'
  }
]

function StoreProducts() {
  return (
    <section>
      <AddProduct className="xs:dark:fill-white fill-primary-100 sm:hidden scale-125" />
      <ProductsActions />
      <ProductsCardsHolder data={productInfo} />
    </section>
  )
}
export default StoreProducts
