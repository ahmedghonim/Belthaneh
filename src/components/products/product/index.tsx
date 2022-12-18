import React from 'react'
import { useRouter } from 'next/router'
import { Button } from 'ui'
import AddProduct from 'svg/add.svg'
import ProductsActions from './actions'
import ProductsCardsHolder from './products-cards'

// dummy data
const productInfo = [
  {
    source: 'https://placeimg.com/192/192/people',
    alt: 'Product Image',
    brand: 'RESISTANCE',
    code: 'ABC-12345',
    quantity: 12,
    description:
      'Purus sed pulvinar netus rhoncus. Et non ut vel nec amet pulvinar quam.'
  },
  {
    source: 'https://placeimg.com/192/192/people',
    alt: 'Product Image',
    brand: 'RESISTANCE',
    code: 'ABC-12345',
    quantity: 12,
    description:
      'Purus sed pulvinar netus rhoncus. Et non ut vel nec amet pulvinar quam.'
  },
  {
    source: 'https://placeimg.com/192/192/people',
    alt: 'Product Image',
    brand: 'RESISTANCE',
    code: 'ABC-12345',
    quantity: 12,
    description:
      'Purus sed pulvinar netus rhoncus. Et non ut vel nec amet pulvinar quam.'
  },
  {
    source: 'https://placeimg.com/192/192/people',
    alt: 'Product Image',
    brand: 'RESISTANCE',
    code: 'ABC-12345',
    quantity: 12,
    description:
      'Purus sed pulvinar netus rhoncus. Et non ut vel nec amet pulvinar quam.'
  }
]

function StoreProducts() {
  const { push } = useRouter()

  const addProductButton = () => {
    void push('/admin/products/add-product')
  }

  return (
    <section>
      <Button
        onClick={addProductButton}
        className="sm:hidden xs:!bg-transparent"
        primary
      >
        <AddProduct className="xs:dark:fill-white fill-primary-100  scale-125" />
      </Button>
      <ProductsActions addProductFun={addProductButton} />
      <ProductsCardsHolder data={productInfo} />
    </section>
  )
}
export default StoreProducts
