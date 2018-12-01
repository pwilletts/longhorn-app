import React from 'react'
import moment from 'moment'

class ModalHeader extends React.Component{
    render(){
        console.log(this.props.day);
        return(
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">{`Visits for ${moment(this.props.day.date).format('MMM Do, YYYY')}`} </h5>
                <button type="button" onClick={(e) => this.props.stateChange(e, 'visitModalIsOpen', false)} className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        );
    }
}
  
export default ModalHeader





