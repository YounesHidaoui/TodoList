import React from 'react';
import '../css/input.css'
const FormInput = (props) => {


    return (
                <div class="">
                    <input   class="form-control" placeholder="add todo .."
                    onChange={(e)=>props.getValueformInput(e.target.value)}
                    />
                </div>
      
    );
}

export default FormInput;
