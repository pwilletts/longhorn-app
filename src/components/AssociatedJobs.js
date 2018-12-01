import React from 'react'
import Responsive from 'react-responsive'
import SearchDropdown from '../subcomponents/Admin/SearchDropdown'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const SmallScale = props => <Responsive {...props} maxWidth={767}/>

class AssociatedJobs extends React.Component{
    state = {
        selectedAssocJob: null,
        searchResults: null
    }

    handleStateChange(target, value){
        this.setState({[target]: value})
    }

    route(event, path){
        this.props.history.push(`${path}`)
    }

    render(){
        return(
            !this.props.job ? "Nope" : this.props.jobs.length > 0 ? 
            <React.Fragment>
                <SmallScale>
                    <div>
                        <h5 className="text-left mt-1 ml-2"><FontAwesomeIcon icon="arrow-left" style={{fontSize:18}} onClick={(e) => this.route(e, '/admin')}></FontAwesomeIcon>   Return to Search</h5>
                    </div>
                </SmallScale>
                <div className="card col-12 col-sm-12 col-md-8 col-lg-6 nopadding">
                    <div className="card-header">
                        <h4><u>Associated Jobs</u></h4>
                        <h5>{this.props.job.jobName}</h5>
                    </div>
                    <table className="table table-hover table-sm col-4">
                        <thead style={{backgroundColor:"#d6d8db"}}>
                            <th></th>
                            <th style={{fontWeight:"normal", fontSize:18}}><b>Job Code</b></th>
                            <th style={{fontWeight:"normal", fontSize:18}}><b>Job Name</b></th>
                        </thead>
                        <tbody>
                            {this.props.job.associated.length > 0 ? this.props.job.associated.map(
                                assocJob => {
                                    return (
                                        <tr className="border">
                                            <td className="delete-icon">
                                                <FontAwesomeIcon onClick={() => this.props.delete(assocJob)} icon="trash-alt" style={{fontSize:18}}></FontAwesomeIcon>
                                            </td>
                                            <td>{assocJob.jobCode}</td>
                                            <td>{assocJob.jobName}</td>
                                        </tr>
                                    )
                                }
                            ) : <tr className="border">
                                    <td colSpan='3' className="text-center">No jobs are associated with {this.props.job.jobName}</td>
                                </tr>}

                        </tbody>
                    </table>
                    <div>
                        <div className="col-12">
                            <h6 className="text-center"><u>Use the search box below to find jobs to add...</u></h6>
                        </div>
                        <div className="row col-12">
                            <div class={this.props.selectedAssocJob ? "input-group col-10 ml-auto mr-auto" : "input-group col-10 ml-auto mr-auto"}>
                                <input onChange={(e) => this.props.stateChange('searchTerm', e.target.value, 'handleSearch')} class="text-center form-control py-2 border-right-0 border" type="search" placeholder="Begin typing..." id="assocJobSearch"></input>
                                <span class="input-group-append">
                                    <button onClick={() => this.props.stateChange('searchTerm', '', 'handleSearch')} className="btn btn-outline-secondary border-left-0 border" type="button">
                                        <FontAwesomeIcon  icon="times" style={{fontSize:18}}></FontAwesomeIcon>
                                    </button>
                                </span>
                            </div>
                            {this.props.selectedAssocJob ? <div className="col-2">
                                <button type="submit" className="btn btn-primary" onClick={(e) => this.props.add()}>Add</button>
                            </div> : ""}
                        </div>
                        <div className="col-12">
                            {!this.props.searchTerm ? "" : <SearchDropdown selected={this.props.selectedAssocJob} onSelect={this.props.stateChange.bind(this)} searchResults={this.props.searchResults}/>}
                        </div>
                    </div>
                </div>

            </React.Fragment> : ""
        )
    }
}

export default AssociatedJobs
