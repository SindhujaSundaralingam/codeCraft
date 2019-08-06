import React from 'react'
import { ProductCard } from '../ProductCard';
import './style.css'

class SideBar extends React.PureComponent {
    render() {
        return (
                <aside className="menu left design1">
                    <div class="overlay"></div>
                    <nav class="nav">
                        <ProductCard />
                    </nav>
                </aside>
        )
    }
}

export default SideBar
export { SideBar }