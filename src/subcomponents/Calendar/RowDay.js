import React from 'react'
import Responsive from 'react-responsive';
import moment from 'moment';
import RowDayVisits from './RowDayVisits';
import Button from '../Common/Button'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const Small = props => <Responsive {...props} maxWidth={510}/>
const Medium = props => <Responsive {...props} maxWidth={990} minWidth={511}/>
const MediumScale = props => <Responsive {...props} minWidth={511}/>
const Large = props => <Responsive {...props} minWidth={991}/>

class RowDay extends React.Component{
    //This determines where we show a map of all the visits or render no visits text, also determine if button for add/edit shown based on if a day is selected
    dayVisitsHtml(){
        if(this.props.day.visits.length === 0){
            return <React.Fragment>
                <h6 style={{color:'red', fontSize:16}} className="day-text"><MediumScale>No Visits</MediumScale></h6>
                {this.setButton()}
            </React.Fragment>
        } else{
            return <React.Fragment>
                        <MediumScale>                    
                            <RowDayVisits visits={this.props.day.visits} key={this.props.day.date} className={'visits'}/>
                            {this.setButton()}
                        </MediumScale>
                        <Small>
                            <FontAwesomeIcon icon="align-justify" style={{fontSize:18}}></FontAwesomeIcon>
                        </Small>
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
        if(this.selectedDay() && this.props.status === "Active"){
            return <MediumScale><div><Button onClick={this.props.stateChange} class={'btn-primary btn-sm'} target={'visitModalIsOpen'} stateChange={this.props.stateChange} width={'col-12'} text={this.props.day.visits.length > 0 ? 'Edit': 'Add'}/></div></MediumScale>
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
            <td className={this.setClasses()} key={this.props.day} onClick={(e) => this.props.stateChange(e, 'selectedDay', this.props.day)}>
                <Small><h6 className='text-left'><b><u>{moment(this.props.day.date).format('DD')}</u></b></h6></Small>
                <Medium><h6 className='text-left'><b><u>{moment(this.props.day.date).format('MM/DD')}</u></b></h6></Medium>
                <Large><h6 className='text-left'><b><u>{moment(this.props.day.date).format('MMM Do')}</u></b></h6></Large>
                {this.dayVisitsHtml()}
            </td>
        );
    }
}

export default RowDay;