import React from 'react';
import Modal from 'react-modal'
import Responsive from 'react-responsive'
import moment from 'moment'
import CalBodyRow from '../../subcomponents/Calendar/CalBodyRow'
import api from '../../api/api'

const customStyles = {
    content : {
      top                   : '30%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      width:  '80%',
      minWidth: 350,
      maxWidth: '80%',
      zIndex:3
    }
  };

const Medium = props => <Responsive {...props} maxWidth={1045}/>
const Large = props => <Responsive {...props} minWidth={1046}/>

class ApprovalModal extends React.Component{
    state = {
        employees: null,
        currentEmployee: null
    }

    componentWillMount(){
        Modal.setAppElement('body');
    }

    componentDidMount(){
        if(!this.state.employees){
            api.getVisits({"status": "submitted"}).then(json => this.setState({employees: json}))
        }        
    }

    stateChange(target, value){
        this.setState({[target]: value})
    }

    render(){
        return(
            <Modal
                isOpen={this.props.isOpen}
                onRequestClose={() => this.closeModal}
                style={customStyles}
                shouldCloseOnOverlayClick={true}
            >
                {this.state.employees ? <React.Fragment><div className="modal-header" style={{zIndex:'10 !important'}}>
                    <h5>Approval Wizard</h5>
                    <button type="button" onClick={(e) => this.props.stateChange('approvalModalIsOpen', false)} className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <div className="row">
                        <div className="col-2" style={{overflow:'auto'}}>
                            <h6 className="text-center"><u>Employee List</u></h6>
                            <ul className="list-group">
                                {this.state.employees.map(
                                    emp => {
                                        return(
                                            <button onClick={(e) => this.stateChange('currentEmployee', emp)} type="button" class="list-group-item list-group-item-action" value={emp}>{emp.empId}</button>
                                        )
                                    }
                                )}
                            </ul>
                        </div>
                        {this.state.currentEmployee ? <div className="card-body nopadding">
                            <div className="card-body nopadding">
                                <table className="table table-bordered">
                                    <thead className="thead-light">
                                        <tr>
                                            <Medium><th style={{width:'12%',fontSize:14}}>{moment().day(0).format('ddd')}</th></Medium>
                                            <Large><th style={{width:'12%',fontSize:14}}>{moment().day(0).format('dddd')}</th></Large>
                                            <Medium><th style={{width:'12%',fontSize:14}}>{moment().day(1).format('ddd')}</th></Medium>
                                            <Large><th style={{width:'12%',fontSize:14}}>{moment().day(1).format('dddd')}</th></Large>
                                            <Medium><th style={{width:'12%',fontSize:14}}>{moment().day(2).format('ddd')}</th></Medium>
                                            <Large><th style={{width:'12%',fontSize:14}}>{moment().day(2).format('dddd')}</th></Large>
                                            <Medium><th style={{width:'12%',fontSize:14}}>{moment().day(3).format('ddd')}</th></Medium>
                                            <Large><th style={{width:'12%',fontSize:14}}>{moment().day(3).format('dddd')}</th></Large>
                                            <Medium><th style={{width:'12%',fontSize:14}}>{moment().day(4).format('ddd')}</th></Medium>
                                            <Large><th style={{width:'12%',fontSize:14}}>{moment().day(4).format('dddd')}</th></Large>
                                            <Medium><th style={{width:'12%',fontSize:14}}>{moment().day(5).format('ddd')}</th></Medium>
                                            <Large><th style={{width:'12%',fontSize:14}}>{moment().day(5).format('dddd')}</th></Large>
                                            <Medium><th style={{width:'12%',fontSize:14}}>{moment().day(6).format('ddd')}</th></Medium>
                                            <Large><th style={{width:'12%',fontSize:14}}>{moment().day(6).format('dddd')}</th></Large>
                                            <Large><th style={{width:'12%',fontSize:14}}>Weekly</th></Large>
                                        </tr>          
                                    </thead>
                                    <CalBodyRow
                                        payPeriod={this.props.period}
                                        status={"submitted"}
                                        days={this.state.currentEmployee.visits.slice(0,7)} 
                                        stateChange={this.state.stateChange} 
                                        selectedDay={this.state.selectedDay}
                                    />
                                    <CalBodyRow
                                        payPeriod={this.state.period}
                                        status={"submitted"}
                                        days={this.state.currentEmployee.visits.slice(7,14)} 
                                        stateChange={this.state.stateChange} 
                                        selectedDay={this.state.selectedDay}
                                    />
                                </table>
                            </div>                           
                            <button type="button" className="btn btn-success ml-2">Approve</button>
                            <button type="button" className="btn btn-danger ml-2">Reject</button>
                            <button type="button" onClick={() => this.stateChange('showHistory', true)} className="btn btn-info ml-2">View History</button>
                            {this.state.showHistory ? 
                            <div style={{overflow:'auto',maxHeight:100}}>
                                <ul className="list-group list-group-flush">
                                    {this.state.currentEmployee.history.map(
                                        history => {
                                            return(
                                                <li>{history.date} {history.userName} {history.action}</li>
                                            )
                                        }
                                    )}
                                </ul>
                            </div> : ""}
                        </div>: ""}
                    </div>
                </div> </React.Fragment>: ""}
            </Modal>
        );
    }
}

export default ApprovalModal;