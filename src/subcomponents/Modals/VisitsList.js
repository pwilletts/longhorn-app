import React from 'react'

class VisitsList extends React.Component{
    render(){
        return(
            this.props.visits.map(
                visit => {
                    return(
                        <div className="counter mt-1 mb-1">
                            <button className="btn mr-1 ml-1" onClick={() => this.props.subtractVisits(visit)}>-</button>
                            <span className="mr-1 ml-1"><b>{visit.total}</b></span>
                            <button className="btn mr-2 ml-1" onClick={() => this.props.addVisits(visit)}>+</button>
                            <span>{visit.payCodeName}</span>
                        </div> 
                    )
                }
            )
            
        )
    }
}

export default VisitsList;