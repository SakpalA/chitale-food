import React, { useContext } from 'react'
import GridView from './GridView'
import { ProductContext } from '../../Services/Context/ProductProvider'
import ListView from './ListView'

const ProductList = () => {
  const { isGridView } = useContext(ProductContext)
  return (
    <>
      {isGridView ? <GridView /> : <ListView />}
    </>
  )
}

export default ProductList