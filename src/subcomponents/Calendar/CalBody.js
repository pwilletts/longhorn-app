import React from 'react'
import CalBodyHead from './CalBodyHead';
import CalBodyRow from './CalBodyRow';

class CalBody extends React.Component{
    state = {
        visitModalIsOpen: false
    }

    render(){
        return(
            <div className="card-body nopadding">
                <table className="table table-bordered">
                    <CalBodyHead/>
                    <tbody>
                       <CalBodyRow
                            payPeriod={this.props.payPeriod}
                            status={this.props.status}
                            days={this.props.days.visits.slice(0,7)} 
                            stateChange={this.props.stateChange} 
                            selectedDay={this.props.selectedDay}
                        />
                       <CalBodyRow 
                            payPeriod={this.props.payPeriod}
                            status={this.props.status}
                            days={this.props.days.visits.slice(7,14)} 
                            stateChange={this.props.stateChange} 
                            selectedDay={this.props.selectedDay}
                        />
                    </tbody>
                    <tfoot>
                        {this.props.status === 'Active' ? <tr>
                            <td colSpan="8" style={{backgroundColor: 'rgba(211, 211, 211, 0.37)'}}>
                                {/* <button className="btn btn-success btn-lg float-left" onClick={() => this.props.onSubmit()}>Submit for Manager Approval</button> */}
                            </td>
                        </tr> : ""}
                    </tfoot>
                </table>
            </div>
        );
    }
}

export default CalBody;