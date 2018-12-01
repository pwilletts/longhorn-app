import React from 'react';
class AccordionReports extends React.Component{
    state ={
        search: null
    }

    setHtml(report){
        if(this.props.match.params.name === report.name){
            return <li className="list-group-item list-group-item-action active list-border">{report.name}</li>
        } else {
            return <li onClick={(e) => this.route(report.name)} className="list-group-item list-group-item-action list-border">{report.name}</li>
        }
    }

    handleStateChange(target, value){
        this.setState({[target]: value})
    }

    route(int){
        this.props.history.push(`/admin/reports/${int}`)
    }

    render(){
        return(
            !this.props.reports ? "No data yet" :
            <div>
                <ul className="list-group" style={{overflow:'auto',maxHeight:'54vh',pointerEvents:'auto'}}>
                    <li onClick={(e) => this.route('new')} className="list-group-item list-group-item-action list-border">Add New</li>
                    {this.props.reports.map(
                        report => {
                            return (
                                this.setHtml(report)
                            )
                        }                  
                    )}                               
                </ul>      
            </div>
        )}
}

export default AccordionReports