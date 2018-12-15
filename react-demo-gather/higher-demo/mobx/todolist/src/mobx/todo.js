import { observable, action } from 'mobx'
let f=1;
const todo = {
    state: observable({
        todos: [],
        status: 'all',
    }),

    add : action(function(todo){
        this.state.todos = [...this.state.todos,
        {
            text:todo,
            completed:false,
            id:f++
        }]
    }),

    changestate : action(function(index){
        this.state.todos = this.state.todos.map(todo => 
            todo.id ===index ?
            {...todo,completed:!todo.completed} :
            todo
            )
    }),

    showstatus: action(function(status){
        this.state.status = status
    }),
}

export default todo