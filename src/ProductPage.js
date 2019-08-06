import React from 'react'
import { SideBar, ProductDetails } from './Components'

class ProductPage extends React.PureComponent {
    render() {
        return (
            <>
            <SideBar />
            <ProductDetails />
            </>
        )
    }
}

export default ProductPage
export { ProductPage }