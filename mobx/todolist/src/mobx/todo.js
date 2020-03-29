import { observable, action } from 'mobx'
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
            id: this.state.todos.reduce((maxId, todo) => Math.max(maxId, todo.id), -1) + 1,
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