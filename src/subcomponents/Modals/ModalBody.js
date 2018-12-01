import React from 'react'
import VisitsList from './VisitsList';

class ModalBody extends React.Component{
    render(){
        return(
            <div className="modal-body">
                    <VisitsList
                        visits={this.props.visits}
                        addVisits={this.props.addVisits}
                        subtractVisits={this.props.subtractVisits}
                    />
                    
                    <div className="mt-4">
                        <select id="selectedVisitType" className="custom-select mr-2 w-75">
                            <option></option>
                            {this.props.payCodes.map(paycode => {
                                return(
                                    <option value={paycode.PAYCODE}>{paycode.PAYCODENAME}</option>
                                )
                            })}
                        </select>
                        <button type="button" className="btn btn-info" onClick={(e) => this.props.addVisitType(e)}>Add</button>
                    </div>
                    <div className="row w-100 mt-3">
                        <button type="button" className="btn btn-success col-12 float-right" onClick={() => this.props.saveVisits(this.props.day.date, this.props.visits)}>Save</button>
                    </div>
                </div>
        );
    }
}
  
export default ModalBody