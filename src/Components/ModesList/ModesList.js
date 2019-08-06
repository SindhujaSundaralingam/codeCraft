import React from 'react'
import { Image, Container, Row, Col } from 'react-bootstrap'
import { observer } from 'mobx-react'
import {
    TickIcon,
    TickGreyIcon
} from '../../assets'
import { state } from './state'
import './style.css'

class ModesListView extends React.PureComponent {
    toggleCard = (mode) => {
        state.modeList.forEach((item) => {
            if(item.mode === mode) {
                item.active = true
            } else {
                item.active = false
            }
        })
    }
    renderModeList = (item) => {
        const { icon, mode, percentage, active } = item
        const status = active ? 'active' : 'inactive'
        const image = active ? TickIcon : TickGreyIcon
        return (
            <Row className={"mode-container "+status} onClick={() => this.toggleCard(mode)}>
                <Col className="col-1">{icon}</Col>
                <Col className="col-5"><span className={"mode " + status}>{mode}</span></Col>
                <Col className="col-3 mode-percentage-wrapper"><span className={"mode-percentage " + status}>{percentage}</span></Col>
                <Col className="col-2"><Image src={image} /></Col>
            </Row>
        )
    }
    render () {
        const modeListView = state.modeList.map(this.renderModeList)
        return (
            <Container>
                {modeListView}
            </Container>
        )
    }
}

const ModesList = observer(ModesListView)

export default ModesList
export { ModesList }