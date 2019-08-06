import React from 'react'
import { Container } from 'react-bootstrap'
import Roundy from 'roundy';
import './style.css'

class IntensitySlider extends React.PureComponent {
    
    constructor(props) {
        super(props)
        this.state = {
            value: 65
        }
    }
   
    render() {
        return (
            <Container className="sliderWrapper">
                <div className="slider">
                    <Roundy
                        value={this.state.value}
                        allowClick
                        radius={100}
                        color= '#AD6BFF'
                        arcSize={180}
                        min={0}
                        max={100}
                        onChange={value => {
                            this.setState({
                                value: value
                            })
                        }}
                    />
                </div>
                <div className="slider-value">{this.state.value}</div>
            </Container>
        )
    }
}

export default IntensitySlider
export { IntensitySlider }