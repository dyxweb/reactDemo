import React, { Component} from 'react'
import AddTodo from '../components/AddTodo'
import TodoList from '../components/TodoList'
import Footer from '../components/Footer'
import { observer } from 'mobx-react'
import todos from '../mobx/todo.js'

class App extends Component {
    selectTodos = (todos,filter) => {
        switch (filter) {
            case 'all':
                return todos
            case 'completed':
                return todos.filter(todo => todo.completed)
            case 'notcompleted':
                return todos.filter(todo => !todo.completed)
        }
    }
    render() {
        return (
            <div>
                <AddTodo
                    onAddClick={(todo) => todos.add(todo)} />
                <TodoList
                    todos={this.selectTodos(todos.state.todos,todos.state.status)}
                    onTodoClick={(id)=> todos.changestate(id)} />
                <Footer showstatus ={(status) => todos.showstatus(status)} status={todos.state.status}/>
            </div>
        )
    }
}

export default observer(App)
