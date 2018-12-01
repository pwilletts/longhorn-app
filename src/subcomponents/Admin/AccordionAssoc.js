import React from 'react';
import Search from '../Common/Search'
import AssocJobsList from './AssocJobsList'

class AccordionAssoc extends React.Component{
    state ={
        search: null
    }

    handleStateChange(target, value){
        this.setState({[target]: value})
    }

    search(){
        if(!this.state.search){
            return this.props.jobList.slice(0,10).sort(function(a,b){return a.jobCode-b.jobCode})
        } else {
            return this.props.jobList.filter(a => a.jobName.toLowerCase().indexOf(this.state.search.toLowerCase()) > -1).sort(function(a,b){return a.jobCode-b.jobCode});
        }
    }

    render(){
        return(
            <div>
                <Search onChange={this.handleStateChange.bind(this)}/>
                <AssocJobsList {...this.props} jobs={this.props.jobList} search={this.search.bind(this)}/>               
            </div>
        )}
}

export default AccordionAssoc