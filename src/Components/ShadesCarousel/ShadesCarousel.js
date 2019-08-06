import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import { observer } from 'mobx-react'
import { TickIcon } from '../../assets'
import { state } from './state'
import './style.scss'

class ShadesCarouselView extends React.PureComponent {

    toggleCheck = (shade) => {
        state.shades.forEach((list) => {
            if(list.shade === shade) {
                list.checked = !list.checked
            }
        })
    }
    renderShades = (item) => {
        const { shade, checked } = item
        const classNameValue = checked ? 'checked' : ''
        return (
            <Col onClick={() => this.toggleCheck(shade)} className="shades col-2">
                <div className={"checkbox " + shade + " " + classNameValue}><Image src={TickIcon} /></div>
            </Col>
        )
    }
    render() {
        const { shades } = state
        const shadesView = shades.map(this.renderShades)
        return (
                <Container>
                    <Row className="shades-wrapper">  
                        {shadesView}
                    </Row>
                </Container>
        )
    }
}

const ShadesCarousel = observer(ShadesCarouselView)

export default ShadesCarousel
export { ShadesCarousel }