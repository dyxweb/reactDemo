import { observable, action } from 'mobx'
const counter = {
    state: observable({
        count:0,
    }),

    add: action(function() {
        this.state.count+=1
    }),

    min: action(function() {
        this.state.count-=1
    }),

    reset: action(function() {
        this.state.count=0
    }),
}

export default counter