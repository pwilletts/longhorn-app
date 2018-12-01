import React from 'react'

class RowDayVisits extends React.Component{
    render(){
        return(
            <ul className="list-group">
                {this.props.visits.map(
                    visit => {
                        return(
                            <li class="visits list-group-item">
                                {visit.total} - {visit.payCodeName}
                            </li>
                        )
                    }
                )}
            </ul>         
        );
    }
}

export default RowDayVisits;