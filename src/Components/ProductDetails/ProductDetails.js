import React from 'react'
import { Image, Row, Col } from 'react-bootstrap';
import { plus } from '../../assets'
import { ShadesCarousel } from '../ShadesCarousel'
import { ModesList } from '../ModesList'
import { IntensitySlider } from '../IntensitySlider'
import './style.css'

class ProductDetails extends React.PureComponent {

    constructor(props) {
        super(props)
        this.state = {
            isEnable: false
        }
    }

    handleToggle = () => {
        this.setState({
            isEnable: !this.state.isEnable
        })
    }

    renderSectionTitleView = (label) => {
        return (
            <Row className="section-title">
                <span>{label}</span>
            </Row>
        )
    }
    render() {
        const status = this.state.isEnable ? 'active' : ''
        return (
            <div className="content">
                <Row className="header-wrapper">
                    <Col className="col col-8"><span className="header"> Devices </span></Col>
                    <Col className="col col-4 plus-icon-wrapper"><Image src={plus} className="plus-icon"/></Col>
                </Row>
                <Row className="product-title-wrapper">
                    <Col className="product-title col-lg-8"><span>Bed Lamp</span></Col>
                    <Col className={"toggle " + status} onClick={this.handleToggle}>
                        <div className="toggle-outer">
                            <div className="toggle-inner"></div>
                        </div>
                    </Col>
                </Row>
                {this.renderSectionTitleView('Shades')}
                <Row>
                    <ShadesCarousel />
                </Row>
                {this.renderSectionTitleView('Mode')}
                <Row>
                    <ModesList />
                </Row>
                {this.renderSectionTitleView('Intensity')}
                <Row>
                    <IntensitySlider />
                </Row>
            </div>
        )
    }
}

export default ProductDetails
export { ProductDetails }