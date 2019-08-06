import { observable, decorate } from 'mobx'
import {
    Lamp,
    Ac,
    Lock,
    Thermostat,
    Tv
} from '../../assets'

class State {
    productList = [
        {
            name: 'Bed lamp',
            category: 'in Bedroom',
            image: Lamp,
            selected: true,
        },
        {
            name: 'Noria AC',
            category: 'in Bedroom',
            image: Ac,
            selected: false,
        },
        {
            name: 'Door lock',
            category: 'in Home office',
            image: Lock,
            selected: false,
        },
        {
            name: 'Lg tv',
            category: 'in Living room',
            image: Tv,
            selected: false,
        },
        {
            name: 'Thermostat',
            category: 'in Bedroom',
            image: Thermostat,
            selected: false,
        },
    ]
}

decorate(State,{
    productList: observable,
})

const state = new State()

export default state
export { state }