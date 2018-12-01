import React from 'react'
import moment from 'moment';
import RowDayVisitsMini from './RowDayVisitsMini';
import Button from '../Common/Button'

class RowDayMini extends React.Component{
    //This determines where we show a map of all the visits or render no visits text, also determine if button for add/edit shown based on if a day is selected
    dayVisitsHtml(){
        if(this.props.day.visits.length === 0){
            return <React.Fragment>
                <h6 style={{color:'red', fontSize:16}} class="day-text text-center">No Visits</h6>
                {this.setButton()}
            </React.Fragment>
        } else {
            return <React.Fragment>
                <RowDayVisitsMini visits={this.props.day.visits} class={'visits'}/>
                {this.setButton()}
            </React.Fragment>
        }
    }

    setClasses(){
        var classes = 'date-card';
        if(this.selectedDay()){
            classes += ' selected-card';
        }
        return classes
    }

    setButton(){
        if(this.selectedDay() && this.props.status === "Active") {
            return <div className="text-center"><Button onClick={this.props.stateChange} class={'btn-primary btn-sm mb-3'} target={'visitModalIsOpen'} stateChange={this.props.stateChange} width={'col-10'} text={this.props.day.visits.length > 0 ? 'Edit' : 'Add'}/></div>
        }
    }

    selectedDay(){
       if(this.props.selectedDay === this.props.day){
           return true;
       } else {
           return false;
       }
    }

    render(){
        return(
            <div className="col-xs-12">
                <h6 className='text-center'><b><u>Visits for {moment(this.props.day.date).format('MMM DD')}</u></b></h6>
                {this.dayVisitsHtml()}
            </div>
        );
    }
}

export default RowDayMini;