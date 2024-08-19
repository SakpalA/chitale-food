import React from 'react'
import ProductProvider from './ProductProvider'
import ShopProvider from './ShopProvider'

const AppProvider = ({children}) => {
  return (
    <ProductProvider>
        <ShopProvider>
            {children}
        </ShopProvider>
    </ProductProvider>
  )
}

export default AppProvider;