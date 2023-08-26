import React from 'react';
import '../css/sectionTodo.css'
import FormText from '../form/FormText'
import SecttionButton from './SecttionButton';
import SectionBtnUpdate from './SectionBtnUpdate';
const SectionTodo = (props) => {
    return (
        <div className='section  '>
            <div className="box">
                <FormText  />
            </div>
           <div className="bx">
                <div className="btn">
                <SectionBtnUpdate   />
                </div>
                <div className="btn">
                <SecttionButton />
                </div>
                
                
           </div>
           
            
        </div>
    );
}

export default SectionTodo;
