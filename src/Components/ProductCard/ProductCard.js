import React from 'react'
import { Image } from 'react-bootstrap'
import { observer } from 'mobx-react'
import { state } from './state'

class ProductCardView extends React.PureComponent {

    toggelCard = (name) => {
        state.productList.forEach((product) => {
            if(product.name === name) {
                product.selected = true
            } else {
                product.selected = false
            }
        })
    }
    renderProductCards = (product) => {
        const { name, category, image, selected } = product
        const classNameValue = selected ? 'active' : ''
        return (
            <li class={"item "+classNameValue} onClick={() => this.toggelCard(name)}>

                <figure class="menu-img bg bg-violet">
                    <Image src={image} alt="" />
                </figure>

                <div class="label-wrap">
                    <label> {name} </label>
                    <span> {category} </span>
                </div>

                <div class="arrow"> > </div>

            </li>
        )
    }
    render() {
        const productCardList = state.productList.map(this.renderProductCards)
        return (
           <> {productCardList} </>
        )
    }
}

const ProductCard = observer(ProductCardView)

export default ProductCard
export { ProductCard }