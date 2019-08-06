import { observable, decorate } from 'mobx'
import {
    lamp,
    ac,
    lock,
    thermostat,
    tv,
    Arrow
} from '../../assets'

class State {
    productList = [
        {
            name: 'Bed lamp',
            category: 'in Bedroom',
            image: lamp,
            selected: true,
            activeImage: Arrow,
        },
        {
            name: 'Noria AC',
            category: 'in Bedroom',
            image: ac,
            selected: false,
            activeImage: Arrow,
        },
        {
            name: 'Door lock',
            category: 'in Home office',
            image: lock,
            selected: false,
            activeImage: Arrow,
        },
        {
            name: 'Lg tv',
            category: 'in Living room',
            image: tv,
            selected: false,
            activeImage: Arrow,
        },
        {
            name: 'Thermostat',
            category: 'in Bedroom',
            image: thermostat,
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