import React,{useState , useRef , useEffect} from 'react';
import FormInput from '../../components/form/FormInput'

import Buttontodo from '../../components/ui/Buttontodo'

import FormText from '../../components/form/FormText'

import SectionTodo from '../../components/ui/SectionTodo';

const FormTodo = (props) => {
        const [Input, setInput] = useState('');
    //   const InputRef = useRef(null)

    //   useEffect(()=>{
    //     InputRef.current.focus();
    //   })

       const getValueformInput=(e) => {
            setInput(e.target.value)
        }

        const handelSubmit =e => {
            
            e.preventDefault()
            
            const todo = {
                id:Math.floor(Math.random() * 10000),
                text:Input
            }
            props.onSubmit(todo);

            setInput('')
        }
    return (
        
    <div className="todo">
        
        <div className="todo-form">
            {props.edit?
            
            <form class="d-flex justify-content-center" onSubmit={handelSubmit}>
            <input   className=" todo-input form-control" placeholder="update a todo "
                        onChange={getValueformInput} value={Input}/>
             <button className="todo-button btn btn-primary">Update Todo</button>
            </form>:<form class="d-flex justify-content-center" onSubmit={handelSubmit}>
        <input   className=" todo-input form-control" placeholder="add a todo "
                    onChange={getValueformInput}/>
         <button className="todo-button btn btn-primary">Add Todo</button>
        </form>
        }
        
        

        </div>

       </div>
       
       
        
            
            
        
    );
}

export default FormTodo;
