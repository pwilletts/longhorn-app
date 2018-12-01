import React from 'react'
import moment from 'moment'
import Responsive from 'react-responsive';
import CalHeader from '../subcomponents/Calendar/CalHeader'
import CalBody from '../subcomponents/Calendar/CalBody';
import VisitsModal from '../subcomponents/Modals/VisitsModal';
import SubmitModal from '../subcomponents/Modals/VisitsSubmit';
import RowDayMini from '../subcomponents/Calendar/RowDayMini'
import Scripts from '../scripts/Calendar'
import api from '../api/api'
const timeCodes = require('../data/timecodes.json')

const Small = props => <Responsive {...props} maxWidth={510}/>

class Calendar extends React.Component{
    state = {
        payPeriod: null,
        days: null,
        daysChanged: null,
        selectedDay: null,
        visitModalIsOpen: false,
        submitModalIsOpen: false,
        payCodes: null
    }

    componentWillMount(){
        this.setPayPeriod();
        // if(this.state.payCodes === null){
        //     api.getTimeCodes('HC').then(json=> {
        //         this.setState({payCodes: json})
        //     });
        // }

        this.setState({payCodes: timeCodes})
    }

    setPayPeriod(){
        this.setState({payPeriod: Scripts.setPayPeriod()}, function(){
            this.setDayInfo();
        })
    }

    setPreviousPeriod(){
        this.setState({payPeriod: Scripts.setPrevPayPeriod(this.state.payPeriod), selectedDay: null}, function(){
            this.setDayInfo();
        })
    }

    setNextPeriod(){
        this.setState({payPeriod: Scripts.setNextPayPeriod(this.state.payPeriod), selectedDay: null}, function(){
            this.setDayInfo();
        })
    }

    handleStateChange(event, target, data, callback){
        if(target === 'visitModalIsOpen'){
            this.setState({[target]: data ? data : this.state.visitModalIsOpen ? false : true})
        } else {
            this.setState({[target]: data})
        }
    }

    setDayInfo(){
      this.createDayInfo([])
        // api.getVisits(this.state.payPeriod)
        // .then(json => this.createDayInfo(json))
    }

    submit(){
        this.setState({submitModalIsOpen: true})
    }

    createDayInfo(days){
        if(days.length === 0){
            var period = {
                payPeriodStart: this.state.payPeriod.start,
                payPeriodEnd: this.state.payPeriod.end,
                workflow: {},
                status: "pending",
                assigned: null,
                history: [{
                    date: moment().format("MM/DD/YYYY HH:mm:ss:SSS"),
                    user: "longhorn",
                    userName: "longhorn",
                    action: 'created',
                    message: `Created visits for period ${this.state.payPeriod.start} to ${this.state.payPeriod.end}`
                }],
                visits: []
            };

            var i = 0;
            for(i=0;i<=13;i++){
                period.visits.push({
                    date: moment(this.state.payPeriod.start, 'MM/DD/YYYY').add(i,'d'),
                    visits: []
                })
            }
            this.setState({days: period, ppStatus: Scripts.setEditStatus(this.state.payPeriod, period.status)})
        } else {
            this.setState({days: days[0], ppStatus: Scripts.setEditStatus(this.state.payPeriod, days.status)})
        }
    }

    saveVisits(day, visits){
        var toSplice = [];
        visits.forEach(function(visit, index){
            if(visit.total === 0){
                toSplice.push(index);
            }
        })

        toSplice.forEach(function(value, index){
            visits.splice(value-index,1);
        })

        var tempState = this.state.days;
        tempState = tempState.visits.find(a => moment(a.date).format('MM/DD/YYYY') === moment(day).format('MM/DD/YYYY'));
        tempState['modified'] = true
        tempState.visits = visits

        // api.putVisits(this.state.days)
        // .then(json => api.getVisits(this.state.payPeriod).then(json => this.setState({days: json[0], visitModalIsOpen: false})))
        this.setState({days: this.state.days, visitModalIsOpen: false})
    }

    submitVisits(){
        // api.postWorkflow(this.state.payPeriod).then(result => this.setState({submitModalIsOpen: false}, function(){
        //     console.log(result)
        // }))
    }

    render(){
        return(
            <React.Fragment>
                    <div className="card col-xs-12 col-sm-12 col-md-10 nopadding" style={{float:'left'}}>
                        {this.state.ppStatus ? <CalHeader
                            status={this.state.ppStatus}
                            days={this.state.days}
                            payPeriod={this.state.payPeriod}
                            setPayPeriod={this.setPayPeriod.bind(this)}
                            setPrevPayPeriod={this.setPreviousPeriod.bind(this)}
                            setNextPayPeriod={this.setNextPeriod.bind(this)}
                            onSubmit={this.submit.bind(this)}
                        /> : ""}

                    {this.state.days ? <CalBody
                            status={this.state.ppStatus}
                            payPeriod={this.state.payPeriod}
                            days={this.state.days}
                            stateChange={this.handleStateChange.bind(this)}
                            selectedDay={this.state.selectedDay}/>
                        : ""}

                        {this.state.selectedDay && this.state.visitModalIsOpen && this.state.payCodes !== null ? <VisitsModal
                            isOpen={this.state.visitModalIsOpen}
                            stateChange={this.handleStateChange.bind(this)}
                            saveVisits={this.saveVisits.bind(this)}
                            day={this.state.selectedDay}
                            payCodes={this.state.payCodes}
                        /> : ""}

                        {this.state.submitModalIsOpen ? <SubmitModal
                            isOpen={this.state.submitModalIsOpen}
                            submitVisits={this.submitVisits.bind(this)}
                            stateChange={this.handleStateChange.bind(this)}
                            period={this.state.payPeriod}
                        /> : ""}
                    </div>
                {this.state.selectedDay ? <Small>
                        <div className="nopadding border">
                            <RowDayMini
                                payPeriod={this.state.payPeriod}
                                day={this.state.selectedDay}
                                status={this.state.ppStatus}
                                stateChange={this.handleStateChange.bind(this)}
                                selectedDay={this.state.selectedDay}
                            />
                        </div>
                </Small> : ""}
            </React.Fragment>
        );
    }
}

export default Calendar;
