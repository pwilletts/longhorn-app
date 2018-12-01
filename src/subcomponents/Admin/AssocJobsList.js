import React from 'react';

class AssocJobsList extends React.Component{
    setHtml(job){
        if(this.props.match.params.name === job.jobCode){
            return <li className="list-group-item list-group-item-action active list-border">{job.jobName}</li>
        } else {
            return <li onClick={() => this.route(job)} className="list-group-item list-group-item-action list-border">{job.jobName}</li>
        }
    }

    route(job){
        this.props.history.push(`/admin/jobs/${job.jobCode}`)
    }

    render(){
        return(
                <ul className="list-group" style={{overflow:'auto',height:'54vh',pointerEvents:'auto'}}>
                    {this.props.search().map(
                        job => {
                            return (
                                this.setHtml(job)
                            )
                        }                  
                    )}                               
                </ul>

            
        )
    }
}

export default AssocJobsList