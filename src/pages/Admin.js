import React from 'react';
import $ from 'jquery'
import NavMenuAdmin from '../components/NavMenuAdmin'
import AssociatedJobs from '../components/AssociatedJobs'
import api from '../api/api';
import Scripts from '../scripts/Jobs'
const jobList = require('../data/jobs.json')

class Admin extends React.Component{
state = {
    interfaces: null,
    jobs: null,
    searchTerm: null,
    selectedAssocJob: null,
    searchResults: null
}

getInterfaces(){
    //api.getInterfaces().then(results => this.setState({interfaces: results}))
}

getJobs(){
    //api.getJobs().then(results => this.setState({jobs: results}))
    this.setState({jobs: jobList})
}

getReports(){
    //api.getReports().then(results => this.setState({reports : results}))
}

checkReadiness(param){
    if(param === 'jobs'){
        if(this.state.jobs){
            return this.state.jobs
        } else {
            this.getJobs()
        }
    } else if (param === "interfaces"){
        if(this.state.interfaces){
            return this.state.interfaces
        } else {
            this.getInterfaces()
        }
    } else if (param === "reports"){
        if(this.state.reports){
            return this.state.reports
        } else {
            this.getReports()
        }
    }
}

getItem(param, key){
    if(this.props.match.params.name === 'new'){
        return []
    } else {
        var data = this.checkReadiness(param);
        if(data){
            return data.find(a => a[key] === this.props.match.params.name)
        }
    }
}

add() {
    const jobs = Scripts.add(this.state.jobs, Scripts.getItemByUrl(this.state.jobs, this.props.match.params.name, 'jobCode'), this.state.selectedAssocJob);
    //api.updateJobs(jobs).then(results => this.setState({jobs: results, selectedAssocJob: null}, function(value){Scripts.searchByTerm(this.state.jobs, this.props.match.params.name, 'jobCode', this.state.searchTerm)}));
    this.setState({jobs: jobs, selectedAssocJob: null}, function(value){Scripts.searchByTerm(this.state.jobs, this.props.match.params.name, 'jobCode', this.state.searchTerm)})
}

delete(assocJob){
    const jobs = Scripts.remove(this.state.jobs, Scripts.getItemByUrl(this.state.jobs, this.props.match.params.name, 'jobCode'), assocJob);
    //api.updateJobs(jobs).then(results => this.setState({jobs: results, selectedAssocJob: null}));
    this.setState({jobs: jobs, selectedAssocJob: null})
}

addInterface(){
    const body = {
        intName: 'Patrick'
    }

    api.addInterface(body).then(results => api.getInterfaces().then(results => this.setState({interfaces: results}, function(){
        this.props.history.push(`/admin/interfaces/${body.intName}`)
    })))
}

addReport(){
    const body = {
        name: $('#name').val(),
        dataSource: $('#dataSource').val(),
        sql: $('#sql').val(),
        params: $('#params').val().split(',')
    }

    api.addReport(body).then(results => api.getReports().then(results => this.setState({reports: results}, function(){
        this.props.history.push(`/admin/reports/${body.name}`)
    })))
}

handleStateChange(target, value, callback){
    this.setState({[target]: value},function(){
        if(callback === 'handleSearch'){
            if(value === ""){
                this.setState({selectedAssocJob: null, searchResults: null}, function(){
                    $('#assocJobSearch').val("")
                })
            }
            this.setState({searchResults: Scripts.searchByTerm(this.state.jobs, this.props.match.params.name, 'jobCode', this.state.searchTerm)})
        }
    })
}

render(){
    return(
        <div>
            <NavMenuAdmin
                {...this.props}
                interfaces={this.checkReadiness('interfaces', 'intName')}
                jobs={this.checkReadiness('jobs', 'jobCode')}
                reports={this.checkReadiness('reports', 'name')}
                currentInt={this.getItem()}
                addInterface={this.addInterface.bind(this)}
            />

            {this.props.match.params.section === "jobs" ?
                <AssociatedJobs
                {...this.props}
                job={this.getItem('jobs', 'jobCode')}
                jobs={this.checkReadiness('jobs')}
                add={this.add.bind(this)}
                delete={this.delete.bind(this)}
                searchTerm={this.state.searchTerm}
                stateChange={this.handleStateChange.bind(this)}
                selectedAssocJob={this.state.selectedAssocJob}
                searchResults={this.state.searchResults}
            />
            : ""}
        </div>
    )}
}

export default Admin
