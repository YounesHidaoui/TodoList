import React,{useState} from 'react';
import {RiCloseCircleLine} from 'react-icons/ri';
import {TiEdit} from 'react-icons/ti';
import UpdateTodo from '../../pages/Home/UpdateTodo';
import FormTodo from '../../pages/Home/FormTodo';

const Todo = ({todos,completeTodo,removeTodo,UpdateTodo}) => {
    const[edit,setEdit]=useState({
        id:null,
        value:''
    })
    const handelUpdate = value => {
        UpdateTodo(edit.id,value)
        setEdit({
            id:null,
            value:''
        })
    }
    if(edit.id){
        return <FormTodo edit={edit} onSubmit={handelUpdate}/>
    }
    return (
       <>{todos.map((todo,index) => {
        return (<div className={todo.isComplete ? 'todo-row complete':'todo-row'} key={index}>
            <div key={todo.id} onClick={()=>completeTodo(todo.id)}>
            {todo.text}
            </div>
            <div className="icons">
            <RiCloseCircleLine onClick={() => removeTodo(todo.id)} className='delete-icon' />
            <TiEdit onClick={()=>setEdit({id:todo.id,value:todo.text})} className='edit-icon'/>
            
            
            </div>
        </div>)
        
       })}
       </>
    );
}

export default Todo;
