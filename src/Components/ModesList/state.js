import { observable, decorate } from 'mobx'
import {
    MorningIcon,
    DayIcon,
    NightIcon
} from '../../Assets'

class State {
    modeList = [
        {
            icon: MorningIcon,
            mode: "Morning",
            percentage: "50%",
            active: true
        },
        {
            icon: DayIcon,
            mode: "Day",
            percentage: "30%",
            active: false
        },
        {
            icon: NightIcon,
            mode: "Night",
            percentage: "100%",
            active: false
        }
    ]
}

decorate(State,{
    modeList: observable,
})

const state = new State()

export default state
export { state }