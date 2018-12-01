import React from 'react'
import Button from '../Common/Button'
import moment from 'moment'

class CalHeader extends React.Component{
    componentWillMount(){
        console.log(this.props.status);
    }

    setStatus(){
        if(this.props.status === "submitted"){
            var history = this.props.days.history
            history = history.filter(a => a.action === 'submitted');
            var sort = history.sort(function(a, b) {
                a = moment(a.date, 'MM/DD/YYYY HH:mm:ss:SSS')
                b = moment(b.date, 'MM/DD/YYYY HH:mm:ss:SSS')
                return a > b ? -1 : a < b ? 1 : 0;
            })
            return `${this.props.status.charAt(0).toUpperCase()}${this.props.status.slice(1)} ${moment(sort[0].date, "MM/DD/YYYY HH:mm:ss:SSS").format("MMM DD, YYYY HH:mm")}`
        } else {
            return `${this.props.status.charAt(0).toUpperCase()}${this.props.status.slice(1)}`
        }
    }

    setHtml(){

    }

    render(){
        return(
            <div className="card-header text-left col-xs-12">
                <h4 className='cal-head-text'><b>Pay Period:</b> {this.props.payPeriod.start} - {this.props.payPeriod.end}</h4>
                <h4 className='cal-head-text'><b>Status: </b>{this.setStatus()}</h4>
                <Button onClick={this.props.setPrevPayPeriod} class={"btn-primary btn-sm"} text={'Previous Pay Period'}/>
                <Button onClick={this.props.setPayPeriod} class={"btn-primary btn-sm"} text={'Current Pay Period'}/>
                <Button onClick={this.props.setNextPayPeriod} class={"btn-primary btn-sm"} text={'Next Pay Period'}/>
                {this.props.status === 'Active' ? <Button onClick={this.props.onSubmit} class={"btn-success btn-sm"} text={'Submit for Manager Approval'}/> : ""}
            </div>
        );
    }
}

export default CalHeader;