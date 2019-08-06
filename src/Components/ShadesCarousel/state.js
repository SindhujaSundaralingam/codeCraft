import { observable, decorate } from 'mobx'

class State {
    shades = [
        {
            shade: "red",
            checked: true
        },
        {
            shade: "violet",
            checked: false
        },
        {
            shade: "skyblue",
            checked: false
        },
        {
            shade: "blue",
            checked: false
        },
        {
            shade: "purple",
            checked: false
        }
    ]
}

decorate(State,{
    shades: observable,
})

const state = new State()

export default state
export { state }