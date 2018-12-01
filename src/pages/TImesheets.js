import React from 'react';
import moment from 'moment'
import Responsive from 'react-responsive'
import CalHeader from '../subcomponents/Calendar/CalHeader'
import CalBodyRow from '../subcomponents/Calendar/CalBodyRow'
import Button from '../subcomponents/Common/Button'
import Scripts from '../scripts/Calendar'
import api from '../api/api'
import ApprovalModal from '../subcomponents/Modals/ApprovalModal';
const emp = ['Patrick Willetts',2,3,4,5]
const Medium = props => <Responsive {...props} maxWidth={1045}/>
const Large = props => <Responsive {...props} minWidth={1046}/>
const employees = require('../data/employees.json');
const teams = require('../data/teams.json')


class AccordionAssoc extends React.Component{
    state ={
        search: null,
        payPeriod: null,
        days: null,
        ppStatus: null,
        selectedTeam: null,
        selectedEmployee: null,
        approvalModalIsOpen: false
    }

    componentWillMount(){
        this.setPayPeriod()
    }

    setPayPeriod(){
        this.setState({payPeriod: Scripts.setPayPeriod()})
    }

    setPreviousPeriod(){
        this.setState({payPeriod: Scripts.setPrevPayPeriod(this.state.payPeriod), selectedDay: null}, function(){
            if(this.state.selectedEmployee){
                this.getVisits()
            }
        })
    }

    setNextPeriod(){
        this.setState({payPeriod: Scripts.setNextPayPeriod(this.state.payPeriod), selectedDay: null}, function(){
            if(this.state.selectedEmployee){
                this.getVisits()
            }
        })
    }

