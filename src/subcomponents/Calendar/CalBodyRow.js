import React from 'react'
import Responsive from 'react-responsive';
import RowDay from './RowDay';
import RowWeeklyTotal from './RowWeeklyTotal'

const Medium = props => <Responsive {...props} minWidth={1045}/>

class CalBodyRow extends React.Component{
    render(){
        return(
            <tr>
                {this.props.days.map(
                    day => {
                        return(
                            <RowDay
                                payPeriod={this.props.payPeriod}
                                day={day}
                                status={this.props.status}
                                stateChange={this.props.stateChange} 
                                selectedDay={this.props.selectedDay}
                            />
                        )
                    }
                )}
               <Medium><RowWeeklyTotal days={this.props.days}/></Medium>
            </tr>
        )
    }
}

export default CalBodyRow;