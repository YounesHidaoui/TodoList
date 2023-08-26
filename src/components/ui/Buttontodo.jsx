import React from 'react';
import '../css/btn.css'

const Buttontodo = (props) => {

    return (
        
        <div class="b ">
        <button type="button" onClick={()=>props.addElement()} class="btn  ml-1">{props.title}</button>
        </div>
    );
}

export default Buttontodo;
