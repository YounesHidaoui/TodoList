import React,{useState} from 'react';
import FormTodo from './FormTodo';
import Todo from '../../components/ui/Todo';

const TodoList = (props) => {
    const [todos, setTodos] = useState([]);

    const AddTodo = todo => {
        if(!todo.text || /^\s*$/.test(todo.text)){
            return;
        }
        const newTodos = [todo,...todos]
        setTodos(newTodos)
        console.log(todo)
    }
    const completeTodo = id => {
        let updateTodos = todos.map(todo => {
            if(todo.id === id){
                todo.isComplete = !todo.isComplete
            }
            return todo
        })
        setTodos(updateTodos)
    }
    const removeTodo = id => {
        const removearr = [...todos].filter(todo=>todo.id !== id)
        setTodos(removearr)
    }

    const UpdateTodo = (todoid ,newValue) => {
        if(!newValue.text || /^\s*$/.test(newValue.text)){
            return;
        }
        setTodos(perv => perv.map((item)=> item.id === todoid ?newValue:item))
    }
    return (
        <div className='todo-app'>
            <h1>What's the Plan for Today?</h1>
            <FormTodo onSubmit={AddTodo}/>
            <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo}  UpdateTodo={UpdateTodo}/>
        </div>
    );
}

export default TodoList;
