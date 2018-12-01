import React from 'react';
import moment from 'moment'
import Modal from 'react-modal'

const customStyles = {
    content : {
      top                   : '30%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      width:  600,
      minWidth: 350,
      maxWidth:600
    }
  };

class VisitsModal extends React.Component{
    state = {
        day: null,
        visits: null
    }

    render(){
        return(
            <Modal
                isOpen={this.props.isOpen}
                onRequestClose={() => this.closeModal}
                style={customStyles}
                shouldCloseOnOverlayClick={false}
            >
                <div className="modal-header">
                    <h4 className="modal-title" id="exampleModalLabel">{`Submit visits for: ${moment(this.props.period.start, 'MM/DD/YYYY').format('MMM Do, YYYY')} to ${moment(this.props.period.end, 'MM/DD/YYYY').format('MMM Do, YYYY')}`} </h4>
                </div>
                <div className="modal-body">
                    <div className="mt-1">
                        <h5>By clicking Accept, you are verifying that the visits you have entered are accurate.  They will be sent to your Supervisor for further approval prior to submission for Payroll Processing.</h5>
                    </div>
                    <div className="row w-100 mt-3">
                        <button type="button" className="btn btn-danger ml-auto mr-3 col-3 float-right" onClick={(e) => this.props.stateChange(e, 'submitModalIsOpen', false)}>Cancel</button>
                        <button type="button" className="btn btn-success col-3 float-right" onClick={() => this.props.submitVisits(this.props.period)}>Submit</button>
                    </div>
                </div>
            </Modal>
        );
    }
}

export default VisitsModal;