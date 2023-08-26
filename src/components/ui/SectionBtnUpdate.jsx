import React from 'react';
import {BiSolidEdit} from 'react-icons/bi'
import { Link } from 'react-router-dom';
import FormInput from '../form/FormInput';

const SecttionButton = (props) => {
    return (
<>
        <button className='btn btn-dark'data-bs-toggle="modal" data-bs-target="#exampleModal" >
           
           <BiSolidEdit/>
            
        </button>
        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Update Todo</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body" style={{'marginLeft':'100px'}}>
            <FormInput type={'text'} value={props.Element}/>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
      </>
    );
}

export default SecttionButton;