    getVisits(){
        // api.getVisits(this.state.payPeriod).then(json => this.createDayInfo(json))
        this.createDayInfo([])
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

    setStatus(){
        if(this.state.ppStatus === "submitted"){
            var history = this.props.days.history
            history = history.filter(a => a.action === 'submitted');
            var sort = history.sort(function(a, b) {
                a = moment(a.date, 'MM/DD/YYYY HH:mm:ss:SSS')
                b = moment(b.date, 'MM/DD/YYYY HH:mm:ss:SSS')
                return a > b ? -1 : a < b ? 1 : 0;
            })
            return `${this.state.ppStatus.charAt(0).toUpperCase()}${this.state.ppStatus.slice(1)} ${moment(sort[0].date, "MM/DD/YYYY HH:mm:ss:SSS").format("MMM DD, YYYY HH:mm")}`
        } else {
            return `${this.state.ppStatus.charAt(0).toUpperCase()}${this.state.ppStatus.slice(1)}`
        }
    }


    handleStateChange(target, value){
        this.setState({[target]: value}, function(){
            if(target === 'selectedEmployee'){
                this.getVisits()
            }
        })
    }

    search(){
        if(!this.state.search){
            return this.props.jobList.slice(0,10).sort(function(a,b){return a.jobCode-b.jobCode})
        } else {
            return this.props.jobList.filter(a => a.jobName.toLowerCase().indexOf(this.state.search.toLowerCase()) > -1).sort(function(a,b){return a.jobCode-b.jobCode});
        }
    }

    setEmployees(){
      console.log(this.state.selectedTeam)
      if(!this.state.selectedTeam || this.state.selectedTeam === 'Choose...'){
        return employees
      } else {
        var a = teams.find(a => a.teamName === this.state.selectedTeam)
        console.log(a)
        return a.employees
      }
    }

    render(){
        return(
            <div className="col-8 card ml-2 nopadding">
                <div className="card-header text-left col-xs-12">
                    <h4 className="text-left">Staff Timesheets</h4>
                    <form>
                        <div class="form-row align-items-bottom">
                            <div class="col-auto form-group">
                                <h5><u>Dates</u></h5>
                                <h6>Pay Period Start: {this.state.payPeriod.start}</h6>
                                <h6>Pay Period End: {this.state.payPeriod.end}</h6>
                            </div>
                            <div class="col-auto form-group">
                                <label class="mr-sm-2" for="selectedEmployee"><h5><u>Teams</u></h5></label>
                                <div className="form-inline">
                                    <select class="custom-select mr-sm-3" id="selectedTeam" onChange={(e) => this.handleStateChange(e.target.id, e.target.value)}>
                                        <option selected>Choose...</option>
                                        {teams.map(
                                            team => {
                                                return (
                                                    <option>{team.teamName}</option>
                                                )
                                            }
                                        )}
                                    </select>
                                </div>
                            </div>
                            <div class="col-auto form-group">
                                <label class="mr-sm-2" for="selectedEmployee"><h5><u>Employees</u></h5></label>
                                <div className="form-inline">
                                    <select class="custom-select mr-sm-3" id="selectedEmployee" onChange={(e) => this.handleStateChange(e.target.id, e.target.value)}>
                                        <option selected>Choose...</option>
                                        {this.setEmployees().map(
                                            employee => {
                                                return (
                                                    <option>{employee.name}</option>
                                                )
                                            }
                                        )}
                                    </select>
                                </div>
                            </div>
                            {this.state.selectedEmployee ? <div class="col-auto form-group">
                                <label class="mr-sm-2" for="selectedEmployee"><h5><u>Status</u></h5></label>
                                <h5>{this.state.ppStatus}</h5>
                            </div> : ""}
                        </div>
                        <div class="form-row align-items-bottom">
                            <button onClick={() => this.setPreviousPeriod()} type="button" className="btn btn-primary">Previous Pay Period</button>
                            <button onClick={() => this.setPayPeriod()} type="button" className="btn btn-primary ml-2">Current Pay Period</button>
                            <button onClick={() => this.setNextPeriod()} type="button" className="btn btn-primary ml-2">Next Pay Period</button>
                            <button onClick={() => this.handleStateChange('approvalModalIsOpen', true)} type="button" className="btn btn-info ml-2">Approval Wizard</button>
                        </div>
                    </form>
                </div>
                {this.state.days ?
                    <div className="card-body nopadding carousel-item active">
                        <div className="card-body nopadding">
                            <table className="table table-bordered">
                                <thead className="thead-light">
                                    <tr>
                                        <Medium><th style={{width:'12%',fontSize:14}}>{moment().day(0).format('ddd')}</th></Medium>
                                        <Large><th style={{width:'12%',fontSize:14}}>{moment().day(0).format('dddd')}</th></Large>
                                        <Medium><th style={{width:'12%',fontSize:14}}>{moment().day(1).format('ddd')}</th></Medium>
                                        <Large><th style={{width:'12%',fontSize:14}}>{moment().day(1).format('dddd')}</th></Large>
                                        <Medium><th style={{width:'12%',fontSize:14}}>{moment().day(2).format('ddd')}</th></Medium>
                                        <Large><th style={{width:'12%',fontSize:14}}>{moment().day(2).format('dddd')}</th></Large>
                                        <Medium><th style={{width:'12%',fontSize:14}}>{moment().day(3).format('ddd')}</th></Medium>
                                        <Large><th style={{width:'12%',fontSize:14}}>{moment().day(3).format('dddd')}</th></Large>
                                        <Medium><th style={{width:'12%',fontSize:14}}>{moment().day(4).format('ddd')}</th></Medium>
                                        <Large><th style={{width:'12%',fontSize:14}}>{moment().day(4).format('dddd')}</th></Large>
                                        <Medium><th style={{width:'12%',fontSize:14}}>{moment().day(5).format('ddd')}</th></Medium>
                                        <Large><th style={{width:'12%',fontSize:14}}>{moment().day(5).format('dddd')}</th></Large>
                                        <Medium><th style={{width:'12%',fontSize:14}}>{moment().day(6).format('ddd')}</th></Medium>
                                        <Large><th style={{width:'12%',fontSize:14}}>{moment().day(6).format('dddd')}</th></Large>
                                        <Large><th style={{width:'12%',fontSize:14}}>Weekly</th></Large>
                                    </tr>
                                </thead>
                                <CalBodyRow
                                    payPeriod={this.state.payPeriod}
                                    status={this.state.status}
                                    days={this.state.days.visits.slice(0,7)}
                                    stateChange={this.handleStateChange.bind(this)}
                                    selectedDay={this.state.selectedDay}
                                />
                                <CalBodyRow
                                    payPeriod={this.state.payPeriod}
                                    status={this.state.status}
                                    days={this.state.days.visits.slice(7,14)}
                                    stateChange={this.handleStateChange.bind(this)}
                                    selectedDay={this.state.selectedDay}
                                />
                            </table>
                        </div>
                    </div>: ""}
                {this.state.approvalModalIsOpen ? <ApprovalModal
                            isOpen={this.state.approvalModalIsOpen}
                            period={this.state.payPeriod}
                            stateChange={this.handleStateChange.bind(this)}
                        /> : ""}
            </div>
        )}
}

export default AccordionAssoc
