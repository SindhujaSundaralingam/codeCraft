import { observable, decorate } from 'mobx'
import {
    Lamp,
    Ac,
    Lock,
    Thermostat,
    Tv,
    Arrow
} from '../../Assets'

class State {
    productList = [
        {
            name: 'Bed lamp',
            category: 'in Bedroom',
            image: Lamp,
            selected: true,
            activeImage: Arrow,
        },
        {
            name: 'Noria AC',
            category: 'in Bedroom',
            image: Ac,
            selected: false,
            activeImage: Arrow,
        },
        {
            name: 'Door lock',
            category: 'in Home office',
            image: Lock,
            selected: false,
            activeImage: Arrow,
        },
        {
            name: 'Lg tv',
            category: 'in Living room',
            image: Tv,
            selected: false,
            activeImage: Arrow,
        },
        {
            name: 'Thermostat',
            category: 'in Bedroom',
            image: Thermostat,
            selected: false,
            activeImage: Arrow,
        },
    ]
}

decorate(State,{
    productList: observable,
})

const state = new State()

export default state
export { state }