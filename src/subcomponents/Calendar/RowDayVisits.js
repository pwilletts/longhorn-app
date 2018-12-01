import React from 'react'

class RowDayVisits extends React.Component{
    render(){
        return(
            this.props.visits.map(
                visit => {
                    return(
                        <div className={this.props.class} key={visit.date}>
                            {visit.total} - {visit.payCodeName}
                        </div>
                    )
                }
            )           
        );
    }
}

export default RowDayVisits;