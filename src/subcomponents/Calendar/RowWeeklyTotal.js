import React from 'react'
import RowDayVisits from './RowDayVisits'

class RowWeeklyTotals extends React.Component{
    calcTotals(){
        var results = []
        this.props.days.forEach(function(day){
            day.visits.forEach(function(visit){
                var ab = results.find(a=>a.payCode === visit.payCode)
                if(!ab){                    
                    results.push({payCode: visit.payCode, payCodeName: visit.payCodeName, total: visit.total})
                } else {
                    ab.total = Number(ab.total) + Number(visit.total);
                }
            })
        })

        if(results.length > 0){
            return <RowDayVisits key={results.payCode} visits={results}/>
        } else {
            return <h6><b>No visits this week.</b></h6>
        }
    }

    render(){
        return (
            <React.Fragment>
                <h6><b><u>Weekly Totals</u></b></h6>
                {this.calcTotals()}
            </React.Fragment>
        )
    }
}

export default RowWeeklyTotals